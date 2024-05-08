import { FaRegCircleUser } from "react-icons/fa6";
import icon from '../assets/icon.png'

// import { useEffect } from 'react';
import { useAuth } from "../context/AuthContext";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
//if authenticated -> view profile icon + logout
//if not authenticated -> login + signup
// useEffect(() => {
//   const user = localStorage.getItem("user")
//   if (user) {

//   }
// })
const Navbar = () => {
  const { isLoggedIn, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="sticky top-0 fixed mt-6">
      <div className="navbar bg-transparent text-white font-serif">
        <div className="flex-1 justify-center items-center pl-8">
          <a href="/" className="btn btn-ghost text-xl hover:cursor-pointer ">
            <img src={icon} width={100} height={100}/>
          </a>
        </div>
        <div className="flex justify-end w-full">
          <ul className="menu menu-horizontal px-1">
            {isLoggedIn() ? (
              <>
                <div className="flex justify-center items-center">
                  <button className=""></button>
                </div>
                <Link to="/howtoplay">
                  <li className="text-xl hover:scale-110  ">
                    <a>Instructions</a>
                  </li>
                </Link>
                <button className="text-xl hover:scale-110" onClick={logout}>
                  <a>Logout</a>
                </button>
                <div className="flex justify-center items-center pr-7 pl-6 hover:scale-110">
                  <button onClick={() => navigate("/profile")}>
                    <FaRegCircleUser className="text-4xl text-white" />
                  </button>

                </div>
              </>
            ) : (
              <>
                <Link to="/login">
                  <li className="text-xl hover:scale-110">
                    <a>Login</a>
                  </li>
                </Link>
                <Link to="/signup">
                  <li className="text-xl hover:scale-110">
                    <a>Sign Up</a>
                  </li>
                </Link>
              </>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
