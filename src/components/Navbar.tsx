import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Ping } from "@/components/ui/Ping";
import Link from "next/link";
import { EmailButtonWrapper } from "./EmailButtonWrapper";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="relative bg-white text-black p-3 sm:p-4 rounded-md flex justify-between max-w-[800px] w-[95%] sm:w-[80%] mx-auto">
      <div className="flex gap-3 items-center w-[50%]">
        <Link href="https://github.com/MichalKaniowski" target="_blank">
          <FaGithub size={24} />
        </Link>
        <Link
          href="https://www.linkedin.com/in/michał-kaniowski-8a2537267/"
          target="_blank"
        >
          <FaLinkedin size={24} />
        </Link>
        <Link href="" target="_blank">
          <Image
            src="/images/resume.png"
            width={24}
            height={24}
            className=" text-black z-[100]"
            alt="resume"
          />
        </Link>
      </div>
      <div className="w-[50%] flex justify-end items-center">
        <EmailButtonWrapper>
          <button className="text-sm text-gray-500 border-[1px] border-gray-500 p-[10px] rounded-md flex gap-2 items-center hover:opacity-70">
            <Ping />
            <span className="">Send me an email</span>
          </button>
        </EmailButtonWrapper>
      </div>
    </div>
  );
};
