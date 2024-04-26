import Link from "next/link";
import { LandingSection } from "../LandingSection";

export const Footer = () => {
  return (
    <LandingSection className="p-1 mb-0 pb-0">
      <div className="flex flex-wrap justify-center items-center gap-2">
        <Link
          href="https://github.com/MichalKaniowski"
          className="text-gray-300 underline hover:text-white"
        >
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/michał-kaniowski-8a2537267/"
          className="text-gray-300 underline hover:text-white"
        >
          Linkedin
        </Link>
        <Link href="" className="text-gray-300 underline hover:text-white">
          Resume
        </Link>
      </div>
    </LandingSection>
  );
};
