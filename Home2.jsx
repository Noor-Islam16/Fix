import React from 'react';
import { useState, useEffect } from "react";
import { FaChevronDown } from 'react-icons/fa';
import { FaArrowRight } from 'react-icons/fa';
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
import Image1 from"/src/assets/images/image 16.jpg";
import Image2 from"/src/assets/images/image (2).jpg";
import Image3 from"/src/assets/images/image (3).jpg";
import Image4 from"/src/assets/images/1.png";
import Image5 from"/src/assets/images/2.png";
import Image6 from"/src/assets/images/3.png";
import Image7 from"/src/assets/images/new.png";
import Image8 from"/src/assets/images/new1.png";
import Image9 from"/src/assets/images/new2.png";
import Image10 from"/src/assets/images/new3.png";
import Icon1 from"/src/assets/images/hand.png"; 
import Icon2 from"/src/assets/images/toggle.png"; 
import Icon3 from"/src/assets/images/resume.png";
import Image11 from"/src/assets/images/Picop.png";
import Image12 from"/src/assets/images/frepeak.png";
import Image13 from"/src/assets/images/search.png";
import Image14 from"/src/assets/images/next.png";
import Image15 from"/src/assets/images/availability.png";
import Image16 from"/src/assets/images/Hero Image.png";
import Image17 from"/src/assets/images/Experience.png";
import Image22 from"/src/assets/images/image22.png";
import Image20 from"/src/assets/images/image20.png";
import Image23 from"/src/assets/images/last.png";
import Image24 from"/src/assets/images/Frame 1211 (1).png";
import Image25 from"/src/assets/images/Frame 1211 (2).png";
import Footer from"/src/component/Footer";
import Go from"/src/component/Go";
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
            <nav className={w-full max-w-screen h-[110px] bg-gradient-to-r from-[#05445E] to-[#061421] shadow-lg flex items-center justify-between px-6 fixed top-0 left-0 right-0 z-50 transition-transform duration-300 ${showNavbar ? "translate-y-0" : "-translate-y-full"}}>
                <div className="flex items-center">
                    <img src={logo} alt="Logo" className="h-[60px]" />
                </div>
                <div className="flex space-x-4 text-white text-lg font-[lato]">
                    <a href="Jobs" className="hover:underline">Jobs</a>
                    <a href="#" className="hover:underline">Companies</a>
                    <a href="#" className="hover:underline">Consultancy</a>
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
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Dashboard</a>
                                    <a href="#" className="block px-4 py-2 hover:bg-gray-200">Logout</a>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <>
                            <a href="/onbody" className="hover:underline">Login</a>
                            <a href="/dashboard" className="hover:underline">Signup</a>
                        </>
                    )}
                    <div className="relative group">
                        <button className="flex items-center space-x-2 hover:underline">
                            <span>Job Seeker</span>
                            <FaChevronDown />
                        </button>
                        <div className="hidden group-hover:block absolute right-0 mt-2 w-40 bg-white text-black shadow-lg rounded-lg font-[lato] z-50">
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Profile</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Applications</a>
                            <a href="#" className="block px-4 py-2 hover:bg-gray-200">Settings</a>
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
                        style={{ backgroundImage: "linear-gradient(90deg, #00A7AC 0%, #0076B2 69.26%)" }}
                    >
                        Perfect Job
                    </h2>
                    <h4 className="text-sm mt-8">Whether you're looking for your dream role or 
                        searching for top talent, we've got you covered. 
                        Explore thousands of opportunities, connect with
                        expert consultants, and take the next step in your 
                        career with ease.</h4>
                    <button className="mt-8 px-6 py-3 bg-white text-[#00709E] rounded-xl text-sm font-semibold hover:bg-gray-400">Sign Up for Free</button>
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
                <h2 className="text-lg text-[#05445E] font-[inter]">The world's best Companies are hiring on NGHR</h2>
                <img src={companiesImage} alt="Companies Hiring" className="mt-10 mx-auto" />
                <p className="text-lg mt-4 max-w-3xl mx-auto"></p>
            </div>

            {/* Gradient Background Section */}
            <div className="py-20 px-12 text-black text-center" style={{ background: "linear-gradient(180deg, #FFFCEF 0%, #FFFFFF 23.99%, #FFFCEF 59.81%, #FFFFFF 78.05%, #FFFCEF 95.38%)" }}>
                <div className="flex justify-center w-70 h-10 -ml-10">
                    <img src={circleImage1} alt="Find a Job" />
                    <img src={circleImage2} alt="Find a Job" className="-ml-5" />
                    <img src={circleImage3} alt="Find a Job" className=" border-[#AA0000] -ml-5"  />
                    <img src={circleImage4} alt="Find a Job" className="-ml-5"  />

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
                            Personalized filters make it quick and easy to find the jobs you care about.
                        </p>
                    </div>
                    <button className="bg-[#05445E] text-white w-[144px] h-[52px] rounded-xl hover:bg-[#005D7E]">
                        Search Job
                    </button>
                </div>
