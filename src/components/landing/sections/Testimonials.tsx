import { Stars } from "@/components/ui/Stars";
import {
  LandingSecondaryHeading,
  LandingSection,
  LandingSectionHeading,
} from "../LandingSection";
import Image from "next/image";

const testimonials = [
  {
    name: "Clay Elliot",
    message:
      "I recommend Mike's services. Full professionalism and commitment! Quick implementation!",
    imgSrc: "/images/testimonials2.jpg",
  },
  {
    name: "Alexander Hipp",
    message:
      "I highly recommend collaborating with Mike. He built my website recently, and I'm extremely pleased. He's professional, reliable, and works quickly.  His flexibility and great communication are a big plus.",
    imgSrc: "/images/testimonials4.jpg",
  },
  {
    name: "Lauren Bennett",
    message:
      "I recommend Mike's services. Very good contact. Quick implementation. Affordable prices. The best offer I found.",
    imgSrc: "/images/testimonials3.png",
  },
  {
    name: "Ava Thompson",
    message:
      "Working with Michael was a delight! He turned our vision into a stunning website, exceeding our expectations. Highly recommend!",
    imgSrc: "/images/testimonials1.png",
  },
  {
    name: "Connor Anderson",
    message:
      "I highly recommend working with Mike. Everything went through smoothly, even after the work was done there was no problem with further contact and performing further services.",
    imgSrc: "/images/testimonials5.jpg",
  },
];

("Incredible Work! Mike listened to our needs and delivered a flawless website. Thank your for your dedication.");

export const TestimonialsSection = () => {
  return (
    <LandingSection className="p-4">
      <LandingSecondaryHeading>testimonials</LandingSecondaryHeading>
      <LandingSectionHeading className="mb-10">
        Words from Clients
      </LandingSectionHeading>
      <div className="flex flex-col gap-4">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.name}
            className="rounded-xl bg-dark border-[1px] border-darkborder p-4"
          >
            <div className="flex items-center gap-2 mb-2">
              <Image
                src={testimonial.imgSrc}
                width={40}
                height={40}
                className="rounded-full"
                alt="Testimonial person"
              />
              <h4 className="text-lg font-medium text-white">
                {testimonial.name}
              </h4>
            </div>
            <Stars containerClassName="gap-[2px] mb-2" />
            <p>{testimonial.message}</p>
          </div>
        ))}
      </div>
    </LandingSection>
  );
};
