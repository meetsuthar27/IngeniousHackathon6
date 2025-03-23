"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RiHome5Line } from "react-icons/ri";
import { LuChartPie } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { FaBell } from "react-icons/fa";
import { LuBell, LuSun } from "react-icons/lu";
import { BsStars } from "react-icons/bs";
import { RiInformationLine } from "react-icons/ri";
import { PiMoonStars } from "react-icons/pi";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = () => {
  const [darkMode, setDarkMode] = useState(false);
  const pathname = usePathname(); // Get current route

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

  const router = useRouter();
  const session = useSession();
  console.log(session);

  return (
    <nav className="bg-white fixed w-full top-0 z-100 left-0 font-[Manrope] dark:bg-black/50 backdrop-blur-3xl border-b-[2px] border-emerald-800/50 shadow-md dark:shadow-black/30 px-6 py-3 flex justify-between items-center">
      {/* Left: Logo */}
      <h1 className="text-xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-200">
        FinAura.ai
      </h1>

      {/* Middle: Navigation Links */}
      <div className="flex space-x-5 bg-zinc-900/50 px-5 py-2 border border-zinc-800/70 rounded-2xl">
        <NavButton
          href="/"
          icon={RiHome5Line}
          label="Home"
          pathname={pathname}
        />
        <NavButton
          href="/dashboard"
          icon={LuChartPie}
          label="Dashboard"
          pathname={pathname}
        />
        <NavButton
          href="/profile"
          icon={AiOutlineUser}
          label="Profile"
          pathname={pathname}
        />
        <NavButton
          href="/recommandation"
          icon={BsStars}
          label="Recommandation"
          pathname={pathname}
        />
        <NavButton
          href="/about"
          icon={RiInformationLine}
          label="About Us"
          pathname={pathname}
        />
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
        {session?.data?.user && (
          <button
            onClick={async () => {
              await signOut({ callbackUrl: "/" });
            }}
            className="text-zinc-300 bg-zinc-800 px-5 py-2 text-sm rounded-full border-[1px] border-zinc-700/50"
          >
            Logout
          </button>
        )}
        {!session?.data?.user && (
          <button
            onClick={async () => {
              await signIn("google", { callbackUrl: "/dashboard" });
              // router.push("/dashboard");
            }}
            className="text-zinc-300 bg-zinc-800 px-5 py-2 text-sm rounded-full border-[1px] border-zinc-700/50"
          >
            Login
          </button>
        )}
      </div>
    </nav>
  );
};

const NavButton = ({
  href,
  icon: Icon,
  label,
  pathname,
}: {
  href: string;
  icon: React.ElementType;
  label: string;
  pathname: string;
}) => {
  const isActive = pathname === href;

  return (
    <Link href={href} className="block">
      <button
        className={`flex items-center cursor-pointer space-x-2 px-3 py-1 rounded-lg transition-all
          ${
            isActive ? "text-emerald-500" : "text-white hover:text-emerald-600"
          }`}
      >
        <Icon className="text-lg" />
        <span className="text-sm">{label}</span>
      </button>
    </Link>
  );
};

export default Navbar;
