import BackgroundEditor from "../Components/BackgroundEditor"
import ImageUploader from "../Components/imageUploader"
import TextEditor from "../Components/TextEditor"
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
import { FaTextHeight } from "react-icons/fa6";
import { RxTransparencyGrid } from "react-icons/rx";
import { IoShapes } from "react-icons/io5";
import { RxText } from "react-icons/rx";
import { MdCampaign } from "react-icons/md";
import { useState } from "react";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import TextEditorPro from "../Components/TextEditorPro";



const Sidebar = () => {


    const [state, setState] = useState('')
    const [show, setShow] = useState({
        status: true,
        name: ''
    })


    const setElements = (type, name) => {
        setState(type)
        setShow({
            state: false,
            name
        })
    }

    //creating a function and setting the params of name and type to kind of 
    // help us control our state based on some of the input from the click action 


    //h-full
    // left-0 fixed
    return (
        <>
            <div className="flex h-full overflow-hidden ">
                <div className="w-[80px] border-1 border-black  bg-green-600 p-2 h-full">
                    {/* Text Editor */}
                    <div onClick={() => setElements('text', 'text')} className={`${show.name === 'text' ? 'bg-gray-600  rounded-md' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1`}>
                        <span className='text-2xl'><RxText className="text-3xl" />
                        </span>
                        <span className='text-xs font-medium'>Text</span>
                    </div>

                    <div onClick={() => setElements('initImages', 'images')} className={` ${show.name === 'images' ? 'bg-gray-600  rounded-md' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1`}>
                        <span className='text-2xl'><FaCloudUploadAlt /></span>
                        <span className='text-xs font-medium'>Images</span>
                    </div>

                    <div onClick={() => setElements('background', 'background')} className={` ${show.name === 'background' ? 'bg-gray-600  rounded-md' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1`}>
                        <span className='text-2xl'><RxTransparencyGrid /></span>
                        <span className='text-xs font-medium'>Background</span>
                    </div>

                    <div onClick={() => setElements('shapes', 'shapes')} className={`${show.name === 'shapes' ? 'bg-gray-600  rounded-md' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1`}>
                        <span className='text-2xl'><IoShapes />
                        </span>
                        <span className='text-xs font-medium'>Shapes</span>
                    </div>

                    <div onClick={() => setElements('campaigns', 'campaigns')} className={`${show.name === 'campaigns' ? 'bg-gray-600  rounded-md' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1`}>
                        <span className='text-2xl'><MdCampaign />
                        </span>
                        <span className='text-xs font-medium'>Campaigns</span>
                    </div>


                    <div onClick={() => setElements('create', 'create')} className={`${show.name === 'create' ? 'bg-gray-600  rounded-md' : ''} w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1`}>
                        <span className='text-2xl'><IoIosCreate />
                        </span>
                        <span className='text-xs font-medium'>Create</span>
                    </div>

                </div>

                <div className="h-full w-[calc(100%-75px)]">
                    <div className={`${show.status ? 'p-0 -left-[350px]' : 'px-8 left-[74px] py-5 '} bg-gray-600 h-full fixed transition-all w-[350px]   z-30 duration-700`}>

                        <div onClick={() => setShow({ name: '', status: true })} className="flex absolute justify-center items-center bg-green-600 w-[20px] -right-2 text-red-200 top-[40%] cusor-pointer h-[40px] rounded-full p-1">
                            <MdKeyboardArrowLeft />
                        </div>

                        <div>
                            {
                                state === 'text' && <div>
                                   <TextEditorPro/>
                                </div>
                            }
                            {
                                state === 'initImages' && <div>
                                    <ImageUploader />
                                </div>
                            }
                            {
                                state === 'background' && <div>
                                    <BackgroundEditor />
                                </div>
                            }
                            {
                                state === 'shapes' && <div className="grid grid-cols-3 gap-2">
                                    <div className="h-[90px] bg-[red] cusor-pointer"></div>
                                    <div className="h-[90px] bg-[red] rounded-full cusor-pointer"></div>
                                    <div style={{ clipPath: 'polygon(50% 0, 100% 100%, 0 100%' }} className='h-[90px] bg-[#3c3c3d] cusor-pointer'></div>
                                </div>
                            }
                            {
                                state === 'campaigns' && <div>
                                    Campaigns
                                </div>
                            }
                        </div>

                    </div>
                </div>
                {/*using the combination of our state mixed with css styles to perform some certain action
                {/* <TextEditor/> */}
                {/* <ImageUploader/> */}
                {/* <BackgroundEditor/> */}
            </div>
        </>
    )
}

export default Sidebar


// CONTINUATION OF THE PROJECT
// -making sure every of the section have their own functionalites and 
// -making sure all this fuctionlaties reflects on the banner it self
// -code study and practice on the concept learned 
// -reflection of how things are going to be tested in the end

// OUTREACHY TASK TO COMPLETE
// -Create a very powerful final proposal 
// -Copy the task for luposon from jemeelah
// -Submit your final project while testing is till on, 
// -After submission still try to put your code to look more clean and well organise

// PROJECTS FINAL TASK 
// -implement all the final functionalities 
// -look for ways to make the design look more morden 
// -look for design to remodel it, from  dribble 
// -maybe remodel the design and make it look responsive 


// TIPS FOR TODAY - COMPUTER SCIENCE STUDENT AND DEVELOPER 
// -Have presence in the industry for you to be able to get a job, linkedin, post project, put all your educational details, post educational details too
// -Document your progress and milestone for people to see
// -Always sit in front and be ready to connect with your professor  or mentor 
// -3.5 gpa is good 

// LEARNING REACT REFRESH 
// MASTERING THE FUNDERMENTAL THINGS - VERY FAST OVER AGAIN AFTER BUILDING SOME PROJECT
// JAVASCRIPT LEARNING THE IMPORTANT THINGS - VERY FAST OVER AGAIN AFTER BUILDING SOME 






