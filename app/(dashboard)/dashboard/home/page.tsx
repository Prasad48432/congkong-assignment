"use client";
import { LogsChart } from "@/components/logs-chart";
import { SectionCards } from "@/components/section-cards";
import PeopleCard from "@/components/peoplecard";
import RealTimeInsights from "@/components/real-time-insights";
import { useDashboardData } from "../../context";

export default function Page() {

  const {participants, meetings, activity} = useDashboardData();
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:py-6">
          <SectionCards participants={participants} meetings={meetings} />
          <div className="px-4 lg:px-6 flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4">
              <LogsChart activity={activity} />
              <RealTimeInsights participants={participants} />
            </div>
            <PeopleCard participants={participants} meetings={meetings}/>
          </div>
        </div>
      </div>
    </div>
  );
}
