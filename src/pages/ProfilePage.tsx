import logo from '../assets/logo.png';
import formbg from '../assets/formbg.jpg';
import Navbar from '../components/Navbar';
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
    const { user } = useAuth();
    return (
        <div className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed bg-gradient-to-b from-black via-sky-950 to-black">
            <Navbar />
            <div className='flex flex-col items-center justify-center font-serif'>
                <img src={logo} alt="logo" className="w-40 h-40 rounded-full mb-12" />
                <div className="bg-cover bg-center bg-no-repeat h-full w-96 rounded-lg py-6" style={{ backgroundImage: `url(${formbg})` }}>
                    <h1 className="text-yellow-600 font-bold text-3xl text-center font-serif">User Profile</h1>
                    <hr />
                    <hr />
                    <hr />
                    <div>
                        <h2 className='text-center text-2xl m-2 p-2'>User Name:</h2>
                        <h3 className='text-center text-lg m-2 p-2'>{user?.userName}</h3>
                        <h2 className='text-center text-2xl m-2 p-2'>Email:</h2>
                        <h3 className='text-center text-lg m-2 p-2'>{user?.email}</h3>
                    </div>
                </div>
                <hr />
            </div>
        </div>
    )
}

export default ProfilePage