import { assets } from "@/assets/assetimports";
import { Link, useLocation } from "react-router-dom";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CiMenuFries } from "react-icons/ci";
const Navbar = () => {
  const links = [
    { title: "Home", url: "/" },
    { title: "Courses", url: "/courses" },
    { title: "Placements", url: "/placements" },
    { title: "About Us", url: "/about" },
    { title: "Contact Us", url: "/contact" },
  ];

  const location = useLocation();

  return (
    <div className="flex items-center justify-between max-h-28 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
      {/* Logo */}
      <div className="w-24">
        <img src={assets.logo} alt="logo" />
      </div>

      {/* Desktop Navigation Menu */}
      <div className="hidden md:flex space-x-8 items-center">
        <NavigationMenu>
          <NavigationMenuList className="flex space-x-8">
            {links.map((link, i) => (
              <NavigationMenuItem key={i}>
                <NavigationMenuLink
                  as={Link}
                  to={link.url}
                  className={`${
                    location.pathname === link.url
                      ? "bg-blue-600 text-white"
                      : "text-gray-700 hover:text-blue-600"
                  } px-4 py-2 rounded-md text-lg transition-all duration-300`}
                >
                  {link.title}
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className="md:hidden">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-gray-700 hover:text-blue-600">
            <CiMenuFries />
          </DropdownMenuTrigger>

          <DropdownMenuContent
            side="bottom"
            align="end"
            className="bg-white rounded-lg shadow-lg p-4 w-48 z-10"
          >
            <div className="space-y-4">
              {links.map((link, i) => (
                <DropdownMenuItem key={i}>
                  <Link
                    to={link.url}
                    className={`${
                      location.pathname === link.url
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:text-blue-600"
                    } block px-4 py-2 rounded-md text-lg transition-all duration-300`}
                  >
                    {link.title}
                  </Link>
                </DropdownMenuItem>
              ))}
              <DropdownMenuSeparator />
              <div>
                <button className="w-full bg-blue-600 text-white py-3 rounded-md text-lg hover:bg-blue-700 transition-all duration-300">
                  Download Ebook
                </button>
              </div>
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Download Ebook Button (Desktop) */}
      <div className="hidden md:block">
        <button className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg hover:bg-blue-700 transition-all duration-300">
          Download Ebook
        </button>
      </div>
    </div>
  );
};

export default Navbar;
