import { FaReact } from "react-icons/fa";
import { TbBrandNextjs } from "react-icons/tb";
import { LandingSection } from "../LandingSection";

const projectTypes = [
  {
    title: "React Web Apps",
    description:
      "Whether you're starting from scratch with an MVP or seeking assistance with an ongoing project, I'm here backed by experience gained from working on numerous projects.",
  },
  {
    title: "Outsourcing",
    description:
      "I'm available for outsourcing projects, whether you need a developer for a short-term project or a long-term partnership or just to develop a feature.",
  },
  {
    title: "Bots",
    description:
      "I have expertise in building automation and scraping bots tailored to your needs. Whether you require a custom bot or one designed for a specific platform like Discord, I've got you covered.",
  },
];

export const ProjectTypesSection = () => {
  return (
    <LandingSection className="p-4">
      <div className="grid grid-cols-1 gap-6">
        {projectTypes.map((type) => (
          <div
            key={type.title}
            className="p-4 bg-dark border-[1px] border-darkborder rounded-xl"
          >
            <h3 className="text-xl md:text-2xl font-medium tracking-tighter mb-2">
              {type.title}
            </h3>
            <p className="md:text-lg text-gray-300 mb-6 max-w-[90%] leading-6">
              {type.description}
            </p>
            <div className="flex justify-start items-center gap-2">
              <FaReact size={40} color="#61DBFB" />
              <TbBrandNextjs size={40} />
            </div>
          </div>
        ))}
      </div>
    </LandingSection>
  );
};
