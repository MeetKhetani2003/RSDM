import { FaWhatsapp } from 'react-icons/fa6';
import { MdOutlineCall } from 'react-icons/md';
import { Link, Outlet } from 'react-router-dom';

import BottomBar from './Home/BottomBar';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = () => {
  return (
    <div className='overflow-x-hidden'>
      <div className='sticky top-0 z-[100]'>
        <Navbar />
      </div>
      <div className='min-h-screen'>
        <Outlet />
      </div>
      <div>
        <Footer />
      </div>
      <div className='sticky bg-blue-950 w-full bottom-0 z-[100]'>
        <BottomBar />
      </div>
    </div>
  );
};

export default Layout;
