import { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';


export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSignup, setIsSignup] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        if (name === 'email') setEmail(value);
        if (name === 'password') setPassword(value);
    };
    
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Email:', email, 'Password:', password, 'Is Signup:', isSignup);
        
        // Handle form submission logic here
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
                            <input type="email" id="email" className="block w-full border-gray-300 rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1"   
                                name="email"
                                placeholder="Email"
                                value={email}
                                onChange={handleChange} required />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-black font-medium mb-2">Password</label>
                            <input type="password" id="password" className="block w-full border-gray-300 rounded-sm shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm p-1" 
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange} required />
                        </div>
                        <div className="flex items-center mb-6">
                            <input
                                id="signup"
                                name="signup"
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
