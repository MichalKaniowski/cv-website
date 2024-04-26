import { LandingSection, LandingSectionHeading } from "../LandingSection";
import Image from "next/image";

const WorkflowBox = ({ children }: { children: React.ReactNode }) => {
  return <div className="p-2 mx-auto max-w-[400px]">{children}</div>;
};

const WorkflowHeading = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-2xl font-medium text-center mt-2 mb-3 text-balance">
      {children}
    </h3>
  );
};

const WorkflowParagraph = ({ children }: { children: React.ReactNode }) => {
  return <p className="text-center text-gray-300 text-balance">{children}</p>;
};

export const WorkflowSection = () => {
  return (
    <LandingSection>
      <LandingSectionHeading className="mb-6">
        How I get things done?
      </LandingSectionHeading>
      {/* grid grid-cols-1 md:grid-cols-2 */}
      <div className="flex flex-wrap justify-center items-center gap-2 mx-auto max-w-[1400px]">
        <WorkflowBox>
          <Image
            width={50}
            height={50}
            src="/images/specifications.svg"
            alt=""
            className="mx-auto"
          />
          <WorkflowHeading>Specifications</WorkflowHeading>
          <WorkflowParagraph>
            Define the project&apos;s requirements, goals and features in
            detail.
          </WorkflowParagraph>
        </WorkflowBox>

        <WorkflowBox>
          <Image
            width={50}
            height={50}
            src="/images/development.svg"
            alt=""
            className="mx-auto"
          />
          <WorkflowHeading>Development</WorkflowHeading>
          <WorkflowParagraph>
            Progress updates will be shared on Slack, and tasks will be logged
            on YouTrack, ensuring clarity and accountability throughout the
            development cycle.
          </WorkflowParagraph>
        </WorkflowBox>

        <WorkflowBox>
          <Image
            width={50}
            height={50}
            src="/images/delivery.svg"
            alt=""
            className="mx-auto"
          />
          <WorkflowHeading>Delivery</WorkflowHeading>
          <WorkflowParagraph>
            After approvement and testing, code or deployment will be delivered.
          </WorkflowParagraph>
        </WorkflowBox>
      </div>

      <div className="flex flex-col gap-2 mt-4">
        <div className="flex items-center justify-center gap-2">
          <p className="text-sm text-gray-300">Payments via Stripe</p>
          <Image width={20} height={20} src="/images/stripe-icon.svg" alt="" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-sm text-gray-300">Communication via Slack</p>
          <Image width={20} height={20} src="/images/slack-icon.svg" alt="" />
        </div>
        <div className="flex items-center justify-center gap-2">
          <p className="text-sm text-gray-300">Hours & Tasks on YouTrack</p>
          <Image
            width={20}
            height={20}
            src="/images/youtrack-icon.svg"
            alt=""
          />
        </div>
      </div>
    </LandingSection>
  );
};
