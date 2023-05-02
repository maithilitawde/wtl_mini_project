import { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function BankAccountForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [educationLevel, setEducationLevel] = useState('');
    const [aadharCardFile, setAadharCardFile] = useState(null);
    const [accountType, setAccountType] = useState('');
    const [accountCategory, setAccountCategory] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'email':
                setEmail(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'address':
                setAddress(value);
                break;
            case 'educationLevel':
                setEducationLevel(value);
                break;
            case 'accountType':
                setAccountType(value);
                break;
            case 'accountCategory':
                setAccountCategory(value);
                break;
            default:
                break;
        }
    }

    const handleFileInputChange = (e) => {
        setAadharCardFile(e.target.files[0]);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // Code to submit the form data to the server goes here
    }

    return (
        <div className="bg-no-repeat bg-cover bg-center bg-[url('src/images/background.png')] ">
            <div>
                <Navbar />
            </div>
            <div className='bg-opacity-50 bg-white mx-72 my-20 rounded-md'>
                <div className='pb-2 pt-6'>
                    <h2 className='text-center text-blue-950 font-bold italic text-2xl'>Bank&Co</h2>
                </div>

                <form onSubmit={handleSubmit} className=" p-8 rounded-lg shadow-md  ">
                    <div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold block '>
                                First Name:
                            </label>
                            <input type="text" name="firstName" value={firstName} onChange={handleInputChange} className='rounded-md m-2 block w-full p-2 ' />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold block '>
                                Last Name:

                            </label>
                            <input type="text" name="lastName" value={lastName} onChange={handleInputChange} className='rounded-md m-2 block w-full p-2' />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold  block  '>
                                Email:

                            </label>
                            <input type="email" name="email" value={email} onChange={handleInputChange} className='  p-2 rounded-md m-2 block w-full' />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold  block '>
                                Phone:

                            </label>
                            <input type="tel" name="phone" value={phone} onChange={handleInputChange} className='  p-2 rounded-md m-2 block w-full' />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold  block  '>
                                Address:

                            </label>
                            <input type="text" name="address" value={address} onChange={handleInputChange} className='  p-2 rounded-md m-2 block w-full' />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold  block  '>
                                Education Level:

                            </label>
                            <div className="flex items-center">
                                <input type="radio" name="educationLevel" value="High School" checked={educationLevel === 'High School'} onChange={handleInputChange} className='rounded-md m-2' />
                                <span className="ml-2">High School</span>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="educationLevel" value="Bachelor's Degree" checked={educationLevel === "Bachelor's Degree"} onChange={handleInputChange} className='rounded-md m-2' />
                                <span className="ml-2">Bachelors Degree</span>
                            </div>
                            <div className="flex items-center">
                                <input type="radio" name="educationLevel" value="Master's Degree" checked={educationLevel === "Master's Degree"} onChange={handleInputChange} className='rounded-md m-2' />
                                <span className="ml-2">Masters Degree</span>
                            </div>
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold block '>
                                Aadhar Card:

                            </label>
                            <input type="file" onChange={handleFileInputChange} className=' p-2 rounded-md m-2 block w-full' />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold block '>
                                Account Type:

                            </label>
                            <select value={accountType} onChange={handleInputChange} className="p-2 block w-full m-2 rounded-md shadow-sm ">
                                <option value="checking">Checking</option>
                                <option value="savings">Savings</option>
                                <option value="credit">Credit</option>
                            </select>
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold block '>
                                Account Category:

                            </label>
                            <select value={accountCategory} onChange={handleInputChange} className=" p-2 block w-full m-2 rounded-md shadow-sm">
                                <option value="personal">Personal</option>
                                <option value="business">Business</option>
                                <option value="joint">Joint</option>
                            </select>
                        </div>
                        <div className='m-6'>
                            <button type="submit" className="bg-blue-950 text-white py-2 px-4 rounded mt-4 hover:bg-blue-600">Open Account</button>
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <Footer />
            </div>
        </div>

    );
}