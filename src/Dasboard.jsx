import FontSettings from "./Components/FontSettings";
import Navbar from "./Components/Navbar";
import Pagetitle from "./Components/Pagetitle";
import Banner from "./Pages/Banner";
import Editor from "./Pages/Editor";


const Dashboard = () => {
  return (
    <div className="h-screen pb-10 overflow-hidden">
      <div className="h-full">
        <Navbar />
        <div className="  flex justify-between mx- h-full ">
          <Editor />
          <div className="w-full bg-[#f4f4f4]" > 
            <Pagetitle />
            <FontSettings/>
            <Banner />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
