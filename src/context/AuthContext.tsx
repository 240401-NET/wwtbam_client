//api calls in service, will call here

import React, { createContext, useContext, useEffect, useState } from "react";

import axios from "axios";

import { UserProfile } from "../types";
import { UserContextType } from "../types";
import { useNavigate } from "react-router-dom";
import { signUp, signIn } from "../api/userService";

type Props = { children: React.ReactNode };
const UserContext = createContext<UserContextType>({} as UserContextType);

export const UserProvider = ({ children }: Props) => {
  const navigate = useNavigate();
  const [token, setToken] = useState<string | null>(null);
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [errMsg, setErrMsg] = useState<string | null>(null);

  useEffect(() => {
    const user = localStorage.getItem("user");
    const token = localStorage.getItem("token");
    if (user && token) {
      setUser(JSON.parse(user));
      setToken(token);
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;
    }
    setIsReady(true);
  }, []);

  const register = async (
    Email: string,
    Username: string,
    Password: string,
    Name: string
  ) => {
    await signUp(Email, Username, Password, Name)
      .then((res) => {
        console.log("RES", res);
        const id = res.data.userId;
        localStorage.setItem("token", res?.data.token);
        const userObj = {
          userName: res?.data.userName,
          email: res?.data.email,
          id: id,
        };
        localStorage.setItem("user", JSON.stringify(user));
        setToken(res?.data.token);
        setUser(userObj!);
        navigate("/login");
      })
      .catch((e) => console.error(e));
  };

  const loginUser = async (username: string, password: string) => {
    await signIn(username, password)
      .then((res) => {
        console.log("RES", res);
        if (res) {
          localStorage.setItem("token", res?.data.token);
          const userObj = {
            userName: res?.data.userName,
            email: res?.data.email,
            id: res?.data.userId,
          };

          localStorage.setItem("user", JSON.stringify(userObj));
          setToken(res?.data.token);
          setUser(userObj!);
          navigate("/");
        }
      })
      .catch(() => setErrMsg("Invalid Username and/or Password")
      );
  };

  const isLoggedIn = () => {
    return !!user;
  };

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    setToken("");
    navigate("/login");
  };

  return (
    <UserContext.Provider
      value={{ loginUser, user, token, logout, isLoggedIn, register, errMsg }}
    >
      {isReady ? children : null}
    </UserContext.Provider>
  );
};

export const useAuth = () => useContext(UserContext);

//register with email, password, name, username

// {

//   "Email": "default@gmail.com",

//   "Password": "P@ssw0rd",

//   "Name": "Default",

//   "Username": "Default"

// }