import React, { useState, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import logo from "/src/assets/images/logo.png";
import "@fontsource/poppins";

const Navbar = ({ activePage }) => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY < lastScrollY);
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: showNavbar ? 0 : -100 }}
      transition={{ duration: 0.3 }}
      className="w-full fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md shadow-md p-6 flex flex-col items-center h-24"
    >
      <div className="w-full flex justify-between items-center px-4 h-full">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-12" />
        </div>

        <div className="flex space-x-6 text-lg font-medium text-[#05445E]">
          {["job", "companies", "blog", "pricing"].map((name) => (
            <div key={name} className="relative flex flex-col items-center">
              <a
                href={`/${name}`}
                className={
                  activePage === name
                    ? "text-[#05445E] font-bold"
                    : "hover:text-gray-700"
                }
              >
                {name.charAt(0).toUpperCase() + name.slice(1)}
              </a>
              {activePage === "job" && name === "job" && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-[-6px] w-full h-[4px] bg-[#05445E] rounded"
                />
              )}
            </div>
          ))}
        </div>

        <div className="flex items-center space-x-4 text-[#05445E]">
          <button className="px-4 py-2 hover:text-gray-600">Login</button>
          <button className="px-4 py-2 bg-[#05445E] text-white rounded-lg hover:bg-blue-700">
            Signup
          </button>
          <div className="relative group">
            <button className="flex items-center space-x-2 hover:underline">
              <span>Job Seeker</span>
              <ChevronDown size={20} />
            </button>
            <div className="hidden group-hover:block absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg">
              {["Profile", "Applications", "Settings"].map((item) => (
                <a
                  key={item}
                  href="#"
                  className="block px-4 py-2 hover:bg-gray-200"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
