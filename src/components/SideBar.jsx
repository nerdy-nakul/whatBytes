"use client";
import React, { useState } from "react";
import { SlBadge } from "react-icons/sl";
import { IoDocumentOutline } from "react-icons/io5";

const SideBar = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(data.data);
  const [isSidebarVisible, setIsSidebarVisible] = useState(false); // For mobile toggle

  const handleClick = (index) => {
    setActiveIndex(index);
    data.setData(index);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible((prevState) => !prevState);
  };

  const menuItems = [
    {
      icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 0 1 3 19.875v-6.75ZM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V8.625ZM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 0 1-1.125-1.125V4.125Z",
      label: "Dashboard",
    },
    { icon: <SlBadge />, label: "Skill Test" },
    {
      icon: <IoDocumentOutline />,
      label: "Internship",
    },
  ];

  return (
    <>
      <div className="hidden md:flex flex-col gap-5 py-8 border-r w-80">
        {menuItems.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={` flex items-center pl-6 mr-5 gap-4 cursor-pointer ${
              activeIndex === index
                ? "bg-gray-100 text-blue-600"
                : "text-slate-600"
            } rounded-tr-full rounded-br-full py-4 transition-colors duration-300`}
          >
            {typeof item.icon === "string" ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={item.icon}
                />
              </svg>
            ) : (
              <div className="h-6 w-6 flex justify-center items-center text-2xl">
                {item.icon}
              </div>
            )}
            <div className="font-bold text-lg">{item.label}</div>
          </div>
        ))}
      </div>

      <button
        onClick={toggleSidebar}
        className="md:hidden p-2 text-blue-600 focus:outline-none"
      >
        {isSidebarVisible ? "Close Menu" : "Open Menu"}
      </button>

      {isSidebarVisible && (
        <div className="md:hidden flex flex-col gap-5 py-8 border-r w-80 absolute top-0 left-0 h-full bg-white z-50">
          {menuItems.map((item, index) => (
            <div
              key={index}
              onClick={() => handleClick(index)}
              className={` flex items-center pl-6 mr-5 gap-4 cursor-pointer ${
                activeIndex === index
                  ? "bg-gray-100 text-blue-600"
                  : "text-slate-600"
              } rounded-tr-full rounded-br-full py-4 transition-colors duration-300`}
            >
              {typeof item.icon === "string" ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d={item.icon}
                  />
                </svg>
              ) : (
                <div className="h-6 w-6 flex justify-center items-center text-2xl">
                  {item.icon}
                </div>
              )}
              <div className="font-bold text-lg">{item.label}</div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SideBar;
