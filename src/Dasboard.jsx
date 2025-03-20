import Navbar from "./Components/Navbar";
import Pagetitle from "./Components/Pagetitle";
import Banner from "./Pages/Banner";
import Editor from "./Pages/Editor";

const Dashboard = () => {
  return (
    <div className="bg-[#f4f4f4]">
      <Navbar />
      <Pagetitle/>

       <div>
        <Banner />
        <Editor/>
      </div>
    </div>
  );
};

export default Dashboard;
