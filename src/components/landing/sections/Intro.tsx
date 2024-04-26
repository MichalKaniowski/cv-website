import { LandingSection } from "../LandingSection";

export const IntroSection = () => {
  return (
    <LandingSection>
      <p className="text-center sm:text-lg lg:text-2xl">
        Hi my name is
        <span className="text-green-600 mx-1">Michael Kaniowski</span>
      </p>
      <h1 className="text-3xl sm:text-4xl lg:text-7xl lg:font-bold lg:mb-10 font-medium text-center leading-8 tracking-tighter max-w-[1000px] text-balance mx-auto lg:tracking-tight">
        Web developer that gets work done.
      </h1>
    </LandingSection>
  );
};
