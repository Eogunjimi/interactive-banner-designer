import { FaQuoteLeft } from "react-icons/fa";
import {useContext} from "react"
import { EditorContext } from "../Context/EditorContext"

const Banner = ( ) => {

  // {title, setTitle}
  // const [title, setTitle] = useState('')
const {title} = useContext(EditorContext);
const {color} = useContext(EditorContext);
const {body} = useContext(EditorContext);
const {footer} = useContext(EditorContext)


  
  
    return (
      <>
        <div className="flex justify-center items-center">
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
                <p className="text-center font-semibold mt-10 ">
                 {body}
                </p>
              </div>
              {/* Footer */}
              <div className="mt-10">
                <p className="text-center text-sm font-semibold">{footer}</p>
              </div>
            </div>
            {/* Image */}
            <img
              src="images/emmanuel.jpg"
              alt="Emmanuel"
              className="h-[400px] w-[380px] "
            />
          </div>
        </div>
      </>
    );
  };
  
  export default Banner;
  