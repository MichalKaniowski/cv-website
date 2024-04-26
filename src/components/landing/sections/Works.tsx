import { LandingSection, LandingSectionHeading } from "../LandingSection";
import { WorkBox } from "../WorkBox";

// TODO: once all projects are done fill works with real information
const works = [
  {
    title: "ProstaMaturka",
    engTitle: "EasyExam",
    description:
      "Built frontend and backend with next.js. It's a course platform for high school graduates who learn for leaving exam. It implements features like authentication, payments, custom videoplayer, tracking user progress, analytics and more.",
    skills: ["React", "NextJS", "MongoDB", "Resend"],
    websiteLink: "https://www.prostamaturka.pl",
    githubLink: "",
  },
  {
    title: "Chat App",
    engTitle: "",
    description:
      "Built frontend and backend with next.js. It's a course platform for high school graduates who learn for high school leaving exam. It implements features like authentication, payments, custom videoplayer, tracking user progress, analytics and more.",
    skills: ["React", "NextJS", "MongoDB", "Resend"],
    websiteLink: "https://www.prostamaturka.pl",
    githubLink: "some-github-link",
  },
  {
    title: "CV website",
    engTitle: "",
    description:
      "Built frontend and backend with next.js. It's a course platform for high school graduates who learn for high school leaving exam. It implements features like authentication, payments, custom videoplayer, tracking user progress, analytics and more.",
    skills: ["React", "NextJS", "MongoDB", "Resend"],
    websiteLink: "https://www.prostamaturka.pl",
    githubLink: "some-github-link",
  },
];

export const WorksSection = () => {
  return (
    <LandingSection>
      {/* <p className="text-lg text-gray-400  text-center mb-[-4px]">WORKS</p> */}
      <LandingSectionHeading>Featured Projects</LandingSectionHeading>
      <p className="text-center mb-4 text-sm text-gray-300 max-w-[80%] mx-auto">
        Projects with no github shown are production projects
      </p>
      <div className="flex flex-wrap items-center gap-4 max-w-[1400px] mx-auto">
        {works.map((work) => (
          <WorkBox key={work.title} {...work} />
        ))}
      </div>
    </LandingSection>
  );
};
