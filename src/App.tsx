// import SignUp from "./pages/SignUp"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/Login"
import SignUp from "./pages/SignUp"
import Home from "./pages/Home"
import Leaderboard from "./pages/Leaderboard"
import { UserProvider } from "./context/AuthContext"
import Game from "./pages/Game"
// import AuthContext from "./context/AuthContext"

function App() {

  return (
    <Router basename="https://240401-net.github.io/wwtbam_client/">
      <UserProvider>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='/' element={<Home />} />
        <Route path="/game" element={<Game />} />
        <Route path="/leaderboard" element={<Leaderboard />} />
        {/* <Route path="/auth" element={<AuthContext />} /> */}
      </Routes>
      </UserProvider>
    </Router>
  )
}

export default App
