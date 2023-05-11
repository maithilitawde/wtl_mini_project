export default function Navbar() {
    return (
        <div>
            <div className="flex justify-items-start shadow-2xl mix-blend-normal">
                <div className="lg:mx-4 lg:m-2 md:mx-5 md:m-2 mx-2 m-2">
                    <a href="/">
                        <img
                            className="lg:h-[75%] lg:w-15 md:h[100%] md:w-16 h-[50%] my-auto w-20"
                            src="src/images/logo.jpg"
                            alt="logo"
                        />
                    </a>
                </div>
                <div className=" flex lg:w-[60%] lg:text-3xl lg:px-4 lg:py-4  md:w-[50%] md:text-lg md:px-2 md:py-6 w-[50%] text-md px-1 py-2 my-4">
                        <h1 className="md:font-bold md:font-mono md:italic text-blue-900 font-medium">Bank&Co</h1>
                        <div className=" md:mx-10 mx-1 my-1  ">
                                <a href="/aboutus">
                                    <h1 className="text-white font-semibold md:text-xl text-md">Who we are</h1>
                                </a>
                        </div>
                        <div className="mx-2 my-1">
                               <a href="/transaction">
                                   <h1 className="text-white font-semibold text-xl">Netbanking</h1>
                               </a>
                        </div>
                </div>
                    <div className=" flex justify-center items-center">
                        <div className=" md:flex ">
                            
                            <a href="/login">
                                <button
                                    className="rounded-sm bg-blue-950 text-white lg:text-base lg:m-2 lg:p-2 lg:w-40 lg:my-4 lg:font-medium hover:bg-[#2f589e] md:m-2 md:px-2 md:p-2 md:w-24 md:my-5 m-1 px-2 p-1 w-[80%]  text-xs   "
                                >
                                    Login/Signup
                                </button>
                            </a>
                            <a href="/card">
                                <button
                                    className="rounded-sm bg-blue-950 text-white lg:text-base lg:m-2 lg:p-2 lg:w-40 lg:my-4 lg:font-medium hover:bg-[#2f589e] md:m-2 md:px-2 md:p-2 md:w-24 md:my-5 m-1 px-2 p-1 w-[80%]  text-xs "
                                >
                                    Get a card
                                </button>
                            </a>
                        </div>
                    </div>
              
            </div>
        </div>
    );
}
