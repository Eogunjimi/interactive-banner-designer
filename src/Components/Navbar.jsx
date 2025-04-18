import { FaUser } from "react-icons/fa";
import { SiAnycubic } from "react-icons/si";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center px-10
       bg-white h-10 my- mx- rounded-sm">
        <div>
          <SiAnycubic />
        </div>
        <div className="border-1 border-gray-300 py-1 px-2 
        flex justify-center items-center rounded-full gap-1">
          <FaUser />
          <p className="text-sm">folusho jimi</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
