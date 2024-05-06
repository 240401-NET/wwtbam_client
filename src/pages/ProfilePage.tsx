import logo from '../assets/logo.png';
import formbg from '../assets/formbg.jpg';
import Navbar from '../components/Navbar';

const ProfilePage = () => {
    return (
        <div className="bg-cover bg-center bg-no-repeat h-[100vh] w-full fixed bg-gradient-to-b from-black via-sky-950 to-black">
            <Navbar />
            <div className='flex flex-col items-center justify-center font-serif'>
                <img src={logo} alt="logo" className="w-40 h-40 rounded-full mb-12" />
                <div className="bg-cover bg-center bg-no-repeat h-full w-96 rounded-lg" style={{ backgroundImage: `url(${formbg})` }}>
                    <h1 className="text-yellow-600 font-bold text-3xl py-6 text-center font-serif">User Profile</h1>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage