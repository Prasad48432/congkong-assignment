import { ChartNoAxesCombined, MoveRight, UserX } from "lucide-react";
import React from "react";

const RealTimeInsights = ({
  participants,
}: {
  participants: Participant[];
}) => {
  const pending = participants.filter(
    (participant) => participant.profile_status === "incomplete"
  );
  return (
    <div className="h-fit lg:h-[200px] w-full bg-transparent  py-4 gap-4 flex flex-col">
      <h1 className="font-semibold px-1">Real-Time Insights</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="col-span-1 flex items-start gap-3 rounded-xl p-3 bg-card border">
          <div className="size-12 lg:size-14 shrink-0 rounded-lg border bg-popover flex items-center justify-center text-foreground/80">
            <ChartNoAxesCombined className="size-6 lg:size-8" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h1 className="text-sm font-medium text-foreground">
              Surge Industry-identified
            </h1>
            <p className="text-xs text-muted-foreground leading-snug text-balance">
              Match-success-rate between AI-analyzed & quality
            </p>
            <a
              href="#"
              className="group inline-flex items-center text-xs font-medium text-primary hover:underline"
            >
              View detailed report
              <MoveRight
                size={16}
                className="ml-1 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
        <div className="col-span-1 flex items-start gap-3 rounded-xl p-3 bg-card border">
          <div className="size-12 lg:size-14 shrink-0 rounded-lg border bg-popover flex items-center justify-center text-foreground/80">
            <UserX className="size-6 lg:size-8" />
          </div>
          <div className="flex flex-col gap-1.5">
            <h1 className="text-sm font-medium text-foreground">
              Numerous Uncompleted Profiles
            </h1>
            <p className="text-xs text-muted-foreground leading-snug text-balance">
              {pending.length} participants completing profiles, potentially low quality
            </p>
            <a
              href="#"
              className="group inline-flex items-center text-xs font-medium text-primary hover:underline"
            >
              Send notification
              <MoveRight
                size={16}
                className="ml-1 transition-transform group-hover:translate-x-1"
                strokeWidth={1.5}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealTimeInsights;
