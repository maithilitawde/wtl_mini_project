import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Carousel from "../../components/carousel";
//import Carousel from "react-multi-carousel";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "react-multi-carousel/lib/styles.css";


export default function Home() {
    return (
        <div>
            <div className="bg-no-repeat bg-cover bg-center bg-[url('src/images/background.png')]">
                <div>
                    <Navbar />
                </div>
                <div className="mx-20 my-10"  >
                    <h1 className="text-white font-semibold text-3xl text-start bg-">Trusted since 50 years and counting...</h1>
                </div>
                <div className="mx-20 my-10"  >
                    <h1 className="text-white font-large text-2xl text-start">Choose Life. Choose Bank&Co. </h1>
                </div>
                <div className="flex justify-start mx-20 my-5">
                    <a href="/account">
                        <button className="bg-white text-black text-base font-semibold  hover:bg-blue-950 hover:text-white p-2 rounded-md">
                            Open an account
                        </button>
                    </a>
                </div>
                <div className="flex justify-start mx-20 ">
                    <div className=" my-4 mr-2 mb-20 ">
                        <a href="/aboutus">
                            <button className="bg-white text-black text-sm font-semibold p-2 rounded-md hover:bg-blue-950 hover:text-white w-[100%]">
                                About Us
                            </button>
                        </a>
                    </div>
                    {/* <div className="my-4 mb-20 ">
                        <a href="/aboutus">
                            <button className="bg-white text-black text-sm font-semibold p-2 rounded-md  hover:bg-blue-950 hover:text-white w-[100%]">
                                Find a local branch
                            </button>
                        </a>
                    </div> */}
                </div>
            </div>
            <div className="bg-white">
                <div>
                    <div className="flex justify-center">
                        <h1 className="text-black font-semibold text-2xl m-8">Recent News and Events</h1>
                    </div>
                    <div className="mx-20 my-4">
                        <Carousel />
                    </div>
                </div>
                <div>
                    <div className="flex justify-center">
                        <h1 className="text-black font-semibold text-2xl m-8">Press Releases</h1>
                    </div>
                    <div className="flex">
                        <div className="max-w-xs rounded-xl overflow-hidden shadow-2xl mx-10 my-2">
                            <img src="src/images/p4.jpg" alt="" />
                                <div className="px-6 py-4">
                                    <div className="font-bold text-xl mb-2"> Bank&Co invests $698 million in Bitcoin & Crypto space</div>
                                    <p className="text-gray-700 text-base">
                                    The amount was spread across five crypto and blockchain-based companies, including CertiK, Coin Metrics, Blackdaemon, and Elwood. 
                                    </p>
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
                    <Footer />
                </div>
            </div>
        </div>



    );
}