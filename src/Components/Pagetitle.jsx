import { FiAlertCircle } from "react-icons/fi";



const Pagetitle = () => {
  return (
    <>
      <div className=" bg-white mb-0.5 flex justify-between items-center px-5 h-8 mt-2">
       <span className="flex justify-center items-baseline gap-1">
         <h1 className="text-gray-400 text-lg font-bold">Banner Campaign</h1>  
       </span>  
        <div>
          <FiAlertCircle />
        </div>
      </div>
    </>
  );
};

export default Pagetitle;
