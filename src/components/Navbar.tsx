import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Ping } from "@/components/ui/Ping";
import Link from "next/link";
import { EmailButtonWrapper } from "./EmailButtonWrapper";

export const Navbar = () => {
  return (
    <div className="bg-white text-black p-4 rounded-md flex justify-between max-w-[800px] w-[80%] mx-auto">
      <div className="flex gap-3 items-center">
        <Link href="https://github.com/MichalKaniowski" target="_blank">
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/michał-kaniowski-8a2537267/"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </Link>
      </div>
      <div>
        <EmailButtonWrapper>
          <button className="text-sm text-gray-500 border-[1px] border-gray-500 p-[10px] rounded-md flex gap-2 items-center hover:opacity-70">
            <Ping />
            <span>Send me an email</span>
          </button>
        </EmailButtonWrapper>
      </div>
    </div>
  );
};
