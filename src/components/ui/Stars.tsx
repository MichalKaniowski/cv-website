import { cn } from "@/utils/cn";
import Image from "next/image";

export const Stars = ({
  size,
  containerClassName,
}: {
  size?: number;
  containerClassName?: string;
}) => {
  const starSize = size ? size : 17;

  return (
    <div className={cn("flex items-center", containerClassName)}>
      {Array(5)
        .fill(0)
        .map((_, idx) => (
          <Image
            key={idx}
            src={"/images/star.svg"}
            width={starSize}
            height={starSize}
            alt=""
          />
        ))}
    </div>
  );
};
