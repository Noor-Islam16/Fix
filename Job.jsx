import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import "@fontsource/poppins";
import Navbar from "../component/Navbar";
import { useState } from "react";
import { CheckSquare, Square } from "lucide-react";
import { Star } from "lucide-react";
import Image1 from "../assets/images/freepik.png";

const Job = () => {
  const [selected, setSelected] = useState("hourly");
  const [minValue, setMinValue] = useState(0);
  const [maxValue, setMaxValue] = useState(0);
  const [selectedOptions, setSelectedOptions] = useState([]);
  const [sortFilter, setSortFilter] = useState("Newest Post"); // Added this state

  const options = [
    "Full-time",
    "Part-time",
    "Freelance",
    "Internship",
    "Contract",
    "Project-based",
  ];

  const toggleOption = (option) => {
    setSelectedOptions((prev) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const experienceLevels = ["Entry Level", "Mid Level", "Senior Level"];
  const [selectedExperience, setSelectedExperience] = useState([]);

  const toggleExperienceLevels = (level) => {
    setSelectedExperience((prevSelected) =>
      prevSelected.includes(level)
        ? prevSelected.filter((item) => item !== level)
        : [...prevSelected, level]
    );
  };

  // Sample job data
  const jobCards = [
    {
      id: 1,
      title: "Frontend Developer",
      company: "Tech Corp",
      location: "Remote",
      salary: "$70k - $90k",
      type: "Full-time",
      description:
        "We're looking for a skilled frontend developer with React experience.",
      posted: "2 days ago",
    },
    {
      id: 2,
      title: "UX Designer",
      company: "Design Hub",
      location: "New York, NY",
      salary: "$80k - $110k",
      type: "Full-time",
      description: "Join our design team to create beautiful user experiences.",
      posted: "1 week ago",
    },
    {
      id: 3,
      title: "Backend Engineer",
      company: "Data Systems",
      location: "Remote",
      salary: "$90k - $120k",
      type: "Contract",
      description:
        "Looking for a backend developer with Node.js and database experience.",
      posted: "3 days ago",
    },
    {
      id: 4,
      title: "Product Manager",
      company: "Innovate Inc",
      location: "San Francisco, CA",
      salary: "$100k - $140k",
      type: "Full-time",
      description: "Lead product development for our flagship software.",
      posted: "5 days ago",
    },
    {
      id: 5,
      title: "DevOps Specialist",
      company: "Cloud Solutions",
      location: "Remote",
      salary: "$85k - $115k",
      type: "Full-time",
      description: "Help us build and maintain our cloud infrastructure.",
      posted: "1 day ago",
    },
    {
      id: 6,
      title: "Data Scientist",
      company: "Analytics Pro",
      location: "Boston, MA",
      salary: "$95k - $130k",
      type: "Full-time",
      description: "Work with large datasets to derive business insights.",
      posted: "2 weeks ago",
    },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar activePage="job" />
        <div className="text-center p-40 text-[#05445E] w-full h-100 bg-gradient-to-b from-white via-[#DEF4FF] to-white">
          <h1 className="font-[poppins] text-5xl font-bold">
            There are 50k+ Jobs here for you
          </h1>
          <p className="text-lg font-semibold mt-4 font-[poppins]">
            Discover the best remote and work-from-home jobs at top remote
            companies.
          </p>
        </div>

        <div className="flex justify-center items-center space-x-4 mt-6 px-2">
          <div className="relative w-[850px]">
            <input
              type="text"
              placeholder="Search jobs..."
              className="w-full p-4 pl-10 pr-20 border border-gray-300 rounded-lg shadow-sm"
            />
            <Search className="absolute left-3 top-3 text-gray-500" size={25} />
            <button className="absolute right-2 top-2 bg-[#05445E] text-white px-6 py-2 rounded-md hover:bg-blue-700">
              Search
            </button>
          </div>

          {["Experience Level", "Salary Range", "Companies"].map(
            (filter, index) => (
              <div key={index} className="relative group">
                <button className="flex items-center space-x-2 px-4 py-3 border border-gray-300 rounded-lg shadow-sm hover:bg-gray-100">
                  <span>{filter}</span>
                  <ChevronDown size={20} />
                </button>
                <div className="hidden group-hover:block absolute mt-2 w-48 bg-white text-black shadow-lg rounded-lg max-h-60 overflow-y-auto">
                  {(filter === "Experience Level"
                    ? ["Entry Level", "Mid Level", "Senior Level"]
                    : filter === "Salary Range"
                    ? [
                        "10,000 - 50,000",
                        "50,000 - 1,00,000",
                        "1,00,000 - 10,00,000",
                        "10,00,000+",
                      ]
                    : [
                        "Google",
                        "Amazon",
                        "Microsoft",
                        "Facebook",
                        "Tesla",
                        "Apple",
                        "Netflix",
                      ]
                  ).map((option) => (
                    <a
                      key={option}
                      href="#"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      {option}
                    </a>
                  ))}
                </div>
              </div>
            )
          )}
        </div>

        {/* Main Content Area */}
        <div className="flex px-20 py-10 gap-8">
          {/* Left Sidebar - Filters */}
          <div className="w-1/4 flex flex-col gap-6">
            <div className="bg-[#E5F6FE] shadow-lg rounded-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-[#000000]">
                Set Job Reminders
              </h2>
              <p className="mt-2 text-[#000000]">
                Enter your email address and get job notifications.
              </p>
              <div className="mt-4">
                <input
                  type="email"
                  placeholder="Enter Email Id"
                  className="w-full p-3 border bg-white border-gray-300 rounded-lg shadow-sm"
                />
                <button className="w-full mt-3 bg-[#05445E] text-white px-4 py-3 rounded-md hover:bg-blue-700">
                  Submit
                </button>
              </div>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-[#000000]">
                Job post
              </h2>
              <select className="mt-2 px-4 py-2 border rounded-lg bg-white text-black cursor-pointer w-full">
                <option value="7">Last Week</option>
                <option value="15">Last 15 Days</option>
                <option value="30">Last 1 Month</option>
                <option value="45">Last 45 Days</option>
              </select>
              <h2 className="mt-8 text-xl font-semibold text-left">
                Working Schedule
              </h2>
              <div className="mt-4 flex flex-col gap-2">
                {options.map((option) => (
                  <div
                    key={option}
                    className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100"
                    onClick={() => toggleOption(option)}
                  >
                    {selectedOptions.includes(option) ? (
                      <CheckSquare className="text-blue-600" />
                    ) : (
                      <Square className="text-gray-500" />
                    )}
                    <span className="text-lg">{option}</span>
                  </div>
                ))}
              </div>
              <div>
                <h2 className="mt-8 text-xl font-semibold text-left">
                  Experience Level
                </h2>
                <div className="mt-4 flex flex-col gap-2">
                  {experienceLevels.map((level) => (
                    <div
                      key={level}
                      className="flex items-center gap-2 cursor-pointer p-2 rounded-md hover:bg-gray-100"
                      onClick={() => toggleExperienceLevels(level)}
                    >
                      {selectedExperience.includes(level) ? (
                        <CheckSquare className="text-blue-600" />
                      ) : (
                        <Square className="text-gray-500" />
                      )}
                      <span className="text-lg">{level}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h2 className="mt-8 text-xl font-semibold text-left">
                  Range Salary
                </h2>

                <div className="flex flex-col gap-4 mt-4">
                  <button
                    className="flex items-center gap-2 text-lg font-medium"
                    onClick={() => setSelected("hourly")}
                  >
                    {selected === "hourly" ? (
                      <CheckSquare size={20} />
                    ) : (
                      <Square size={20} />
                    )}
                    Hourly
                  </button>

                  <button
                    className="flex items-center gap-2 text-lg font-medium"
                    onClick={() => setSelected("fixed")}
                  >
                    {selected === "fixed" ? (
                      <CheckSquare size={20} />
                    ) : (
                      <Square size={20} />
                    )}
                    Fixed
                  </button>
                </div>

                <div className="mt-4 flex gap-4 flex-col">
                  <div
                    className="flex gap-4"
                    style={{ display: selected === "hourly" ? "flex" : "none" }}
                  >
                    <input
                      type="number"
                      placeholder="$ Min    /hr"
                      className="border p-2 rounded w-32"
                      value={minValue}
                      onChange={(e) => setMinValue(e.target.value)}
                    />
                    <input
                      type="number"
                      placeholder="$ Max   /hr"
                      className="border p-2 rounded w-32"
                      value={maxValue}
                      onChange={(e) => setMaxValue(e.target.value)}
                    />
                  </div>

                  <div
                    style={{ display: selected === "fixed" ? "block" : "none" }}
                  >
                    <select className="border p-2 rounded w-full">
                      <option value="30k-50k">$30k - $50k</option>
                      <option value="50k-70k">$50k - $70k</option>
                      <option value="70k-100k">$70k - $100k</option>
                      <option value="100k+">$100k+</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#E5F6FE] shadow-lg rounded-lg p-6">
              <Search className=" left-3 text-gray-500" size={25} />
              <h2 className="text-2xl font-semibold text-[#000000] ml-8 -mt-7.5">
                Find you dream job
              </h2>
              <p className="mt-2 text-[#000000] text-xs text-left ml-8">
                Create a profile and we'll match you
                <br />
                with relevant remote jobs for free.
              </p>
              <div className="mt-4 flex items-center space-x-2 ml-7.5">
                <Star className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Share your job search status
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7.5">
                <Star className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Showcase your skills beyond a resume
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7.5">
                <Star className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Get discovered by top companies
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7.5">
                <Star className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Set salary expectations upfront
                </h1>
              </div>
              <div className="mt-2 flex items-center space-x-2 ml-7.5">
                <Star className="w-[10px] text-[#00A7AC]" />
                <h1 className="text-[#000000] text-xs font-bold">
                  Automatically discover relevant roles
                </h1>
              </div>
            </div>

            <div className="bg-[#E5F6FE] shadow-lg rounded-lg p-6">
              <h2 className="text-lg font-semibold text-[#000000]">
                Get the best opportunities
              </h2>
              <p className="mt-2 text-[#000000] font-semibold">
                Create your profile today
              </p>
              <div className="mt-4 flex gap-4 ">
                <img
                  src={Image1}
                  alt="Image 1"
                  className="w-40 h-40 object-cover rounded-lg ml-25"
                />
              </div>
            </div>
          </div>

          {/* Right Side - Job Cards */}
          <div className="w-3/4">
            <div className="flex justify-between items-center mb-4">
              <h1 className="text-xl font-bold text-gray-800">
                Showing 1-{jobCards.length} Jobs of 40,780
              </h1>
              <div className="relative group">
                <div className="flex items-center space-x-2 text-gray-600 text-sm cursor-pointer">
                  <span>Sort by</span>
                  <span>{sortFilter}</span>
                  <ChevronDown size={20} />
                </div>
                <div className="hidden group-hover:block absolute mt-2 w-48 bg-white text-black shadow-lg rounded-lg max-h-60 overflow-y-auto">
                  <ul>
                    {[
                      "Newest Post",
                      "Past 5 Days",
                      "Past 15 Days",
                      "Past 30 Days",
                    ].map((option) => (
                      <li
                        key={option}
                        className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                        onClick={() => setSortFilter(option)}
                      >
                        {option}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {jobCards.map((job) => (
                <div
                  key={job.id}
                  className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="p-6">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-xl font-bold text-gray-800">
                          {job.title}
                        </h3>
                        <p className="text-gray-600 mt-1">{job.company}</p>
                      </div>
                      <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">
                        {job.type}
                      </span>
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-700">{job.description}</p>
                    </div>
                    <div className="mt-4 flex items-center text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <span>{job.location}</span>
                    </div>
                    <div className="mt-2 flex items-center text-gray-500">
                      <svg
                        className="w-4 h-4 mr-1"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span>{job.salary}</span>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                      <span className="text-sm text-gray-500">
                        {job.posted}
                      </span>
                      <button className="bg-[#05445E] text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors duration-300">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Job;
