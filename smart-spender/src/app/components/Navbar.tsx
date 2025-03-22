"use client";

import { useState, useEffect } from "react";
import { RiHome5Line } from "react-icons/ri";
import { LuChartPie } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { TbInfoCircle } from "react-icons/tb";
import {
  FaHome,
  FaUser,
  FaBell,
  FaChartPie,
  FaMoon,
  FaSun,
} from "react-icons/fa";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Load theme from localStorage
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  // Toggle dark mode
  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
    setDarkMode(!darkMode);
  };

  return (
    <nav className="bg-white font-[Manrope] dark:bg-zinc-900 backdrop-blur-3xl shadow-md dark:shadow-black/30 px-6 py-3 flex justify-between items-center">
      {/* Left: Logo & Links */}
      <div className="flex items-center space-x-6">
        <h1 className="text-xl font-bold text-zinc-900 dark:text-white">
          FinWise
        </h1>
        <div className="flex space-x-5">
          <NavItem Icon={RiHome5Line} label="Home" />
          <NavItem Icon={LuChartPie} label="Dashboard" />
          <NavItem Icon={AiOutlineUser} label="Profile" />
        </div>
      </div>

      {/* Right: Notifications & Dark Mode */}
      <div className="flex items-center space-x-6">
        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <FaBell className="text-xl text-zinc-700 dark:text-white" />
          <span className="absolute -top-1 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5 py-0.5">
            3
          </span>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 bg-zinc-200 dark:bg-zinc-800 rounded-full transition-all"
        >
          {darkMode ? (
            <FaSun className="text-yellow-300 text-lg" />
          ) : (
            <FaMoon className="text-zinc-700 dark:text-white text-lg" />
          )}
        </button>
      </div>
    </nav>
  );
};

// Reusable NavItem Component
const NavItem = ({
  Icon,
  label,
}: {
  Icon: React.ElementType;
  label: string;
}) => (
  <div className="flex items-center space-x-2 text-zinc-700 dark:text-white hover:text-green-500 cursor-pointer">
    <Icon className="text-lg" />
    <span className="text-sm">{label}</span>
  </div>
);

export default Navbar;
