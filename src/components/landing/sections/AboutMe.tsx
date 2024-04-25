import { LandingSection, LandingSectionHeading } from "../LandingSection";

import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { SiTailwindcss, SiTestinglibrary } from "react-icons/si";
import { FaSheetPlastic } from "react-icons/fa6";

const HighlightedText = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-white mx-1 font-medium">{children}</span>;
};

const SkillBox = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="py-5 px-10 bg-[rgba(38,38,38,.6)] text-white border-[0.5px] border-gray-400 rounded-md">
      {children}
    </div>
  );
};

export const AboutMeSection = () => {
  return (
    <LandingSection>
      <div className="mb-4">
        {/* <p className="text-xl text-gray-300  text-center mb-[-4px]">ABOUT ME</p> */}
        <LandingSectionHeading className="mb-4">
          Get to know me
        </LandingSectionHeading>
        <p className="text-lg text-gray-300 tracking-tight">
          Hi I&apos;m Michael. A dedicated
          <HighlightedText>web developer</HighlightedText>
          based in Poland with
          <HighlightedText>1 year of experience.</HighlightedText>
          Specializing in
          <HighlightedText>full-stack app development.</HighlightedText>
          My primary focus is to create performant websites with seamless user
          experience.
        </p>
      </div>

      <h3 className="text-2xl mb-2">Skills</h3>
      <div className="flex justify-center items-center flex-wrap gap-3 mb-6">
        <SkillBox>
          <FaHtml5 size={45} className="mx-auto" color="#e34c26" />
          {/* <FaHtml5 size={45} className="mx-auto" color="white" /> */}
          <p className="text-center">HTML</p>
        </SkillBox>

        <SkillBox>
          <FaCss3Alt size={45} className="mx-auto" color="#2965f1" />
          {/* <FaCss3Alt size={45} className="mx-auto" color="white" /> */}
          <p className="text-center">CSS</p>
        </SkillBox>

        <SkillBox>
          <SiTailwindcss size={45} className="mx-auto" color="#06b6d4" />
          <p className="text-center">Tailwind</p>
        </SkillBox>

        <SkillBox>
          <FaReact size={45} className="mx-auto" color="#61DBFB" />
          {/* <FaReact size={45} className="mx-auto" color="white" /> */}
          <p className="text-center">React</p>
        </SkillBox>

        <SkillBox>
          <TbBrandNextjs size={45} className="mx-auto" />
          <p className="text-center">NextJS</p>
        </SkillBox>

        <SkillBox>
          <SiTestinglibrary size={45} className="mx-auto" color="#C41E3A" />
          <p className="text-center ">React Testing Libary</p>
        </SkillBox>

        {/* // TODO: add mongodb, express, prisma maybe, react native, maybe add text to skills section */}
      </div>

      <h3 className="text-2xl mb-2">Personal</h3>
      <p className="text-gray-300 mb-6">
        I&apos;m actively involved in creating freelance projects for my
        clients. In my personal time I like to make my own saas projects.
        I&apos;m passionate about web development, physics and machine learning.
      </p>

      <button className="flex items-center gap-2 mx-auto border-[1px] border-gray-300 p-3 rounded-lg bg-[rgba(38,38,38,.6)] mb-6">
        <FaSheetPlastic size={24} />
        <span className="text-xl">Resume</span>
      </button>
    </LandingSection>
  );
};
