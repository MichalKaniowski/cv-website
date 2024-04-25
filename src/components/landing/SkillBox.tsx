export const SkillBox = ({ name }: { name: string }) => {
  return (
    <div className="bg-[rgba(45,81,52,.2)] text-[rgb(162,206,173)] border-[1px] border-[rgb(57,81,62)] py-1 px-[6px] rounded-md text-sm">
      {name}
    </div>
  );
};
