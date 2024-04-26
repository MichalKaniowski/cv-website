import { cn } from "@/utils/cn";

export const LandingSection = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("mb-10 md:mb-14 lg:mb-16", className)}>{children}</div>
  );
};

export const LandingSectionHeading = ({
  children,
  className,
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "text-center text-4xl md:text-5xl tracking-tighter",
        className
      )}
    >
      {children}
    </h2>
  );
};
