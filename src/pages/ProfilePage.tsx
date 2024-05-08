import formbg from '../assets/formbg.jpg';
import Navbar from '../components/Navbar';
import { useAuth } from "../context/AuthContext";

const ProfilePage = () => {
    const { user } = useAuth();
    return (
        <div className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed bg-gradient-to-b from-black via-sky-950 to-black">
            <Navbar />
            <div className='flex flex-col items-center justify-center font-serif'>
                <div className="bg-cover bg-center bg-no-repeat h-full w-96 rounded-lg" style={{ backgroundImage: `url(${formbg})` }}>
                    <h1 className="text-yellow-600 font-bold text-3xl py-6 text-center font-serif">User Profile</h1>
                    <h2 className='text-2xl font-bold text-center m-2 p-2'>User Name:</h2>
                    <h3 className='text-xl text-center m-2 p-2'>{user?.userName}</h3>
                    <h2 className='text-2xl font-bold text-center m-2 p-2'>E-mail</h2>
                    <h3 className='text-xl text-center m-2 p-2'>{user?.email}</h3>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage