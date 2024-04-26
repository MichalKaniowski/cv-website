import { LandingSection, LandingSectionHeading } from "../LandingSection";

export const WorkingTogetherSection = () => {
  return (
    <LandingSection>
      <LandingSectionHeading className="text-center mb-4">
        Interested in working together?
      </LandingSectionHeading>
      <button className="text-sm text-white border-[1px] border-gray-500 rounded-md flex gap-2 items-center bg-[rgba(38,38,38,.6)] p-4 mx-auto hover:opacity-70">
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
        </span>
        <span>Send me an email</span>
      </button>
    </LandingSection>
  );
};
