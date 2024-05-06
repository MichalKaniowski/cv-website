import {
  LandingSecondaryHeading,
  LandingSection,
  LandingSectionHeading,
} from "../LandingSection";
import Image from "next/image";

const HighlightedText = ({ children }: { children: React.ReactNode }) => {
  return <span className="text-white mx-1 font-medium">{children}</span>;
};

export const AboutMeSection = () => {
  const paragraphClassName =
    "text-lg tracking-tighter text-white/60 md:text-xl";
  const headingClassName =
    "mb-4 mt-8 text-left text-2xl tracking-tighter text-white";

  return (
    <LandingSection>
      <div className="mb-5 sm:mb-7 max-w-xl mx-auto">
        <div className="mb-4">
          <LandingSecondaryHeading>ABOUT ME</LandingSecondaryHeading>
          <LandingSectionHeading className="mb-3">
            Get to know me
          </LandingSectionHeading>
        </div>

        <div className="px-4">
          <p className={paragraphClassName}>
            Hi I&apos;m a dedicated
            <HighlightedText>web developer</HighlightedText>
            based in Poland with
            <HighlightedText>
              over 1 year of professional work experience.
            </HighlightedText>
            Specializing in
            <HighlightedText>full-stack app development.</HighlightedText>
            My primary focus is to create performant websites with seamless user
            experience.
          </p>

          <h3 className={headingClassName}>Technical</h3>
          <div className="flex justify-center items-center flex-wrap gap-3 mb-6">
            <p className={paragraphClassName}>
              My development roots are in React and Node.js and in general
              anything Javascript/Typescript related in React ecosystem.
            </p>
            <p className={paragraphClassName}>
              Furthemore I have experience in building native apps with react
              native and bots with node.js.
            </p>

            {/* // TODO: add mongodb, express, prisma maybe, react native, maybe add text to skills section */}
          </div>

          <h3 className={headingClassName}>Personal</h3>
          <p className={paragraphClassName}>
            I&apos;m actively involved in creating freelance projects for my
            clients. In my personal time I like to make my own saas projects.
            I&apos;m passionate about web development, physics and machine
            learning.
          </p>

          <button className="flex items-center gap-2 mx-auto border-[1px] border-gray-400 p-4 rounded-lg bg-dark mt-8 hover:opacity-70">
            <Image
              src="/images/resume.svg"
              width={25}
              height={25}
              className=""
              alt="resume"
            />
            <span className="text-xl">Resume</span>
          </button>
        </div>
      </div>
    </LandingSection>
  );
};
