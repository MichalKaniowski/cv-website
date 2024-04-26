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

const LinkToProject = ({ url }: { url: string }) => {
  return (
    <Link
      href={url}
      className="bg-gray-100 text-gray-500 p-[2px] rounded-lg flex justify-center items-center gap-1 text-sm"
    >
      <CiLink size={22} />
      <span>{url}</span>
    </Link>
  );
};

const LinkToGithub = ({ url }: { url: string }) => {
  return (
    <Link
      href={url}
      className="bg-[rgba(38,38,38,.6)] text-gray-500 p-[4px] rounded-lg border-[1px] border-gray-300 flex justify-center items-center gap-1 text-sm w-[30%] mx-auto"
    >
      <FaGithub size={22} />
    </Link>
  );
};

export const WorkBox = ({
  title,
  engTitle,
  description,
  skills,
  githubLink,
  websiteLink,
}: WorkBoxProps) => {
  return (
    <div className="bg-[rgba(38,38,38,.6)] border-[1px] border-gray-500 rounded-md p-5 relative max-w-[400px] mx-auto">
      <div className="absolute top-[5px] right-[10px] flex items-center gap-2">
        <Link href={websiteLink}>
          <CiLink size={28} />
        </Link>
        {githubLink && <FaGithub size={22} />}
      </div>

      <div className="mb-3">
        <h4 className="text-2xl leading-3 font-semibold">
          {title}
          {engTitle && (
            <span className="text-lg font-normal mx-1">(eng. {engTitle})</span>
          )}
        </h4>
      </div>
      <p className="text-gray-300">{description}</p>

      <div className="flex flex-wrap items-center gap-2 mt-6">
        {skills.map((skill) => (
          <SkillBox key={skill} name={skill} />
        ))}
      </div>
    </div>
  );
};
