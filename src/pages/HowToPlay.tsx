import Navbar from '../components/Navbar'
import HTPBG from '../assets/HTPBG.png'
import { Link } from 'react-router-dom';
import { FaPhoneVolume, FaUsers } from 'react-icons/fa6';

const HowToPlay = () =>{

    const buttonClass =
    "border border-8 border-sky-400 rounded-full bg-black p-4 flex items-center text-4xl w-32 h-32 justify-center hover:scale-110 hover:border-white hover:bg-sky-400 hover:border-8 hover:ease-in-out hover:cursor-pointer";
   

    

    return (
        
        <div className="bg-fixed bg-cover bg-center bg-no-repeat  " style={{ backgroundImage: `url(${HTPBG})` }}>
                <Navbar></Navbar>
                <div className = "bg-black p-5 bg-opacity-60">  
                
                <div className = "font-extrabold text-6xl text-center text-yellow-400 ">WHO WANTS TO BE A MILLIONAIRE !!!</div>
                <div className = "font-extrabold text-4xl text-center text-yellow-400 ">HOW TO PLAY</div>
                </div>
            
            
                <div className ="w-1/2 p-4 mx-auto  text-white text-center border bg-black bg-opacity-70 md:bg-opacity-70">
                    <div className="container m-auto grid grid-cols-3 gap-4 text ">
                        
                        <div className = "col-span-3">
                            <h1 className = "text-3xl"> Welcome {}, Heres how to play </h1>
                        </div>
                        
                        <div className = "col-span-2">
                            <p className = "text-2xl text-font-sans">The first thing we need to do is sign up, This will be used to track scores.
                                If you already signed up, All you need to do is login, then click start game. </p>
                        </div>
                    
                        <div className = "col-span-1 .place-items-center">
                            <Link to="/signup">
                                <h1 className="text-xl hover:scale-110 p-50">
                                    <a>Sign Up</a>
                                </h1>
                            </Link>
                        </div>
                    
                        <div className ="col-span-3">
                            <p className = "text-2xl text-font-sans">The objective of the game is quite simple. You will be presented with a question 
                                and you need to answer the question correctly to proceed to the next level.
                                Simply click your answer(you might have to click twice) and when the promt 
                                "Is that your final answer?" appears submit your final answer.
                                Every time you answer correctly your winnings(score) increases. 
                                As the game progresses your questions will increase in difficulty, 
                                but dont worry you have life lines!
                            </p>
                        </div>

                        <div className = "col-span-3">
                            <h1 className = "text-3xl"> Life Lines </h1>
                        </div>
                    
                        <div className = "col-span-1">
                            <button className={buttonClass} title="Eliminates two posible answers">
                            <p className="text-white  text-3xl font-bold">50/50</p>
                            </button>   
                        </div>
                    
                        <div className = "col-span-2">
                         <h1>THE 50/50 LIFE LINE</h1>
                         <p>Are you stuck bewteen a few choices and not sure which one to pick? 
                            well let us eliminate half the choices for you. The 50/50 life line eliminates
                            two posible answers giving you a 50/50 chance to get the correct answer!
                         </p>
                        </div>

                        <div className = "col-span-1">
                            <button className=  {buttonClass} title="A bar graph appears that represents the collected choices from the audience." >
                            <FaUsers className="text-white text-6xl  " />
                            </button>   
                        </div>
                    
                        <div className = "col-span-2">
                         <h1>ASK THE AUDIENCE LIFE LINE</h1>
                         <p>If you dont know the answer, maybe the audience does. The ask the
                            audience life line alows you to ask the audience. When you click 
                            on this icon a bar graph appears that represents the collected choices from the audience.
                         </p>
                        </div>

                        <div className = "col-span-1">
                            <button className={buttonClass} title="The Call a Friend Lifeline suggest an answer for you">
                            <FaPhoneVolume className="text-white text-6xl" />
                            </button>   
                        </div>
                    
                        <div className = "col-span-2">
                         <h1>CALL A FRIEND LIFELINE</h1>
                         <p>Having a hard time, and dont have any friends to call!? 
                            Don't Worry we got you covered! The Call a Friend Lifeline 
                            Suggest an answer for you, and out friend suggesting the answer is pretty smart.

                         </p>
                        </div>
                    </div>
                </div>
            
        </div>
        
    )
}

export default HowToPlay;