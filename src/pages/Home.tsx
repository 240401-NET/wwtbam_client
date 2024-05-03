import { Link } from 'react-router-dom';
import backdrop from '../assets/wallpaper.webp'
import Navbar from '../components/Navbar'
import { useAuth } from '../context/AuthContext'
const Home = () => {
  //Instructions -> modal
  //startgame -> link to game
  const { isLoggedIn } = useAuth();

  return (
    <div>
      
      <div className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed" style={{ backgroundImage: `url(${backdrop})` }}>
        <Navbar />
        <div className=" h-full w-full">
          <div className="flex flex-col justify-center items-center h-full w-full">
            
            <div className='flex gap-x-12 pt-6 justify-center items-end '>
              {isLoggedIn() ? (
                <Link to="/game">
              <button className='border border-2 border-yellow-900 text-yellow-800 font-serif text-xl font-bold bg-gradient-to-r from-yellow-700 via-yellow-200 to-yellow-500 h-24 w-48 rounded-xl hover:scale-110'>START GAME</button>
              </Link>
              ) : ( 
                <>
                <button className='border border-2 border-yellow-900 text-yellow-800 font-serif text-xl font-bold bg-gradient-to-r from-yellow-700 via-yellow-200 to-yellow-500 h-24 w-48 rounded-xl hover:scale-110'>START GAME</button>
                </>
              )}
              <Link to="/leaderboard">
                <button className='border border-2 border-yellow-900 text-yellow-800 font-serif text-xl font-bold bg-gradient-to-r from-yellow-700 via-yellow-200 to-yellow-500 h-24 w-48 rounded-xl hover:scale-110'>LEADERBOARD</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home