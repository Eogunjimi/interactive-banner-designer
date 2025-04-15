import Navbar from "./Components/Navbar";
import Pagetitle from "./Components/Pagetitle";
import Sidebar from "./Pages/Sidebar";
import Banner from "./Pages/Banner";
import Editor from "./Pages/Editor";
import TestBanner from "./Pages/TestBanner";
import ColorAndfonts from "./Components/ColorAndfonts";
// import BannerPro from "./Pages/BannerPro";

// bg-[#f4f4f4]

const Dashboard = () => {
  return (
    <div className="h-screen pb-10 overflow-hidden">
      <div className="h-full"> 
      <Navbar />

       <div className="flex justify-between mx- h-full">
         <Editor/> 
         {/* <Sidebar/> */}

         <div className="w-full bg-[#f4f4f4]" >
          <Pagetitle/>
           {/* <ColorAndfonts/> */}
           <Banner />
           {/* <TestBanner/> */}
           {/* <BannerPro/> */}
         </div>
        
      </div>
      </div>
    </div>
  );
};

export default Dashboard;
