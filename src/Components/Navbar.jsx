import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from './ui/navigation-menu';
import React, { useState } from 'react';
import { CiMenuFries } from 'react-icons/ci';
import { Link, useLocation } from 'react-router-dom';

import { assets } from '@/assets/assetimports';

import DialogForm from './Home/DialogForm';
import { Dialog, DialogContent, DialogTrigger } from './ui/dialog';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };
  const links = [
    { title: 'Home', url: '/' },
    { title: 'Courses', url: '/courses' },
    { title: 'Placements', url: '/placements' },
    { title: 'About Us', url: '/about' },
    { title: 'Contact Us', url: '/contact' },
  ];

  const location = useLocation();

  React.useEffect(() => {
    setMenuOpen(false); // Close the menu when the route changes
  }, [location.pathname]);

  return (
    <div className='sticky top-0 z-50 bg-white shadow-md'>
      <div className='flex items-center justify-between max-h-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4'>
        {/* Logo */}
        <div className='w-24'>
          <img src={assets.logo} alt='logo' />
        </div>

        {/* Desktop Navigation Menu */}
        <div className='hidden md:flex space-x-8 items-center'>
          <NavigationMenu>
            <NavigationMenuList className='flex space-x-8'>
              {links.map((link, i) => (
                <NavigationMenuItem key={i}>
                  <Link
                    to={link.url}
                    className={`px-4 py-2 rounded-md text-lg transition-all duration-300 ${
                      location.pathname === link.url
                        ? 'bg-blue-950 text-white shadow-md'
                        : 'text-gray-700 hover:bg-blue-100 hover:text-blue-950'
                    }`}
                  >
                    {link.title}
                  </Link>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Mobile Menu Dropdown */}
        <div className='md:hidden'>
          <DropdownMenu open={menuOpen} onOpenChange={setMenuOpen}>
            <DropdownMenuTrigger
              className='text-gray-700 hover:text-blue-950'
              onClick={() => setMenuOpen((prev) => !prev)}
            >
              <CiMenuFries size={30} />
            </DropdownMenuTrigger>

            <DropdownMenuContent
              side='bottom'
              align='end'
              className='bg-white rounded-lg shadow-lg p-4 w-48 z-50 mt-2'
            >
              <div className='space-y-4'>
                {links.map((link, i) => (
                  <DropdownMenuItem key={i}>
                    <Link
                      to={link.url}
                      className={`block px-4 py-2 rounded-md text-lg transition-all duration-300 ${
                        location.pathname === link.url
                          ? 'bg-blue-950 text-white shadow-md'
                          : 'text-gray-700 hover:bg-blue-100 hover:text-blue-950'
                      }`}
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.title}
                    </Link>
                  </DropdownMenuItem>
                ))}
                <DropdownMenuSeparator />
                <div>
                  <button className='w-full bg-blue-950 text-white py-3 rounded-md text-lg hover:bg-blue-700 transition-all duration-300'>
                    Download Ebook
                  </button>
                </div>
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {/* Download Ebook Button (Desktop) */}
        <div className='hidden md:block'>
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <button className='bg-blue-950 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition-all duration-300'>
                Download Ebook
              </button>
            </DialogTrigger>
            <DialogContent className='bg-white rounded-lg p-4 md:mt-10 max-w-md mx-auto'>
              <DialogForm
                closeDialog={handleCloseDialog}
                from={'Download Ebook'}
              />
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
