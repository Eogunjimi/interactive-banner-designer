import BackgroundEditor from "../Components/BackgroundEditor"
import ImageUploader from "../Components/imageUploader"
import TextEditor from "../Components/TextEditor"
import { FaCloudUploadAlt } from "react-icons/fa";
import { FaShapes } from "react-icons/fa";
import { FaTextHeight } from "react-icons/fa6";
import { RxTransparencyGrid } from "react-icons/rx";
import { IoShapes } from "react-icons/io5";



const Sidebar = () => {

    return (
        <>
            <div className="w-50 border-1 border-black mx-1 p-2 bg-red-600">
                <div>
                {/* Text Editor */}
                <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1  `}>
                    <span className='text-2xl'><FaTextHeight /></span>
                    <span className='text-xs font-medium'>Text</span>
                </div>

                <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1  `}>
                    <span className='text-2xl'><FaCloudUploadAlt /></span>
                    <span className='text-xs font-medium'>Images</span>
                </div>

                <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1  `}>
                    <span className='text-2xl'><RxTransparencyGrid /></span>
                    <span className='text-xs font-medium'>Background</span>
                </div>

                <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1  `}>
                    <span className='text-2xl'><IoShapes />
                    </span>
                    <span className='text-xs font-medium'>Shapes</span>
                </div>

                <div className={` w-full h-[80px] cursor-pointer flex justify-center flex-col items-center gap-1  `}>
                    <span className='text-2xl'><FaShapes /></span>
                    <span className='text-xs font-medium'>Shapes</span>
                </div>
                </div>

                <div className="h-full w-[calc(100%-75px)]">

                </div>
                {/* <TextEditor/> */}
                {/* <ImageUploader/> */}
                {/* <BackgroundEditor/> */}
            </div>
        </>
    )
}

export default Sidebar