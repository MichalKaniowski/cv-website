import { cn } from "@/utils/cn";

export const LandingSectionHeading = ({
  children,
  className,
}: React.HTMLAttributes<HTMLHeadingElement>) => {
  return (
    <h2
      className={cn(
        "text-center text-4xl tracking-tighter text-white",
        className
      )}
    >
      {children}
    </h2>
  );
};

export const LandingSecondaryHeading = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <p className="text-center text-base uppercase tracking-tight text-white/60">
      {children}
    </p>
  );
};

export const LandingSection = ({
  children,
  className,
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("mb-10 md:mb-14 lg:mb-16", className)}>{children}</div>
  );
};
