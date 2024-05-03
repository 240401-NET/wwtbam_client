import { useEffect, useState } from 'react'; 
import backdrop from '../assets/wallpaper.webp' 
import formbg from '../assets/formbg.jpg' 
import { Game } from "../models/Game"; 
import { SingleGameTableRow } from '../components/SingleGameTableRow'; 

import Navbar from '../components/Navbar'; 

const Leaderboard = () => { 
    const [leaderboardState, setLeaderboardState] = useState<Game[]>([]); 
    useEffect(()=>{getLeaderboard()}, []); 
    const getLeaderboard = async () => { 
        fetch("https://wwtbam.azurewebsites.net/api/game/highest/10") 
        // fetch("http://localhost:5211/api/game/highest/10") 
        .then(response => {return response.json()}) 
        .then(data => setLeaderboardState(data)) 
        .catch(error => console.log(error)); 
    } 


    return ( 
        <div className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed" style={{ backgroundImage: `url(${backdrop})` }}> 
            <Navbar /> 
            <div className=" w-full h-full text-3xl "> 
                <div className='flex justify-center items-center text-center  pt-8'> 
                    <div className='bg-cover bg-center bg-no-repeat rounded-lg px-6' style={{backgroundImage: `url(${formbg})`, backgroundSize: 'cover'}}> 
                <h1 className=' font-serif  font-bold text-yellow-700 text-5xl py-4 '>TOP TEN</h1>   </div>             </div> 
                <div className="flex justify-center items-center pt-12 "> 
                    <table className="table-auto rounded-xl shadow-md  h-full pb-6" style={{backgroundImage: `url(${formbg})`, backgroundSize: 'cover'}}>  
                        <thead > 
                            <tr > 
                                <th className="pt-6 pb-2 px-4 font-semibold text-yellow-800">Place</th> 
                                <th className="pt-6 pb-2 px-4 font-semibold text-yellow-800">Name</th> 
                                <th className="pt-6 pb-2 px-4 font-semibold text-yellow-800">Score</th> 
                                <th className="pt-6 pb-2 px-4 font-semibold text-yellow-800">Date</th> 
                            </tr> 
                        </thead> 
                        <tbody > 
                            {leaderboardState.map((game, index) => 
                                <SingleGameTableRow key={game.gameId} data={game} place={index + 1}></SingleGameTableRow> 
                            )} 
                        </tbody> 
                    </table> 
                </div> 
            </div> 
        </div> 
    ) 
} 

 

export default Leaderboard 