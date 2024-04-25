import { cn } from "@/utils/cn";

export const LandingSection = ({ children }: { children: React.ReactNode }) => {
  return <div className="mb-10">{children}</div>;
};

export const LandingSectionHeading = ({
  children,
  className,
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return <h2 className={cn("text-center text-3xl", className)}>{children}</h2>;
};
