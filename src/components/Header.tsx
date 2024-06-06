import { NavLink, Outlet } from "react-router-dom";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
const Header = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  return (
    <div className="w-full flex  pb-36 relative  flex-col items-center">
      <nav className="bg-gray-900 w-full relative  flex items-center  min-h-24 text-white">
        <div className="container mx-auto">
          <div className="flex justify-between">
            <div className="flex  w-full  justify-between space-x-7">
              <div>
                {/* Website Logo */}
                <NavLink to="/" className="flex items-center py-4 px-2">
                  <span className="font-semibold text-lg">Logo</span>
                </NavLink>
              </div>
              {/* Primary Navbar items */}
              <div className="hidden md:flex items-center space-x-1">
                <NavLink
                  to="/"
                  className={({ isActive }) => {
                    const linkClasses = ["py-2 px-2 mx-3 relative"];
                    if (isActive) linkClasses.push("border-b-2 border-white");
                    else linkClasses.push("group");
                    return linkClasses.join(" ");
                  }}
                >
                  Ana Sayfa
                  <span className="absolute  left-0 bottom-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300 ease-out"></span>
                </NavLink>
              </div>
            </div>
            {/* Mobile menu button */}
            <div className="md:hidden mr-10 flex items-center">
              <button onClick={handleNav}>
                {nav ? <AiOutlineClose /> : <AiOutlineMenu />}
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={`${
            nav ? "md:hidden" : "hidden"
          } absolute bg-gray-900 right-0 top-20  `}
        >
          <NavLink
            to="/"
            className={({ isActive }) => {
              const linkClasses = ["py-4 px-2 block "];
              if (isActive) linkClasses.push("border-b-2 border-white");

              return linkClasses.join(" ");
            }}
          >
            Ana Sayfa
          </NavLink>
        </div>
      </nav>
      <div className="container flex flex-row  justify-center h-full  mt-11">
        <Outlet />
      </div>
    </div>
  );
};

export default Header;
