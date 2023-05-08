import { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';
import {  useNavigate } from 'react-router-dom';


export default function Login() {
    const navigate = useNavigate();
    const [loginInfo, setloginInfo] = useState({
        email : '',
        pwd : '',
        
    });

    const [isSignup , setIsSignup] = useState(0);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setloginInfo((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };
    
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        setloginInfo(
            {
                email : '',
                pwd : '',
            }
        );
        console.log(loginInfo);
        navigate('/');
    };

    return (
        <div className="bg-no-repeat bg-cover bg-center bg-[url('src/images/background.png')]">
            <div>
                <Navbar />
            </div>
            <div className="flex flex-col items-center justify-center min-h-screen">

                <div className="bg-opacity-50 bg-white rounded-lg shadow-lg p-8">

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <h2 className="flex justify-center text-2xl font-semibold mb-4">{isSignup ? 'Sign Up' : 'Log In'}</h2>
                        <div>
                            <label htmlFor="email" className="block text-black font-medium mb-2">Email</label>
                            <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="email" id="email" placeholder="abc@xyz.com" value={loginInfo.email} onChange={handleChange} />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-black font-medium mb-2">Password</label>
                            <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="pwd" id="pwd" placeholder="****" value={loginInfo.pwd} onChange={handleChange} />
                        </div>
                        <div className="flex items-center mb-6">
                            <input
                                id="isSignup"
                                name="isSignup"
                                type="checkbox"
                                className="form-checkbox h-4 w-4 text-indigo-600 transition duration-150 ease-in-out"
                                checked={isSignup}
                                onChange={() => setIsSignup(!isSignup)}
                            />
                            <label htmlFor="signup" className="ml-2 block text-gray-900 ">
                                Sign Up
                            </label>
                        </div>
                        <div className="flex items-center justify-center">
                            
                            <button
                                className="bg-blue-950 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                                
                            >
                                {isSignup ? 'Sign Up' : 'Log In'}
                            </button>
                            
                            
                        </div>
                    </form>
                </div>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
            );
}
