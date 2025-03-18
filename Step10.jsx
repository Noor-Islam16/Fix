import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FaChevronDown, FaStar } from "react-icons/fa";
import ellipseImage from "../assets/images/Ellipse 34.jpg";
import vectorImage from "../assets/images/Vector 60.jpg";

const universities = [
    "National Institute of Technology", "Indian Institute of Technology", 
    "Cooch Behar Government Engineering College", "Jadavpur University", 
    "University of Calcutta", "Banaras Hindu University", "Delhi University", 
    "Anna University", "Visvesvaraya Technological University", "Pune University", 
    "Aligarh Muslim University", "Amity University", "Vellore Institute of Technology", 
    "Birla Institute of Technology and Science", "Manipal Academy of Higher Education"
];

const months = ["January", "February", "March", "April", "May", "June", "July", 
                "August", "September", "October", "November", "December"];

const years = Array.from({ length: 50 }, (_, i) => (new Date().getFullYear() - i).toString());

const predefinedSkills = ["Design", "Creative Thinking", "UI Design", "UX Design", "Problem Solving", "Others"];

const ratingCriteria = ["Quality of Education", "Campus Facilities", "Faculty Support", "Career Services", "Overall Experience"];

const Step10 = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const selectedPlan = location.state?.selectedPlan || { title: "No Plan Selected" };
    const selectedQualification = location.state?.selectedQualification || "Not Provided";
    const previousPercentage = location.state?.percentage || "";

    const [percentage, setPercentage] = useState(previousPercentage);
    const [gradingSystem, setGradingSystem] = useState("");
    const [university, setUniversity] = useState("");
    const [showDropdown, setShowDropdown] = useState(false);
    const [startMonth, setStartMonth] = useState("");
    const [startYear, setStartYear] = useState("");
    const [passMonth, setPassMonth] = useState("");
    const [passYear, setPassYear] = useState("");
    const [keySkills, setKeySkills] = useState([]);
    const [skills, setSkills] = useState(predefinedSkills);
    const [newSkill, setNewSkill] = useState("");
    const [ratings, setRatings] = useState({
        "Quality of Education": 0,
        "Campus Facilities": 0,
        "Faculty Support": 0,
        "Career Services": 0,
        "Overall Experience": 0
    });

    const toggleSkill = (skill) => {
        setKeySkills((prev) =>
            prev.includes(skill) ? prev.filter((s) => s !== skill) : [...prev, skill]
        );
    };

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && newSkill.trim() !== "" && !skills.includes(newSkill)) {
            setSkills([...skills, newSkill]);
            setNewSkill(""); // Clear input after adding
        }
    };

    const handleRating = (criteria, star) => {
        setRatings((prev) => ({
            ...prev,
            [criteria]: star
        }));
    };

    return (
        <div className="relative">
            <h1 className="text-2xl font-bold text-[#05445E] p-4">NGHR</h1>

            <div className="relative flex flex-row items-center justify-between min-h-[calc(100vh-1in)] w-full bg-cover bg-no-repeat px-10"
                style={{ backgroundImage: `url(${vectorImage})`, backgroundPosition: "100% center", backgroundSize: "50%" }}>

                <div className="absolute left-0 top-0 w-1/2 h-full bg-contain bg-no-repeat"
                    style={{ backgroundImage: `url(${ellipseImage})`, backgroundSize: "cover", backgroundPosition: "left center" }}>
                </div>

                <div className="relative z-10 w-80 max-w-xl text-left ml-20">
                    <p className="text-3xl font-semibold text-[#05445E] mb-4">Step 4 out of 5</p>
                    <p className="text-2xl mt-9 text-[#05445E] font-bold mb-4">
                        Fill in the details to help us build your profile and land perfect job opportunities.
                    </p>

                    {/* University Dropdown */}
                    <p className="font-bold text-[#05445E]">University/ Institute *</p>
                    <div className="mt-4 relative">
                        <div className="border rounded p-2 w-full mt-2 flex justify-between items-center cursor-pointer"
                            onClick={() => setShowDropdown(!showDropdown)}>
                            {university || "E.g. National Institute of Technology"}
                            <FaChevronDown />
                        </div>
                        {showDropdown && (
                            <ul className="border rounded mt-1 w-full bg-white shadow-lg absolute z-10">
                                {universities.map((uni, index) => (
                                    <li key={index} className="p-2 hover:bg-gray-200 cursor-pointer"
                                        onClick={() => {
                                            setUniversity(uni);
                                            setShowDropdown(false);
                                        }}>
                                        {uni}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>

                    {/* Starting Date */}
                    <div className="mt-4 flex space-x-4">
                        <div className="relative w-1/2">
                            <label className="block text-[#05445E] font-bold">Starting Month *</label>
                            <select className="border rounded p-2 w-full mt-2" value={startMonth} onChange={(e) => setStartMonth(e.target.value)}>
                                <option value="">Select Month</option>
                                {months.map((month, index) => (<option key={index} value={month}>{month}</option>))}
                            </select>
                        </div>
                        <div className="relative w-1/2">
                            <label className="block text-[#05445E] font-bold">Starting Year *</label>
                            <select className="border rounded p-2 w-full mt-2" value={startYear} onChange={(e) => setStartYear(e.target.value)}>
                                <option value="">Select Year</option>
                                {years.map((year, index) => (<option key={index} value={year}>{year}</option>))}
                            </select>
                        </div>
                    </div>

                    {/* Passing Date */}
                    <div className="mt-4 flex space-x-4">
                        <div className="relative w-1/2">
                            <label className="block text-[#05445E] font-bold">Passing Month *</label>
                            <select className="border rounded p-2 w-full mt-2" value={passMonth} onChange={(e) => setPassMonth(e.target.value)}>
                                <option value="">Select Month</option>
                                {months.map((month, index) => (<option key={index} value={month}>{month}</option>))}
                            </select>
                        </div>
                        <div className="relative w-1/2">
                            <label className="block text-[#05445E] font-bold">Passing Year *</label>
                            <select className="border rounded p-2 w-full mt-2" value={passYear} onChange={(e) => setPassYear(e.target.value)}>
                                <option value="">Select Year</option>
                                {years.map((year, index) => (<option key={index} value={year}>{year}</option>))}
                            </select>
                        </div>
                    </div>

                    {/* Key Skills */}
                    <div className="mt-4">
                        <label className="block text-[#05445E] font-bold">Key Skills *</label>
                        <input
                            type="text"
                            value={newSkill}
                            onChange={(e) => setNewSkill(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder="Type a skill and press Enter"
                            className="border p-2 rounded w-full mt-2"
                        />
                        <div className="flex flex-wrap gap-2 mt-2">
                            {skills.map((skill, index) => (
                                <button key={index} className={`border rounded p-2 ${keySkills.includes(skill) ? 'bg-blue-500 text-white' : 'bg-white text-black'}`} 
                                    onClick={() => toggleSkill(skill)}>
                                    {skill}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* University Experience Rating */}
                    <div className="mt-6">
                        <p className="text-[#05445E] text-xl font-bold mb-2">Rate Your University Experience</p>
                        {ratingCriteria.map((criteria, index) => (
                            <div key={index} className="mb-4">
                                <label className="block text-red-500 font-bold">{criteria} *</label>
                                <div className="flex mt-2">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <FaStar 
                                            key={star} 
                                            size={42} 
                                            className={`cursor-pointer border border-gray-400 rounded ${ratings[criteria] >= star ? 'text-yellow-500' : 'text-gray-300'}`}
                                            onClick={() => handleRating(criteria, star)}
                                        />
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Step10;
