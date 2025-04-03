 import { useContext, useState } from "react";
 import { EditorContext } from "../Context/EditorContext";
 import { FaRegEdit } from "react-icons/fa";
 import { IoColorPalette } from "react-icons/io5";
 import { FiSettings } from "react-icons/fi";
 
  
 const TextEditor = () => {
 
   const { title, setTitle } = useContext(EditorContext);
   const { body, setBody } = useContext(EditorContext);
   const { footer, setFooter } = useContext(EditorContext);
 
   return (
     <>
       <div className={`h-50  bg-[#f4f4f4] px-2`}>
         <div className="h-8 bg-white rounded-sm my-2 pt-2 pl-3">
         <FiSettings/>
         </div>
 
         <form action="" className=" justify-between">
           <div>
             <div className="flex items-center">
               <FaRegEdit />
               <label className="font-semibold">Edit Title</label>
             </div>
 
             <textarea
               type="text"
               required
               value={title}
               onChange={(e) => setTitle(e.target.value)}
               className="border-1 rounded-sm"
             />
           </div>
 
           <div>
             <div className="flex items-center">
               <FaRegEdit />
               <label className="font-semibold">Edit Body</label>
             </div>
 
             <textarea
               type="text"
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
               className="border-1 rounded-sm"
             />
           </div>
 
           <div>
             <div className="flex items-center">
               <FaRegEdit />
               <label className="font-semibold">Edit Footer</label>
             </div>
             <textarea
               type="text"
               required
               value={footer}
               onChange={(e) => setFooter(e.target.value)}
               className="border-1 rounded-sm"
             />
           </div>
         </form>
       </div>
     </>
   );
 };
 
 export default TextEditor;
 