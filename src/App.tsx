// import SignUp from "./pages/SignUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Leaderboard from "./pages/Leaderboard"
import { UserProvider } from "./context/AuthContext"
import Game from "./pages/Game"
import ProfilePage from "./pages/ProfilePage"
import HowToPlay from "./pages/HowToPlay"
// import AuthContext from "./context/AuthContext"

function App() {

  return (
    <Router >
      <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path ="/howtoplay" element ={<HowToPlay />}/>
        <Route path="*" element={<Home />} />
      </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
