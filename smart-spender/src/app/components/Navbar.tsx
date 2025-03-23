"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { RiHome5Line } from "react-icons/ri";
import { LuChartPie } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { FaBell, FaMoon, FaSun } from "react-icons/fa";
import { LuBell } from "react-icons/lu";
import { LuSun } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { RiInformationLine } from "react-icons/ri";
import { PiMoonStars } from "react-icons/pi";

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
    <nav
      className="bg-white fixed 
                w-full top-0 z-100 left-0 font-[Manrope] dark:bg-black/50 backdrop-blur-3xl border-b-[2px] border-emerald-800/50 shadow-md dark:shadow-black/30 px-6 py-3 flex justify-between items-center"
    >
      {/* Left: Logo */}
      <h1 className="text-xl font-semibold tracking-tightest text-zinc-900 dark:text-zinc-200">
        FinWise
      </h1>

      {/* Middle: Navigation Links */}
      <div className="flex space-x-5 bg-zinc-900/50 px-5 py-2 border border-zinc-800/70 rounded-2xl">
        <NavButton href="/" icon={RiHome5Line} label="Home" />
        <NavButton href="/dashboard" icon={LuChartPie} label="Dashboard" />
        <NavButton href="/profile" icon={AiOutlineUser} label="Profile" />
        <NavButton
          href="/recommandation"
          icon={BsStars}
          label="Recommandation"
        />
        <NavButton href="/about" icon={RiInformationLine} label="About Us" />
      </div>

      {/* Right: Notifications & Dark Mode */}
      <div className="flex items-center space-x-6">
        {/* Notification Bell */}
        <div className="relative cursor-pointer">
          <LuBell className="text-2xl text-zinc-700 dark:text-zinc-300" />
          <span className="absolute -top-2 -right-2 bg-emerald-600 text-white text-xs rounded-full px-1.5 py-0.5">
            3
          </span>
        </div>

        {/* Dark Mode Toggle */}
        <button
          onClick={toggleDarkMode}
          className="p-2 rounded-full transition-all"
        >
          {darkMode ? (
            <LuSun className="text-yellow-300 text-2xl" />
          ) : (
            <PiMoonStars className="text-zinc-700 dark:text-zinc-300 text-2xl" />
          )}
        </button>
      </div>
    </nav>
  );
};

const NavButton = ({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
}) => (
  <Link href={href} className="block">
    <button className="flex items-center cursor-pointer space-x-2 text-white hover:text-emerald-600 px-3 py-1 rounded-lg transition-all">
      <Icon className="text-lg" />
      <span className="text-sm">{label}</span>
    </button>
  </Link>
);

export default Navbar;
