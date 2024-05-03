import SignUpForm from "../components/Form/SignUpForm"
import formbg from '../assets/formbg.jpg'
import logo from '../assets/logo.png'

//register with email, password, name, username
  // {
  //   "Email": "default@gmail.com",
  //   "Password": "P@ssw0rd",
  //   "Name": "Default",
  //   "Username": "Default"
  // }
const SignUp= () => {
  return (
    <div className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-sky-950 to-black font-serif'>
            <img src={logo} alt="logo" className="w-40 h-40 rounded-full mb-12"/>

    <div className="bg-cover bg-center bg-no-repeat h-full w-96 rounded-lg" style={{ backgroundImage: `url(${formbg})` }}>
      <h1 className="text-yellow-600 font-bold text-3xl py-6 text-center font-serif">Signup</h1>
      <SignUpForm Username={""} Email={""} Password={""} Name={""} />
      </div>
    </div>
  )
}

export default SignUp