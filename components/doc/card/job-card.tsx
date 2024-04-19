import { FcGoogle } from "react-icons/fc";
import { FaCheck, FaBriefcase } from "react-icons/fa";
import { IconBaseProps } from "react-icons/lib";

const JobCard = ({
  name = "Google",
  days = 12,
  title = "Software Engineer",
  place = "Mountain View, CA",
  salary = "$150-220k",
  location = "Remote",
  type = "Full-time",
  icon: Icon = FcGoogle,
  status = "Not Applied",
}: {
  name?: string;
  days?: number;
  title?: string;
  place?: string;
  salary?: string;
  location?: "Remote" | "Hybrid" | "Onsite";
  type?: "Full-time" | "Part-time" | "Contract" | "Internship";
  icon?: React.ComponentType<IconBaseProps>;
  status?: "Applied" | "Not Applied";
}) => {
  const formatDays = days > 1 ? `${days} days ago` : `Yesterday`;
  const formatType = `${location}, ${type}`;

  return (
    <div className="flex w-full max-w-60 flex-col rounded-md border bg-popover px-5 py-4">
      <div className="flex w-full items-center justify-between gap-x-2">
        <div className="w-fit rounded-full border p-2">
          <Icon className="h-4 w-4" />
        </div>
        <div className="flex items-center gap-x-2 rounded-sm border bg-secondary px-2 py-2 text-secondary-foreground">
          {status === "Applied" ? (
            <FaCheck className="h-3 w-3" />
          ) : (
            <FaBriefcase className="h-3 w-3" />
          )}
        </div>
      </div>
      <div className="mt-4 flex flex-wrap items-center gap-x-3">
        <h3 className="text-sm font-medium text-foreground md:text-base">
          {name}
        </h3>
        <span className="text-xs text-muted-foreground">{formatDays}</span>
      </div>
      <p className="mt-3 text-base font-semibold text-foreground md:text-lg">
        {title}
      </p>
      <p className="text-xs text-muted-foreground md:mt-1">{place}</p>
      <div className="mt-6 flex w-full items-center justify-between border-t pt-3">
        <div className="flex flex-col">
          <span className="font-medium text-foreground">{salary}</span>
          <span className="text-xs text-muted-foreground">{formatType}</span>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
