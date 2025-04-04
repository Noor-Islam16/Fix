import React from "react";
import { useState, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";
import logo from "/src/assets/Images/logo.png";
import group from "/src/assets/Images/Group.png";
import "@fontsource/lato";
import "@fontsource/poppins";
import "@fontsource/inter";
import companiesImage from "/src/assets/Images/Group1.png";
import circleImage1 from "/src/assets/Images/image 7.png";
import circleImage2 from "/src/assets/Images/image 17.png";
import circleImage3 from "/src/assets/Images/image 4.png";
import circleImage4 from "/src/assets/Images/image 9.png";
import SpeakerIcon from "/src/assets/images/Speaker.png";
import MessageIcon from "/src/assets/images/message.png";
import Icon from "/src/assets/images/Icon.png";
import Status from "/src/assets/images/status-up.png";
import Money from "/src/assets/images/money-add.png";
import Charger from "/src/assets/images/cpu-charge.png";
import Image1 from "/src/assets/images/image 16.jpg";
import Image2 from "/src/assets/images/image (2).jpg";
import Image3 from "/src/assets/images/image (3).jpg";
import Image4 from "/src/assets/images/1.png";
import Image5 from "/src/assets/images/2.png";
import Image6 from "/src/assets/images/3.png";
import Image7 from "/src/assets/images/new.png";
import Image8 from "/src/assets/images/new1.png";
import Image9 from "/src/assets/images/new2.png";
import Image10 from "/src/assets/images/new3.png";
import Icon1 from "/src/assets/images/hand.png";
import Icon2 from "/src/assets/images/toggle.png";
import Icon3 from "/src/assets/images/resume.png";
import Image11 from "/src/assets/images/Picop.png";
import Image12 from "/src/assets/images/frepeak.png";
import Image13 from "/src/assets/images/search.png";
import Image14 from "/src/assets/images/next.png";
import Image15 from "/src/assets/images/availability.png";
import Image16 from "/src/assets/images/Hero Image.png";
import Image17 from "/src/assets/images/Experience.png";
import Image22 from "/src/assets/images/image22.png";
import Image20 from "/src/assets/images/image20.png";
import Image23 from "/src/assets/images/last.png";
import Image24 from "/src/assets/images/Frame 1211 (1).png";
import Image25 from "/src/assets/images/Frame 1211 (2).png";
import Footer from "/src/component/Footer";
import Go from "/src/component/Go";
import userProfile from "/src/assets/images/image 23.png";

const Home2 = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    setIsLoggedIn(true);
  }, []);

  return (
    <div className="bg-[#061421] min-h-screen relative overflow-x-hidden w-full">
      {/* Fixed Navbar */}
      <nav
        className={`w-full max-w-screen h-[110px] bg-gradient-to-r from-[#05445E] to-[#061421] shadow-lg flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-[60px]" />
        </div>
        <div className="flex space-x-4 text-white text-lg font-[lato]">
          <a href="Jobs" className="hover:underline">
            Jobs
          </a>
          <a href="#" className="hover:underline">
            Companies
          </a>
          <a href="#" className="hover:underline">
            Consultancy
          </a>
        </div>
        <div className="flex items-center space-x-6 text-white text-lg font-[lato] relative">
          {isLoggedIn ? (
            <div className="flex items-center space-x-4">
              <div className="relative group">
                <button className="flex items-center space-x-2 hover:underline">
                  <img
                    src={userProfile}
                    alt="User Profile"
                    className="w-10 h-10 rounded-full object-cover border-2 border-white"
                  />
                </button>
                <div className="hidden group-hover:block absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg font-[lato] z-50">
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Profile
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Dashboard
                  </a>
                  <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                    Logout
                  </a>
                </div>
              </div>
            </div>
          ) : (
            <>
              <a href="/onbody" className="hover:underline">
                Login
              </a>
              <a href="/dashboard" className="hover:underline">
                Signup
              </a>
            </>
          )}
          <div className="relative group">
            <button className="flex items-center space-x-2 hover:underline">
              <span>Job Seeker</span>
              <FaChevronDown />
            </button>
            <div className="hidden group-hover:block absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg font-[lato] z-50">
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Profile
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Applications
              </a>
              <a href="#" className="block px-4 py-2 hover:bg-gray-200">
                Settings
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Content Section */}
      <div className="flex items-center justify-between min-h-screen px-12 relative pt-[110px]">
        {/* Text Content */}
        <div className="text-white text-left max-w-lg font-[poppins]">
          <h1 className="text-5xl font-bold">Find Your</h1>
          <h2
            className="text-5xl font-bold bg-clip-text text-transparent"
            style={{
              backgroundImage:
                "linear-gradient(90deg, #00A7AC 0%, #0076B2 69.26%)",
            }}
          >
            Perfect Job
          </h2>
          <h4 className="text-sm mt-8">
            Whether you're looking for your dream role or searching for top
            talent, we've got you covered. Explore thousands of opportunities,
            connect with expert consultants, and take the next step in your
            career with ease.
          </h4>
          <button className="mt-8 px-6 py-3 bg-white text-[#00709E] rounded-xl text-sm font-semibold hover:bg-gray-400">
            Sign Up for Free
          </button>
        </div>

        {/* Bigger Group Image on the right side */}
        <img
          src={group}
          alt="Group"
          className="absolute right-0 top-1/2 transform -translate-y-1/2 h-[750px] w-auto"
        />
      </div>

      {/* Rest of your existing code remains the same... */}
      {/* White Background Section */}
      <div className="bg-white py-20 px-12 text-black text-center">
        <h2 className="text-lg text-[#05445E] font-[inter]">
          The world's best Companies are hiring on NGHR
        </h2>
        <img
          src={companiesImage}
          alt="Companies Hiring"
          className="mt-10 mx-auto"
        />
        <p className="text-lg mt-4 max-w-3xl mx-auto"></p>
      </div>

      {/* Gradient Background Section */}
      <div
        className="py-20 px-12 text-black text-center"
        style={{
          background:
            "linear-gradient(180deg, #FFFCEF 0%, #FFFFFF 23.99%, #FFFCEF 59.81%, #FFFFFF 78.05%, #FFFCEF 95.38%)",
        }}
      >
        <div className="flex justify-center w-70 h-10 -ml-10">
          <img src={circleImage1} alt="Find a Job" />
          <img src={circleImage2} alt="Find a Job" className="-ml-5" />
          <img
            src={circleImage3}
            alt="Find a Job"
            className=" border-[#AA0000] -ml-5"
          />
          <img src={circleImage4} alt="Find a Job" className="-ml-5" />

          <p className="p-2 text-[#00709E] font-semibold flex items-center">
            Find a Job
            <FaArrowRight className="text-[#00709E] text-xs  w-4 ml-2" />
          </p>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div>
            <p className="text-left text-[#00709E] text-2xl font-bold font-[poppins]">
              Explore 50,000+ Job Opportunities
            </p>
            <p className="text-left text-[#8D8D8D] mt-2 text-sm font-[poppins]">
              Personalized filters make it quick and easy to find the jobs you
              care about.
            </p>
          </div>
          <button className="bg-[#05445E] text-white w-[144px] h-[52px] rounded-xl hover:bg-[#005D7E]">
            Search Job
          </button>
        </div>

        <div className="  grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center space-1 m-30  ">
          <div
            className="relative w-[300px] h-[195px] border border-[#CBCBCB] shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            <h1 className="text-sm font-semibold text-[#000000] font-[poppins] p-2 whitespace-nowrap">
              Development roles
            </h1>
            <p className="text-[#8D8D8D] text-left text-sm -ml-36  mt-18">
              Explore development jobs at companies like Arrow, Zurao, Infinite{" "}
            </p>
            {/* Circular div containing the icon (fully centered) */}
            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              <img src={MessageIcon} alt="Message Icon" className="w-8 h-8  " />
            </div>
            <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
              <img
                src={Image1}
                alt="img"
                className="w-9 h-9 object-cover rounded-full "
              />
              <img
                src={Image2}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3 "
              />
              <img
                src={Image3}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3"
              />
            </div>
          </div>

          <div
            className=" relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            <h1 className="text-sm font-semibold text-[#000000] font-[poppins] p-2 text-left whitespace-nowrap">
              Design roles
            </h1>
            <p className="text-[#8D8D8D] text-left text-sm -ml-24 font-[poppins] mt-20">
              Explore design jobs at companies like Arrow, Zurao, Infinite{" "}
            </p>
            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              <img src={Icon} alt="Icon" className="w-8 h-8" />
            </div>
            <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
              <img
                src={Image4}
                alt="img"
                className="w-9 h-9 object-cover rounded-full "
              />
              <img
                src={Image5}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3 "
              />
              <img
                src={Image6}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3"
              />
            </div>
          </div>
          <div
            className=" relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            <h1 className="text-sm font-semibold text-[#000000] font-[poppins] p-2 text-left whitespace-nowrap">
              Sales roles
            </h1>

            <p className="text-[#8D8D8D] text-left font-[poppins] text-sm -ml-21 mt-20">
              Explore Sales jobs at companies like Arrow, Zurao, Infinite{" "}
            </p>
            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              <img src={Status} alt="Status Icon" className="w-8 h-8" />
            </div>
            <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
              <img
                src={Image1}
                alt="img"
                className="w-9 h-9 object-cover rounded-full "
              />
              <img
                src={Image2}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3 "
              />
              <img
                src={Image3}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3"
              />
            </div>
          </div>
          <div
            className="relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            <h1 className="text-sm font-semibold text-[#000000] font-[poppins] p-2 text-left whitespace-nowrap">
              Marketing roles
            </h1>
            <p className="text-[#8D8D8D] text-left text-sm font-[poppins] -ml-30 mt-20">
              Explore Marketing jobs at companies like Arrow, Zurao, Infinite{" "}
            </p>
            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              <img src={SpeakerIcon} alt="Speaker Icon" className="w-8 h-8" />
            </div>
            <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
              <img
                src={Image1}
                alt="img"
                className="w-9 h-9 object-cover rounded-full "
              />
              <img
                src={Image2}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3 "
              />
              <img
                src={Image3}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3"
              />
            </div>
          </div>
          <div
            className="relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            <h1 className="text-sm font-semibold text-[#000000] font-[poppins] p-2 text-left whitespace-nowrap">
              {" "}
              Finance roles
            </h1>
            <p className="text-[#8D8D8D] text-left text-sm -ml-25 mt-20 font-[poppins]">
              Explore Finance jobs at companies like Arrow, Zurao, Infinite{" "}
            </p>
            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              <img src={Money} alt="Message Icon" className="w-8 h-8" />
            </div>
            <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
              <img
                src={Image4}
                alt="img"
                className="w-9 h-9 object-cover rounded-full "
              />
              <img
                src={Image5}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3 "
              />
              <img
                src={Image6}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3"
              />
            </div>
          </div>

          <div
            className="relative w-[300px] h-[195px] border border-[#CBCBCB] shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            <h1 className="text-sm font-semibold text-[#000000] font-[poppins] p-2 text-left whitespace-nowrap">
              {" "}
              Tech roles
            </h1>
            <p className="text-[#8D8D8D] text-left text-sm -ml-20 mt-20 font-[poppins]">
              Explore Tech jobs at companies like Arrow, Zurao, Infinite{" "}
            </p>

            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              {" "}
              <img src={Charger} alt="Message Icon" className="w-8 h-8" />
            </div>

            <div className=" border-none absolute top-2 right-2 w-20 h-10 flex justify-end ">
              <img
                src={Image1}
                alt="img"
                className="w-9 h-9 object-cover rounded-full "
              />
              <img
                src={Image2}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3 "
              />
              <img
                src={Image3}
                alt="img"
                className="w-9 h-9 object-cover rounded-full -ml-3"
              />
            </div>
          </div>
        </div>
      </div>
      <div
        className="py-20 px-12 text-black text-center"
        style={{
          background:
            "linear-gradient(180deg, #FFFCEF 0%, #FFFFFF 23.99%, #FFFCEF 59.81%, #FFFFFF 78.05%, #FFFCEF 95.38%)",
        }}
      >
        <div className="flex justify-center w-70 h-10 -ml-10 ">
          <img src={Image7} alt="Find a Job" />
          <img src={Image8} alt="Find a Job" className="-ml-5" />
          <img src={Image9} alt="Find a Job" className=" -ml-5" />
          <img src={Image10} alt="Find a Job" className="-ml-5" />

          <p className="p-2 text-[#00709E] font-semibold flex items-center">
            Find a Job
            <FaArrowRight className="text-[#00709E] text-xs  w-4 ml-2" />
          </p>
        </div>

        {/*Another div start*/}
        <div className="mt-6 flex justify-between items-center">
          <div>
            <p className="text-left text-[#00709E] text-2xl font-bold font-[poppins]">
              Discover the world’s best Companies
            </p>
            <p className="text-left text-[#8D8D8D] mt-2 text-sm font-[poppins]">
              Discover tech stacks, employee benefits, and open roles.{" "}
            </p>
          </div>
          <button className="bg-[#05445E] text-white w-[150px] h-[45px] rounded-xl hover:bg-[#005D7E]">
            View all companies
          </button>
        </div>

        {/*first card*/}
        <div className="  grid grid-cols-2 sm:grid-cols-3 gap-8 justify-center space-1 m-30  ">
          <div
            className="relative w-[300px] h-[195px] border border-[#CBCBCB] shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            <button className="absolute top-2 right-2 border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg">
              50 Jobs
            </button>
            <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left -mt-4">
              Zuro
              <br />
            </h1>
            <p className="text-[#8D8D8D] text-left text-sm -ml-10 mt-18 font-[poppins]">
              Modern Health is a mental health benefits platform for employers.
            </p>

            {/* Circular div containing the icon (fully centered)   */}

            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              <img
                src={Image2}
                alt="Message Icon"
                className="w-full h-full object-cover rounded-full "
              />
            </div>
            <button className="absolute bottom-2 ml-2  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Mental Health
            </button>
            <button className="absolute bottom-2 ml-30  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Health and wellness
            </button>
          </div>
          {/*card1*/}

          <div
            className=" relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            <button className="absolute top-2 right-2 border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg">
              50 Jobs
            </button>
            <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left -mt-4">
              Picop
            </h1>
            <p className="text-[#8D8D8D] text-left text-sm -ml-11 mt-18 font-[poppins] ">
              Modern Health is a mental health benefits platform for employers.
            </p>

            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              <img src={Image10} alt="Icon" className="w-full h-full" />
            </div>

            <button className="absolute bottom-2 ml-2  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Information Security
            </button>
            <button className="absolute bottom-2 ml-39  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Cyber Security
            </button>
            {/*card2*/}
          </div>
          <div
            className=" relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            <button className="absolute top-2 right-2 border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg">
              50 Jobs
            </button>
            <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left -mt-4">
              Bluefeed
            </h1>
            <p className="text-[#8D8D8D] text-left text-sm -ml-16 mt-18 font-[poppins]">
              Modern Health is a mental health benefits platform for employers.
            </p>

            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              <img src={Image9} alt="Status Icon" className="w-full h-full" />
            </div>
            <button className="absolute bottom-2 ml-2  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Mental Health
            </button>
            <button className="absolute bottom-2 ml-30  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Human Resources
            </button>
          </div>

          {/*card3*/}
          <div
            className="relative border border-[#CBCBCB] w-[300px] h-[195px]  shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            <button className="absolute top-2 right-2 border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg">
              50 Jobs
            </button>
            <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left -mt-4">
              Zuro
            </h1>
            <p className="text-[#8D8D8D] text-left text-sm -ml-10 mt-18 font-[poppins]">
              Modern Health is a mental health benefits platform for employers.
            </p>

            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              <img
                src={Image2}
                alt="Speaker Icon"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <button className="absolute bottom-2 ml-2  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Mental Health
            </button>
            <button className="absolute bottom-2 ml-30  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Health and wellness
            </button>
          </div>
          {/*card4*/}
          <div
            className="relative border border-[#CBCBCB] w-[300px] h-[195px] shadow-md rounded-lg flex items-center text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            {/* "50 Jobs" Button in Top-Right */}
            <button className="absolute top-2 right-2 border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg">
              50 Jobs
            </button>

            {/* Title */}
            <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left -mt-4">
              Picop
            </h1>

            {/* Description */}
            <p className="text-[#8D8D8D] text-left text-sm -ml-12 mt-18 font-[poppins]">
              Modern Health is a mental health benefits platform for employers.
            </p>

            {/* Icon Container */}
            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              <img src={Image10} alt="Message Icon" className="w-full h-full" />
            </div>
            <button className="absolute bottom-2 ml-2  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Information Security
            </button>
            <button className="absolute bottom-2 ml-39  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Cyber Security
            </button>
          </div>

          {/*card5*/}

          <div
            className="relative w-[300px] h-[195px] border border-[#CBCBCB] shadow-md rounded-lg flex items-center  text-[#00709E] font-semibold"
            style={{
              background:
                "linear-gradient(112.9deg, rgba(213, 235, 255, 0.4) 0%, rgba(230, 254, 255, 0.4) 100%)",
            }}
          >
            <button className="absolute top-2 right-2 border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg">
              50 Jobs
            </button>
            <h1 className="text-sm font-bold text-[#000000] font-poppins p-2 text-left -mt-4">
              {" "}
              Bluefeed
            </h1>
            <p className="text-[#8D8D8D] text-left text-sm -ml-16 mt-18 font-[poppins]">
              Modern Health is a mental health benefits platform for employers.
            </p>

            <div className="absolute top-2 left-2 w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              {" "}
              <img src={Image9} alt="Message Icon" className="w-full h-full" />
            </div>
            <button className="absolute bottom-2 ml-2  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Mental Health
            </button>
            <button className="absolute bottom-2 ml-30  border border-[#00A7AC] text-[#00A7AC] text-xs font-semibold px-3 py-1 rounded-lg ">
              Human Resources
            </button>
          </div>

          <div className="relative mt-30 flex flex-col items-start gap-4">
            {/* Text Content */}
            <div className="-ml-10 mt-10">
              <h1 className="text-[#00709E] text-2xl font-bold font-[poppins] text-left">
                Brand yourself for new opportunities
              </h1>
              <p className="text-[#8D8D8D] mt-2 text-sm font-[poppins] text-left">
                Create a profile that highlights your unique skills and
                preferences, then apply to jobs with just one click
              </p>
            </div>

            {/* Circular Icon - Positioned Below Text */}
            <div className="flex flex-col gap-6">
              {/* First Icon + Text */}
              <div className="flex items-start gap-3 -ml-5 mt-6">
                <div className="w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
                  <img src={Icon1} alt="Message Icon" className="w-8 h-8" />
                </div>
                <div className="max-w-[250px]">
                  <p className="text-xs text-[#00A7AC] text-left font-[poppins]">
                    <span className="font-bold text-[#00A7AC]  ">
                      One click apply
                      <br />
                    </span>
                    Say goodbye to cover letters - your profile is all you need.
                    One click to apply, then you're done.
                  </p>
                </div>
              </div>

              {/* Second Icon + Text (Same as First) */}
              <div className="flex items-start gap-3 -ml-5 mt-6">
                <div className="w-[55px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
                  <img src={Icon2} alt="Message Icon" className="w-8 h-8" />
                </div>
                <div className="w-full text-left ">
                  <p className="text-xs text-[#00A7AC] font-[poppins]">
                    <span className="font-bold text-[#00A7AC]">
                      Set your preferences
                      <br />
                    </span>
                    Streamline the interview process by setting your
                    expectations (salary, industry, culture, etc.) upfront.{" "}
                  </p>
                </div>
              </div>
            </div>

            <div className="  absolute top-0 right-0 w-[300px] h-[365px] ">
              <img
                src={Icon3}
                alt="Message Icon"
                className=" w-[300px] h-[365px] ml-160"
              />
              <img
                src={Image11}
                alt="Message Icon"
                className=" w-[244px] h-[140px] -mt-25 ml-140"
              />
              <button className=" w-30 h-10 -mt-10 ml-180  px-4 py-2 bg-[#05445E] font-[poppins] font-semibold  text-white rounded-lg shadow-lg hover:bg-gray-400 transition">
                Apply Now
              </button>
            </div>
          </div>
        </div>
        <div className="relative mt-50 flex flex-col items-start gap-4">
          {/* Text Content */}
          <div className="ml-20 mt-10">
            <h1 className="text-[#00709E] text-2xl font-bold font-[poppins] text-left">
              Find work that works for you
            </h1>
            <p className="text-[#8D8D8D] mt-2 text-sm font-[poppins] text-left">
              A personalized and private job search, with all the info you care
              about, all upfront{" "}
            </p>
          </div>

          {/* Circular Icon - Positioned Below Text */}
          <div className="flex flex-col gap-6">
            {/* First Icon + Text */}
            <div className="flex items-start gap-3 ml-25 mt-6">
              <div className="w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
                <img src={Icon1} alt="Message Icon" className="w-8 h-8" />
              </div>
              <div className="max-w-[250px]">
                <p className="text-xs text-[#00A7AC] text-left font-[poppins]">
                  <span className="font-bold text-[#00A7AC]  ">
                    Stay in the know
                    <br />
                  </span>
                  No guessing games. View salary and stock options before you
                  apply.
                </p>
              </div>
            </div>

            {/* Second Icon + Text (Same as First) */}
            <div className="flex items-start gap-3 ml-25 mt-6">
              <div className="w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
                <img src={Icon2} alt="Message Icon" className="w-8 h-8" />
              </div>
              <div className="w-full text-left ">
                <p className="text-xs text-[#00A7AC] font-[poppins]">
                  <span className="font-bold text-[#00A7AC]">
                    Personalized search
                    <br />
                  </span>
                  Personalized filters make it quick and easy to find the jobs
                  you care about
                </p>
              </div>
            </div>
          </div>

          {/*3rd Icon + tEXT */}

          <div className="flex items-start gap-3 ml-25 mt-6">
            <div className="w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
              <img src={Icon2} alt="Message Icon" className="w-8 h-8" />
            </div>
            <div className="w-full text-left ">
              <p className="text-xs text-[#00A7AC] font-[poppins]">
                <span className="font-bold text-[#00A7AC]">
                  Unique roles, exciting teams
                  <br />
                </span>
                Discover unique jobs with future-defining teams
              </p>

              <div className="  absolute top-0 right-0 w-[300px] h-[365px] ">
                <img
                  src={Image12}
                  alt="Message Icon"
                  className=" w-[300px] h-[365px] -ml-30"
                />
                <img
                  src={Image13}
                  alt="Message Icon"
                  className=" w-[223px] h-[37px] -mt-5 -ml-50 "
                />
                <img
                  src={Image14}
                  alt="Message Icon"
                  className=" w-[118px] h-[134px] -mt-35 ml-20"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="relative mt-50 flex flex-col items-start gap-4">
          {/* Text Content */}
          <div className="ml-20 mt-10">
            <h1 className="text-[#00709E] text-2xl font-bold font-[poppins] text-left">
              Let the opportunities come to you
            </h1>
            <p className="text-[#8D8D8D] mt-2 text-sm font-[poppins] text-left">
              Upgrade your profile, and get the best opportunities{" "}
            </p>
          </div>

          {/* Circular Icon - Positioned Below Text */}
          <div className="flex flex-col gap-6">
            {/* First Icon + Text */}
            <div className="flex items-start gap-3 ml-25 mt-6">
              <div className="w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
                <img src={Icon1} alt="Message Icon" className="w-8 h-8" />
              </div>
              <div className="max-w-[250px]">
                <p className="text-xs text-[#00A7AC] text-left font-[poppins]">
                  <span className="font-bold text-[#00A7AC]  ">
                    Connect with founders
                    <br />
                  </span>
                  Let founders pitch you directly on their opportunity.{" "}
                </p>
              </div>
            </div>

            {/* Second Icon + Text (Same as First) */}
            <div className="flex items-start gap-3 ml-25 mt-6">
              <div className="w-[49px] h-[49px] rounded-full bg-[#00A7AC2E] flex items-center justify-center">
                <img src={Icon2} alt="Message Icon" className="w-8 h-8" />
              </div>
              <div className="w-full text-left ">
                <p className="text-xs text-[#00A7AC] font-[poppins]">
                  <span className="font-bold text-[#00A7AC]">
                    Get featured
                    <br />
                  </span>
                  Feature your profile even further and make 3x more connections
                </p>
              </div>
            </div>
          </div>

          <div className="  absolute top-0 right-0 w-[300px] h-[365px] ">
            <img
              src={Image15}
              alt="Message Icon"
              className=" w-[215px] h-[261px] -ml-8 "
            />
            <img
              src={Image16}
              alt="Message Icon"
              className=" w-[78px] h-[89px] -mt-60 ml-20 "
            />
            <img
              src={Image17}
              alt="Message Icon"
              className=" w-[137px] h-[46px] -mt-34 ml-10"
            />
          </div>
        </div>

        <div
          className="mt-40 w-screen min-h-screen flex flex-col items-center px-14 pt-8 relative -ml-12 font-[poppins]"
          style={{
            backgroundImage: "linear-gradient(90deg, #002555 5%,  #00709E 90%)",
          }}
        >
          {/* Content Wrapper */}
          <div className="w-full flex justify-between items-center ">
            {/* Heading Positioned at Top Left */}
            <div className="p-10 ml-18 text-left ">
              <span className=" text-2xl text-white font-bold ">
                Get started today
              </span>
              <p className="text-white mt-6">
                To apply to jobs with one-click and connect with
                <br />
                founders and recruiters searching for your skills.
              </p>
            </div>

            {/* Button Positioned on the Right */}
            <button className="px-6 py-3 bg-white text-[#00709E] rounded-xl text-sm font-semibold hover:bg-gray-400 mt-15">
              Create Your Profile
            </button>
          </div>

          {/* Cards Section */}
          <div className=" w-full flex justify-center gap-10 mt-25 ">
            {/* Card 1 */}
            <div className=" bg-white p-6 rounded-2xl shadow-lg w-1/4   text-left bg-[linear-gradient(172.2deg,rgba(196,226,255,0.7)_-2.77%,rgba(136,229,227,0.216707)_80.48%,rgba(117,230,218,0.063)_106.96%)]">
              <img
                src={Image22}
                alt="img"
                className=" ml-5 mt-4 h-[250px] w-[200px] object-cover rounded-lg "
              />
              <div>
                <h3 className="text-lg font-semibold text-[#00A7AC]">
                  Create your own CV
                </h3>
                <p className="text-sm mt-2 text-[#A9A9A9]">
                  Use your company profile to tell your story, build up your
                  remote brand, and recruit the best. Job seekers come to us to
                  research and discover remote companies.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg w-1/4  text-left bg-[linear-gradient(110.48deg,rgba(230,175,117,0.196)_7.46%,rgba(117,230,218,0.105)_96.61%)]">
              <img
                src={Image20}
                alt="img"
                className="h-[230px] w-[240px] object-cover rounded-lg"
              />
              <h4 className="text-lg font-semibold mt-4 text-[#00A7AC]">
                Make a great first impression
              </h4>
              <p className="text-sm mt-2 text-[#A9A9A9]">
                Create your profile so that it stands out amongst 1000
                applicants, we make you look good.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-lg w-1/4  text-left bg-[linear-gradient(172.2deg,rgba(196,226,255,0.7)_-2.77%,rgba(136,229,227,0.216707)_80.48%,rgba(117,230,218,0.063)_106.96%)]">
              <h3 className="text-lg font-semibold  text-[#00A7AC] mt-62">
                Bold career advice
              </h3>
              <p className="text-sm mt-2 text-[#A9A9A9]">
                Get valuable insights on work with our media articles and truly
                own your career
              </p>
            </div>
          </div>
        </div>

        <div className="-ml-10 mt-10 font-[poppins] p-40">
          <h1 className="text-[#05445E] text-2xl font-bold text-left">
            Explore Every Opportunity
          </h1>

          <p className="text-[#8D8D8D] text-left">
            Your one-stop resource for all job types—remote, on-site, and
            <br /> hybrid. Find actionable insights and expert advice tailored
            to job
            <br /> seekers, employees, and employers across all industries and
            <br /> work environments. Whether you're looking for flexibility or
            <br /> office roles, we’ve got you covered.
          </p>

          {/* Button Section */}
          <div className="flex justify-end -mt-30">
            <button className="px-6 py-3 bg-[#05445E] text-white rounded-xl text-sm font-semibold hover:bg-gray-400">
              Read more on the blog
            </button>
          </div>

          {/* Image Section */}
          <div className="flex justify-between mt-40">
            {/* Image 1 */}
            <div className="text-left w-1/3 px-4">
              <img
                src={Image23}
                alt="Opportunity 1"
                className="w-full h-50 object-cover "
              />
              <h2 className="text-lg font-semibold text-[#000000] mt-4">
                Best AI Interview Practice Tools
              </h2>
              <p className="text-sm text-[#8D8D8D] mt-2">
                Modern Health is a mental health benefits platform for
                employers.{" "}
              </p>
            </div>

            {/* Image 2 */}
            <div className="text-left w-1/3 px-4">
              <img
                src={Image24}
                alt="Opportunity 2"
                className="w-full h-50 object-cover "
              />
              <h2 className="text-lg font-semibold text-[#000000] mt-4">
                Best AI Interview Practice Tools
              </h2>
              <p className="text-sm text-[#8D8D8D] mt-2">
                Modern Health is a mental health benefits platform for
                employers.{" "}
              </p>
            </div>

            {/* Image 3 */}
            <div className="text-left w-1/3 px-4">
              <img
                src={Image25}
                alt="Opportunity 3"
                className="w-full h-50 object-cover "
              />
              <h2 className="text-lg font-semibold text-[#000000] mt-4">
                Best AI Interview Practice Tools
              </h2>
              <p className="text-sm text-[#8D8D8D] mt-2">
                Modern Health is a mental health benefits platform for
                employers.{" "}
              </p>
            </div>
          </div>
        </div>

        <Go />
      </div>
      <Footer />
    </div>
  );
};

export default Home2;
