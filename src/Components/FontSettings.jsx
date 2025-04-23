import React from 'react'
import { BiFontColor } from "react-icons/bi";
import { AiOutlineFontSize } from "react-icons/ai";
import { BiFontFamily } from "react-icons/bi";

const FontSettings = () => {
  return (
    <div className='w-full'>
         {/* font color, size, style */}
            <div className="flex items-center justify-between w-[100px]">
      
              <span className="flex items-center">
                 <BiFontColor />
                 <div className="bg-red-600 h-3 w-3 my-2 "></div>
              </span>
             
              <span className="flex items-center">
                 <AiOutlineFontSize />
                 <div className="bg-red-600 h-3 w-3 my-2 "></div>
              </span>
      
              <span className="flex items-center">
              <BiFontFamily />
                 <div className="bg-red-600 h-3 w-3 my-2 "></div>
              </span>
            
            </div>
    </div>
  )
}

export default FontSettings
