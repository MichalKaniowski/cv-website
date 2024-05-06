import { SkillBox } from "./SkillBox";
import Link from "next/link";
import { CiLink } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

interface WorkBoxProps {
  title: string;
  engTitle: string;
  description: string;
  skills: string[];
  githubLink: string;
  websiteLink: string;
}

export const WorkBox = ({
  title,
  engTitle,
  description,
  skills,
  githubLink,
  websiteLink,
}: WorkBoxProps) => {
  return (
    <div className="bg-dark border-[1px] border-gray-500 rounded-xl p-6 md:p-8 relative max-w-[500px] mx-auto">
      <div className="absolute top-[5px] right-[10px] flex items-center gap-2">
        <Link href={websiteLink} target="_blank">
          <CiLink size={28} />
        </Link>
        {githubLink && (
          <Link href={githubLink} target="_blank">
            <FaGithub size={22} />
          </Link>
        )}
      </div>

      <div className="mb-3">
        <h4 className="text-2xl leading-3 font-semibold">
          {title}
          {engTitle && (
            <span className="text-lg font-normal mx-1">(eng. {engTitle})</span>
          )}
        </h4>
      </div>
      <p className="mb-5 text-base text-white/60">{description}</p>

      <div className="flex flex-wrap items-center gap-2 mt-6">
        {skills.map((skill) => (
          <SkillBox key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
};
