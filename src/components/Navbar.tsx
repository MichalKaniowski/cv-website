import { FaGithub, FaLinkedin } from "react-icons/fa";

export const Navbar = () => {
  return (
    <div className="bg-white text-black p-4 rounded-md flex justify-between">
      <div className="flex gap-3 items-center">
        <FaGithub size={22} />
        <FaLinkedin size={22} />
      </div>
      <div>
        <button className="text-sm text-gray-500 border-[1px] border-gray-500 p-2 rounded-md flex gap-2 items-center">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
          </span>
          <span>Send me an email</span>
        </button>
      </div>
    </div>
  );
};
