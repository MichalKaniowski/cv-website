import Link from "next/link";
import { LandingSection } from "../LandingSection";

export const Footer = () => {
  const currYear = new Date().getFullYear();
  return (
    <LandingSection className="mb-5">
      <div className="flex flex-wrap justify-center items-center gap-2 mb-1">
        <Link
          href="https://github.com/MichalKaniowski"
          target="_blank"
          className="text-gray-300 underline hover:text-white"
        >
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/michał-kaniowski-8a2537267/"
          target="_blank"
          className="text-gray-300 underline hover:text-white"
        >
          Linkedin
        </Link>
        <Link
          href=""
          target="_blank"
          className="text-gray-300 underline hover:text-white"
        >
          Resume
        </Link>
      </div>
      <p className="text-sm text-gray-400 text-center">
        © {currYear} Michał Kaniowski. All rights deserved.
      </p>
    </LandingSection>
  );
};
