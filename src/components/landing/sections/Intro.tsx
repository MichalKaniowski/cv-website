import { TrustedByClients } from "@/components/ui/TrustedByClients";
import { LandingSection } from "../LandingSection";
import Image from "next/image";
import { Ping } from "@/components/ui/Ping";

export const IntroSection = () => {
  return (
    <LandingSection>
      <div className="flex flex-col gap-4">
        <TrustedByClients />
        <div className="w-[80%] mx-auto flex items-center justify-center bg-dark text-gray-400 p-2 border-darkborder border-solid border-[1px]">
          <p>web apps ◦ outsourcing ◦ bots</p>
        </div>

        <h1 className="w-[80%] max-w-3xl text-center text-3xl font-medium tracking-tighter text-white md:text-[5rem] md:leading-[5rem] mx-auto">
          Web developer that gets work done.
        </h1>
      </div>

      <p className="max-w-xl mx-auto text-balance text-center text-gray-400 mt-5 mb-3">
        Hey, I&apos;m Mike, a driven
        <span className="mx-1 text-white">web developer</span>
        proficient in crafting efficient, user-centric solutions. Experienced in
        <span className="mx-1 text-white">translating client vision</span>
        into polished and functional websites.
      </p>

      <div className="mt-7">
        <button className="flex justify-center items-center gap-1 mx-auto border-[1px] bg-dark-lighter border-darkborder rounded-2xl px-4 py-4 mb-2">
          <Image
            src="/images/email.svg"
            width={30}
            height={30}
            alt="get in touch"
          />
          <span className="text-xl">Get in touch</span>
        </button>
        <div className="flex justify-center items-center gap-2">
          <Ping />
          <span className="text-gray-400 text-sm">Available Now</span>
        </div>
      </div>
    </LandingSection>
  );
};
