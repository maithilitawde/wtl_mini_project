import { useState } from 'react';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';

export default function CardForm() {
    const [cardInfo, setCardInfo] = useState({
        cardHolderName: '',
        cardType: '',
        expiryMonth: '',
        expiryYear: '',
        cardvariant: '',
        address: '',
        phone: '',
        email: '',
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCardInfo((prevState) => ({
            ...prevState,
            [name]: value
        }));


    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(cardInfo);
    };

    return (
        <div className="bg-no-repeat bg-cover bg-center bg-[url('src/images/background.png')]">
            <div>
                <Navbar />
            </div>
            <div className=" bg-opacity-50 bg-white container mx-auto max-w-lg mt-10 mb-10 rounded-md px-4 py-4">
                <h2 className='text-center font-bold text-xl m-4'>Debit/Credit Card Application Form</h2>
                <form onSubmit={handleSubmit}>
                    <label className="block mb-2 font-bold text-black" htmlFor="cardHolderName">Card Holder Name</label>
                    <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="cardHolderName" id="cardHolderName" placeholder="John Doe" value={cardInfo.cardHolderName} onChange={handleInputChange} />

                    <div className="mb-4">
                        <p className="mb-2 font-bold">Card Type:</p>
                        <label className="mr-4">
                            <input
                                className="mr-2"
                                type="radio"
                                name="cardType"
                                value="credit"
                                checked={cardInfo.cardType === 'credit'}
                                onChange={handleInputChange}
                            />
                            Credit
                        </label>
                        <label>
                            <input
                                className="mr-2"
                                type="radio"
                                name="cardType"
                                value="debit"
                                checked={cardInfo.cardType === 'debit'}
                                onChange={handleInputChange}
                            />
                            Debit
                        </label>
                    </div>

                    <div className="flex mb-3">
                        <div className="w-1/2 pr-2">
                            <label className="block mb-2 font-bold text-black" htmlFor="expiryMonth">Expiry Month</label>
                            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="expiryMonth" id="expiryMonth" placeholder="MM" value={cardInfo.expiryMonth} onChange={handleInputChange} />
                        </div>
                        <div className="w-1/2 pl-2">
                            <label className="block mb-2 font-bold text-black" htmlFor="expiryYear">Expiry Year</label>
                            <input className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="expiryYear" id="expiryYear" placeholder="YYYY" value={cardInfo.expiryYear} onChange={handleInputChange} />
                        </div>
                    </div>

                    <div className="mb-4">
                        <p className="mb-2 font-bold">Please select the card variant you wish to apply for:</p>
                        <label className="mr-4">
                            <input
                                className="mr-2"
                                type="radio"
                                name="cardType"
                                value="New"
                                checked={cardInfo.cardType === 'New'}
                                onChange={handleInputChange}
                            />
                            New
                        </label>
                        <label>
                            <input
                                className="mr-2"
                                type="radio"
                                name="cardType"
                                value="Domestic"
                                checked={cardInfo.cardType === 'Domestic'}
                                onChange={handleInputChange}
                            />
                            Domestic
                        </label>
                        <label>
                            <input
                                className=" ml-2  mr-2"
                                type="radio"
                                name="cardType"
                                value="International"
                                checked={cardInfo.cardType === 'International'}
                                onChange={handleInputChange}
                            />
                            International
                        </label>
                    </div>
                    <label className="block mb-2 font-bold text-black" htmlFor="phone">Phone Number</label>
                    <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="phone" id="phone" placeholder="1234567890" value={cardInfo.phone} onChange={handleInputChange} />

                    <label className="block mb-2 font-bold text-black" htmlFor="email">Email id</label>
                    <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="email" id="email" placeholder="abc@xyz.com" value={cardInfo.email} onChange={handleInputChange} />


                    <label className="block mb-2 font-bold text-black" htmlFor="address">Address of Delivery</label>
                    <input className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline" type="text" name="address" id="address" placeholder="Address" value={cardInfo.address} onChange={handleInputChange} />

                    <button className="w-full px-4 py-2 font-bold text-white bg-blue-950 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline" type="submit">Submit</button>

                </form >
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}  
