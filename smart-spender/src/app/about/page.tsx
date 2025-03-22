import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";
// import { TechStackIcons } from "@/components/TechStackIcons"; // Assume you have an icon component

const teamMembers = [
  {
    name: "Romir Bedekar",
    role: "AI-ML Expert",
    tech: "Solidity, Hardhat, Remix IDE, Web3.js",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Meet Suthar",
    role: "Frontend Developer & UI/UX Designer",
    tech: "React.js, TailwindCSS, Framer Motion, Figma",
    linkedin: "#",
    github: "#",
  },

  {
    name: "Harsh Panchal",
    role: "Backend Developer",
    tech: "Node.js, Express, MongoDB, Firebase",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Kavish Parikh",
    role: "Auth Auth Auth",
    tech: "Python, TensorFlow, Pandas, NumPy",
    linkedin: "#",
    github: "#",
  },
  {
    name: "Tirthraj Raval",
    role: "Auth Auth Auth +++",
    tech: "Docker, Kubernetes, AWS, Ethical Hacking",
    linkedin: "#",
    github: "#",
  },
];

const Page = () => {
  return (
    <div className="min-h-screen font-[Manrope] bg-zinc-950 text-white px-6 sm:px-25 py-25 space-y-16">
      {/* About the Project */}
      <div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // className="text-center"
      >
        {/* <h1 className="text-4xl font-bold text-green-400">About Our Project</h1> */}

        <div className="justify-left">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 pb-5 inline-block text-transparent bg-clip-text tracking-tightest">
            About our project
          </h1>

          <p className="text-3xl z-10 mb-10 font-semibold text-[var(--acc)] opacity-[80%] tracking-tight">
            Hum bhi bana lenge - Ingenious Hackahton 6.0
          </p>
          <p className="mt-4 text-zinc-400 bg-zinc-900/40 p-6 border-[1px] border-zinc-800 rounded-2xl shadow-lg text-xl">
            <div className="rounded-2xl mb-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-zinc-300 mb-3">
                The Problem
              </h2>
              <p className="text-zinc-500">
                Retail investors struggle with complex markets, taxes, and
                regulations. So, we set out on a mission to build an AI-powered
                investment dashboard —because why should only fund managers have
                all the fun?
              </p>
            </div>
            {/* Achievements So Far */}
            <div className="z-10 rounded-2xl mb-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-zinc-300 mb-3">
                What We’ve Cooked Up So Far
              </h2>
              <ul className="list-disc list-inside space-y-1 text-[0.9em] text-zinc-500">
                <li>
                  AI-Based Financial Advice – Our AI now *kind of* knows money
                  better than us.
                </li>
                <li>
                  User Authentication – Yes, logging in works. No, we don’t sell
                  your data (yet).
                </li>
                <li>Interactive Charts – Because numbers alone are boring.</li>
                <li>
                  Live Market Data – Real-time stock prices so you can refresh
                  every 5 seconds in panic.
                </li>
              </ul>
            </div>
            {/* Future Plans */}
            <div className="rounded-lg shadow-lg">
              <h2 className="text-2xl font-semibold text-zinc-200 mb-3">
                Still Cooking...
              </h2>
              <p className="text-zinc-500 text-[0.9em]">
                Tax compliance & full regulation support (lawyers are
                expensive).
              </p>
            </div>
          </p>
        </div>
      </div>
      <div className="absolute left-0 bottom-0 flex justify-center items-center">
        <div className="bg-[var(--acc)]  blur-[10rem] opacity-40 w-[300px] h-[300px] rounded-full"></div>
      </div>
      <div className="absolute right-0 top-0 flex justify-center items-center">
        <div className="bg-[var(--acc)] blur-[10rem] opacity-40 w-[600px] h-[200px] rounded-full"></div>
      </div>
      <div className="absolute right-0 bottom-[-600px] flex justify-center items-center">
        <div className="bg-[var(--acc)] blur-[10rem] opacity-40 w-[100px] h-[700px] rounded-full"></div>
      </div>

      <hr className="border-[1px] border-zinc-800"></hr>

      {/* About the Team */}
      <div className="space-y-12">
        <div className="justify-right">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 pb-5 inline-block text-transparent bg-clip-text tracking-tightest">
            Meet our team
          </h1>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.2 }}
              className="bg-zinc-900/50 p-6 border-[1px] border-zinc-800 rounded-2xl shadow-lg"
            >
              <h3 className="text-2xl text-zinc-300">{member.name}</h3>
              <p className="text-zinc-500">{member.role}</p>
              <p className="flex flex-wrap gap-2 mt-2">
                {member.tech.split(", ").map((tech, index) => (
                  <span
                    key={index}
                    className="bg-[var(--acc)]/10 text-[var(--acc)]/40 text-xs px-3 py-1 rounded-full shadow-md"
                  >
                    {tech}
                  </span>
                ))}
              </p>

              <div className="flex space-x-4 mt-4">
                <a
                  href={member.linkedin}
                  className="text-zinc-400 hover:text-[var(--acc)]/60"
                >
                  <FaLinkedin size={20} />
                </a>
                <a
                  href={member.github}
                  className="text-zinc-400 hover:text-[var(--acc)]/60"
                >
                  <FaGithub size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <hr className="border-[1px] border-zinc-800"></hr>
      {/* Tech Stack */}
      <div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        // className="text-center"
      >
        <div className="justify-right">
          <h1 className="text-5xl font-extrabold bg-gradient-to-r from-zinc-500 via-zinc-200 to-zinc-500 pb-5 inline-block text-transparent bg-clip-text tracking-tightest">
            Tech Stack
          </h1>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-6">
          <FaLinkedin />
        </div>
      </div>

      {/* Stay Connected */}
      <div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center bg-zinc-900/50 p-6 rounded-2xl border-[1px] border-zinc-800 shadow-lg"
      >
        <h2 className="text-2xl font-bold text-green-400">Stay Connected</h2>
        <p className="text-zinc-300 mt-2 max-w-lg mx-auto">
          Follow us for updates, progress, and insights. Join our community to
          revolutionize voting with blockchain technology.
        </p>
      </div>
    </div>
  );
};

export default Page;
