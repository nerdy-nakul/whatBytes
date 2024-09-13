"use client";
import React, { useState } from "react";
import Image from "next/image";

const Navbar = () => {
  const [isUserMenuVisible, setIsUserMenuVisible] = useState(false);

  const toggleUserMenu = () => {
    setIsUserMenuVisible((prevState) => !prevState);
  };

  return (
    <div className="bg-white py-4 px-6 border-b relative">
      {/* Desktop Navbar */}
      <div className="hidden md:flex justify-between items-center h-[50px]">
        <div>
          <Image
            src="https://cdn.prod.website-files.com/65cb431fbaab685eab1f5470/65cb445e7204d21122a75be0_WHATBYTESLOGO.png"
            alt="Website Logo"
            height={225}
            width={225}
            className="object-contain"
          />
        </div>
        <div className="flex items-center space-x-2 border py-1 px-2 rounded-lg transition">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
            alt="User Avatar"
            width={35}
            height={35}
            className="rounded-full bg-gray-300 p-1"
          />
          <p className="text-lg font-semibold">Rahil Siddique</p>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden flex justify-between items-center">
        <div>
          <Image
            src="https://cdn.prod.website-files.com/65cb431fbaab685eab1f5470/65cb445e7204d21122a75be0_WHATBYTESLOGO.png"
            alt="Website Logo"
            height={120}
            width={120}
            className="object-contain"
          />
        </div>
        <div>
          {isUserMenuVisible ? (
            <div
              className="flex items-center space-x-2 border py-1 px-2 rounded-lg my-1 cursor-pointer hover:bg-gray-100 transition"
              onClick={toggleUserMenu}
            >
              <p className="text-lg">Rahil Siddique</p>
            </div>
          ) : (
            <button
              className="text-gray-500 focus:outline-none"
              onClick={toggleUserMenu}
              aria-label="Toggle user menu"
            >
              <Image
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/1200px-User_icon_2.svg.png"
                alt="User Avatar"
                width={40}
                height={40}
                className="rounded-full bg-gray-300 p-1"
              />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
