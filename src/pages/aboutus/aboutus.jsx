import Navbar from "../../components/navbar";
import Footer from "../../components/footer";



export default function AboutUs()
{
    return(
        <div >
        <div className="bg-no-repeat bg-cover bg-center bg-[url('src/images/background.png')]">
            <Navbar/>
        </div>
        
        <div>
                    <div className="flex justify-center">
                        <h1 className="text-black font-semibold text-2xl m-8">Our Timeline</h1>
                    </div>
                    <div >
                        <div className="bg-red-500 flex justify-center mx-20 my-20">
                        <div className=" flex justify-center max-w-xs overflow-hidden shadow-2xl">
                            <img className = " p-20" src="src/images/p4.jpg" alt="" />
                                <div className="p-20">
                                    <div className="font-bold text-xl mb-2"> Bank&Co invests $698 million in Bitcoin & Crypto space</div>
                                    <p className="text-gray-700 text-base">
                                    The amount was spread across five crypto and blockchain-based companies, including CertiK, Coin Metrics, Blackdaemon, and Elwood. 
                                    </p>
                                </div> 
                        </div>
                        </div>
                        
                        <div className="max-w-xs rounded-xl overflow-hidden shadow-2xl mx-10 my-2">
                            <img src="src/images/p5.jpg" alt="" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2"> Bank&Co launches two-year programme of business support, to drive growth across the USA  tech sector</div>
                                    <p className="text-gray-700 text-base">
                                    We are delighted to continue to play a role in driving growth within the USA tech sector by helping startups, scaleups and entrepreneurs build successful businesses. 
                                    </p>
                                </div>
                        </div>
                        <div className="max-w-xs rounded-xl overflow-hidden shadow-2xl mx-10 my-2">
                            <img src="src/images/p6.jpg" alt="" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2">Gold prices predictions</div>
                                    <p className="text-gray-700 text-base">
                                    Gold is expected to trade at 1844.68 USD/t oz. by the end of this quarter, according to Trading Economics global macro models and analysts expectations. 
                                    </p>
                                </div>
                        </div>
                    </div>

                </div>
        <div>
            <Footer/>
        </div>
    </div>

    );
    

}