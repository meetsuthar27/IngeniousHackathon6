"use client";
// import React from "react";
import { useRouter } from "next/navigation";

function Page() {
  const router = useRouter();
  return (
    <div>
      About
      <button
        onClick={() => router.push("/")}
        className="px-4 py-1 m-3 bg-slate-600 rounded-md cursor-pointer"
      >
        Go Home
      </button>
    </div>
  );
}

export default Page;
