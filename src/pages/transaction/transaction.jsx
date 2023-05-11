// App.js
import { useState } from 'react';
import axios from 'axios';
import Navbar from '../../components/navbar';
import Footer from '../../components/footer';


function Transaction() {
    const [amount, setAmount] = useState('');
    const [action, setAction] = useState('deposit');
    const [message, setMessage] = useState('');

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('/api/deposit_withdraw/', {
                action,
                amount,
            });
            setMessage(response.data.message);
        } catch (error) {
            setMessage(error.response.data.error);
        }
    };

    return (
        <div className="bg-no-repeat bg-cover bg-center bg-[url('src/images/background.png')]" >
            <div>
                <Navbar />
            </div>
            <h1 className="flex justify-center bg-white bg-opacity-50 mx-96 rounded-md text-2xl font-bold my-4">Net Banking</h1>
            <div className='flex justify-center bg-white bg-opacity-50 mx-96 rounded-md'>
                <form onSubmit={handleFormSubmit} className=" mx-auto px-4 py-4">
                    <div className="mb-4">
                        <label htmlFor="action">Action:</label>
                        <select
                            id="action"
                            value={action}
                            onChange={(e) => setAction(e.target.value)}
                            className="ml-2 px-2 py-1 border border-gray-300 rounded"
                        >
                            <option value="deposit">Deposit</option>
                            <option value="withdraw">Withdraw</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="amount">Amount:</label>
                        <input
                            type="number"
                            id="amount"
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            className="ml-2 px-2 py-1 border border-gray-300 rounded"
                        />
                    </div>
                    <div className='flex justify-center'>
                    <button
                        type="submit"
                        className=" bg-blue-950 hover:bg-blue-700 text-white py-2 px-4 rounded"
                    >
                        Submit
                    </button>

                    </div>
                    
                </form>

            </div>

            {message && <p className="text-red-500 mt-4">{message}</p>}
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Transaction;
