import React from 'react'
import Banner from './Banner'

const TestBanner = () => {
    return (
        <>  
        <div className='h-full'>

            <div className="bg-[white] h-full flex justify-center items-center  ">
                <div className=" h-[400px]  w-[1000px] pb-10">
                    {/* the main banner itself */}
                    

                    <div className="flex justify-center items-center  h-[400px]  ">
                        {/* Main Content */}
                        <div className="flex justify-center items-center bg-purple-600" >
                            <div>
                                {/* logo */}
                                <div className="flex justify-center items-center">
                                    HI
                                </div>
                                <div className="mt-10 ">
                                    {/* Header */}
                                    <h1 className="text-center font-bold text-4xl">
                                        WHAT IS HAPPENING HERE
                                    </h1>
                                    {/* Main Content */}
                                    <p className="text-center font-semibold mt-10 px-5">
                                        I WILL TELL YOU A VERY HAPPY WITH THIS APP M JUST BUILDING WAIT AND SEE
                                    </p>
                                </div>
                                {/* Footer */}
                                <div className="mt-15">
                                    <p className="text-center text-sm font-semibold">LOOK OUT FOR MY GREATE WORK GUYS</p>
                                </div>
                            </div>
                            {/* Image */}
                            <img
                                src="images/dev.jpg"
                                alt="Emmanuel"
                                className="h-[400px] w-[380px] "
                            />
                        </div>
                    </div>

                </div>
            </div>
            
            </div>
            </>
            )
}

            export default TestBanner


        //     <div className="flex justify-center items-center bg-red-600 h-full w-full">
        //     {/* <Banner/> */}
        // </div>