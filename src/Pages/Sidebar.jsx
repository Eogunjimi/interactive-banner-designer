import BackgroundEditor from "../Components/BackgroundEditor"
import ImageUploader from "../Components/imageUploader"
import TextEditor from "../Components/TextEditor"
import { FaCloudUploadAlt } from "react-icons/fa";


const Sidebar =()=>{

    return(
        <>
        <div className="w-50 border-1 border-black mx-1">
           {/* Text Editor */}
           <div>
           <FaCloudUploadAlt className="text-red-500 text-4xl" />
           </div>


            {/* <TextEditor/> */}
            {/* <ImageUploader/> */}
            {/* <BackgroundEditor/> */}
        </div>
        </>
    )
}

export default Sidebar