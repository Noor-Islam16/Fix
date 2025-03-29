import React from "react";
import { motion } from "framer-motion";
import { ChevronDown, Search } from "lucide-react";
import "@fontsource/poppins";
import Navbar from "../component/Navbar";

const Job = () => {
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
          <div className="relative w-[600px]">
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

        <div className="w-[311px] bg-[#E5F6FE] shadow-lg rounded-lg p-6 border border-gray-200 ml-18 mt-30">
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
              className="w-[188px] p-3 border bg-white border-gray-300 rounded-lg shadow-sm"
            />
            <button className="w-[106px] mt-3 bg-[#05445E] text-white px-4 py-3 rounded-md hover:bg-blue-700">
              Submit
            </button>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Job;
