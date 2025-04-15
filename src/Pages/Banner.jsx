import { FaQuoteLeft } from "react-icons/fa";
import {useContext} from "react"
import { EditorContext } from "../Context/EditorContext"
import Pagetitle from "../Components/Pagetitle";

const Banner = ( ) => {

  // {title, setTitle}
  // const [title, setTitle] = useState('')
const {title} = useContext(EditorContext);
const {color} = useContext(EditorContext);
const {body} = useContext(EditorContext);
const {footer} = useContext(EditorContext)

  
    return (
      <>
      <div className=" mr-10 h-full w-full"> 
        <div className="flex justify-center items-center  h-[400px]  ">
          {/* Main Content */}
          <div className="flex justify-center items-center" style={{ backgroundColor: color }}>
            <div>
              {/* logo */}
              <div className="flex justify-center items-center">
              <FaQuoteLeft />
              </div>
              <div className="mt-10 ">
                {/* Header */}
                <h1 className="text-center font-bold text-4xl">
                  {title}
                </h1>
                {/* Main Content */}
                <p className="text-center font-semibold mt-10 px-5">
                 {body}
                </p>
              </div>
              {/* Footer */}
              <div className="mt-15">
                <p className="text-center text-sm font-semibold">{footer}</p>
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
      </>
    );
  };
  
  export default Banner;
  