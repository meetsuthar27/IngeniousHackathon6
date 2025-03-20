"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export const Navigation = () => {
  const pathname = usePathname();
  return (
    <nav className="p-7 flex justify-center bg-slate-900">
      <Link
        href="/"
        className={pathname === "/" ? "font-bold mr-4" : "text-slate-400 mr-4"}
      >
        Home
      </Link>
      <Link
        href="/about"
        className={
          pathname === "/about" ? "font-bold mr-4" : "text-slate-400 mr-4"
        }
      >
        About
      </Link>

      <Link
        href="/products/1"
        className={
          pathname.startsWith("/products/1")
            ? "font-bold mr-4"
            : "text-slate-400 mr-4"
        }
      >
        Product 1
      </Link>
    </nav>
  );
};
