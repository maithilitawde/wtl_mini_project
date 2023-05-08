import { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function BankAccountForm() {

    const [accountInfo, setaccountInfo] = useState(
        {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            address: '',
            educationLevel: '',
            accountType: '',
            accountCategory: ''


        }
    );

    const [aadharCardFile, setAadharCardFile] = useState(null);


    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setaccountInfo((prevState) => ({
            ...prevState,
            [name]: value
        }));

    }

    const handleFileInputChange = (event) => {
        setAadharCardFile(event.target.files[0]);
        console.log();
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        setaccountInfo(
            {
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                address: '',
                educationLevel: '',
                accountType: '',
                accountCategory: ''

            }
        );
        console.log(accountInfo);
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
                            <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="firstName" id="firstName" placeholder="John" value={accountInfo.firstName} onChange={handleInputChange} />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold block '>
                                Last Name:

                            </label>
                            <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="lastName" id="lastName" placeholder="Doe" value={accountInfo.lastName} onChange={handleInputChange} />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold  block  '>
                                Email:

                            </label>
                            <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="email" id="email" placeholder="abc@xyz.com" value={accountInfo.email} onChange={handleInputChange} />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold  block '>
                                Phone:

                            </label>
                            <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="phone" id="phone" placeholder="1234567890" value={accountInfo.phone} onChange={handleInputChange} />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold  block  '>
                                Address:

                            </label>
                            <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="address" id="address" placeholder="address" value={accountInfo.address} onChange={handleInputChange} />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold  block  '>
                                Education Level:

                            </label>
                            <div className="flex items-center">
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="educationLevel"
                                    value="High School"
                                    checked={accountInfo.educationLevel === 'High School'}
                                    onChange={handleInputChange}
                                />
                                <span className="ml-2">High School</span>
                            </div>
                            <div className="flex items-center">
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="educationLevel"
                                    value="Bachelors Degree"
                                    checked={accountInfo.educationLevel === 'Bachelors Degree'}
                                    onChange={handleInputChange}
                                />
                                <span className="ml-2">Bachelors Degree</span>
                            </div>
                            <div className="flex items-center">
                                <input
                                    className="mr-2"
                                    type="radio"
                                    name="educationLevel"
                                    value="Masters Degree"
                                    checked={accountInfo.educationLevel === 'Masters Degree'}
                                    onChange={handleInputChange}
                                />
                                <span className="ml-2">Masters Degree</span>
                            </div>
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold block '>
                                Aadhar Card:

                            </label>
                            <input type="file" name={aadharCardFile} onChange={handleFileInputChange} className=' p-2 rounded-md m-2 block w-full' />
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold block '>
                                Account Type:

                            </label>
                            <div>
                                <div className="flex items-center">
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="accountType"
                                        value="Checking"
                                        checked={accountInfo.accountType === 'Checking'}
                                        onChange={handleInputChange}
                                    />
                                    <span className="ml-2">Checking</span>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="accountType"
                                        value="Saving"
                                        checked={accountInfo.accountType === 'Saving'}
                                        onChange={handleInputChange}
                                    />
                                    <span className="ml-2">Saving</span>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="accountType"
                                        value="Current"
                                        checked={accountInfo.accountType === 'Current'}
                                        onChange={handleInputChange}
                                    />
                                    <span className="ml-2">Current</span>
                                </div>
                            </div>
                        </div>
                        <div className='m-4'>
                            <label className='m-2 font-semibold block '>
                                Account Category:

                            </label>
                            <div>
                                <div className="flex items-center">
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="accountCategory"
                                        value="Individual"
                                        checked={accountInfo.accountCategory === 'Individual'}
                                        onChange={handleInputChange}
                                    />
                                    <span className="ml-2">Individual</span>
                                </div>
                                <div className="flex items-center">
                                    <input
                                        className="mr-2"
                                        type="radio"
                                        name="accountCategory"
                                        value="Joint"
                                        checked={accountInfo.accountCategory === 'Joint'}
                                        onChange={handleInputChange}
                                    />
                                    <span className="ml-2"> Joint</span>
                                </div>
                            </div>
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