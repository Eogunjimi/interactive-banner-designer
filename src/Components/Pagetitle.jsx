import { FiAlertCircle } from "react-icons/fi";
import { BsTag } from "react-icons/bs";
import { IoIosArrowForward } from "react-icons/io";



const Pagetitle = () => {
  return (
    <>
      <div className="h-10 mb-0.5 flex justify-between items-center px-5">
       <span className="flex justify-center items-baseline gap-1"> <h1 className="text-gray-400 text-lg font-bold">Banner Campaign</h1>  
       </span>  
        <div>
          <FiAlertCircle />
        </div>
      </div>
    </>
  );
};

export default Pagetitle;
