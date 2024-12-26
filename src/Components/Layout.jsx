import Navbar from "./Navbar";
import { Link, Outlet } from "react-router-dom";
import Footer from "./Footer";
import { MdOutlineCall } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa6";
import BottomBar from "./Home/BottomBar";
const Layout = () => {
  return (
    <>
      <div className="sticky top-0 z-[100]">
        <Navbar />
      </div>
      <div>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
      <div className="sticky bg-blue-950 w-full bottom-0 z-[100]">
        <BottomBar />
      </div>
    </>
  );
};

export default Layout;
