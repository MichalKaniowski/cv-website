import Image from "next/image";
import { Stars } from "./Stars";

export const TrustedByClients = () => {
  return (
    <div className="flex justify-center items-center gap-1.5">
      <div className="flex items-center flex-row-reverse  ml-[-56px]">
        <Image
          src="/images/testimonials1.png"
          width={40}
          height={40}
          className="rounded-full border-solid border-black border-2"
          alt="Our client's photo"
        />
        <Image
          src="/images/testimonials2.jpg"
          width={40}
          height={40}
          className="rounded-full border-solid border-black border-2 relative left-[14px]"
          alt="Our client's photo"
        />
        <Image
          src={"/images/testimonials3.png"}
          width={40}
          height={40}
          className="rounded-full border-solid border-black border-2 relative left-[28px]"
          alt="Our client's photo"
        />
        <Image
          src={"/images/testimonials4.jpg"}
          width={40}
          height={40}
          className="rounded-full border-solid border-black border-2 relative left-[42px]"
          alt="Our client's photo"
        />
        <Image
          src={"/images/testimonials5.jpg"}
          width={40}
          height={40}
          className="rounded-full border-solid border-black border-2 relative left-[56px]"
          alt="Our client's photo"
        />
      </div>
      <div>
        <Stars />
        <span className="text-sm">Trusted by clients</span>
      </div>
    </div>
  );
};
