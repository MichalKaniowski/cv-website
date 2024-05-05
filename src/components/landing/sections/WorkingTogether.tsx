import { EmailButtonWrapper } from "@/components/EmailButtonWrapper";
import { LandingSection, LandingSectionHeading } from "../LandingSection";

export const WorkingTogetherSection = () => {
  return (
    <LandingSection className="mb-20">
      <LandingSectionHeading className="mb-5 text-2xl tracking-tighter text-white md:text-3xl">
        Interested in working together?
      </LandingSectionHeading>
      <div className="flex justify-center items-center">
        <div>
          <EmailButtonWrapper>
            <button className=" flex items-center gap-1text-sm text-white border-[1px] border-gray-500 rounded-xl  bg-dark-lighter py-4 px-8 mx-auto hover:opacity-70">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
              </span>

              <span className="ml-3 text-lg text-white">Send me an email</span>
            </button>
          </EmailButtonWrapper>
          <p className="text-center mt-2 text-gray-300">
            Let&apos;s build together!
          </p>
        </div>
      </div>
    </LandingSection>
  );
};
