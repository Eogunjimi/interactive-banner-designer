import { FaQuoteLeft } from "react-icons/fa";
import { useContext } from "react"
import { EditorContext } from "../Context/EditorContext"

const Banner = () => {
  const { color, body, button, title,bannerImage  } = useContext(EditorContext);

  return (
    <>  
      <div className='flex justify-center items-center 
      h-[500px] ' data-testid='campaign-banner'>

<div className='lg:h-50 h-35  w-[410px] lg:w-[600px] 
flex justify-center items-center px-1.5 border-2
 border-amber-50' style={{ backgroundColor: color }}>
  
{/* The Title Side */}
  <div className='h-35 lg:h-50 w-[200px] 
  border-l-2 border-amber-50 flex justify-center items-center'>
    <h1 className='text-3xl text-center'>
    {title}
    </h1>
  </div>



{/* Banner Image */}
  <img
    src={bannerImage}
    alt="keyboard"
    className='lg:h-50 h-35 block lg:w-[200px] w-[90px] mx-2'
  />

{/*The Body Side*/}
  <div className='h-35 lg:h-50 w-[200px] border-r-2
border-amber-50 flex flex-col justify-center items-center'>
    <div className='max-w-36'>
      <p className='text-xs'>
      {body}
      </p>
    </div>

{/* The Button */}
    <button
      className='text-[#FFFFFF] bg-[#333333] text-xs mt-3
      lg:mt-5 py-2  px-7  rounded-full'>
      {button}
    </button>
    
  </div>
</div>

</div>
    </>
  );
};

export default Banner;


 