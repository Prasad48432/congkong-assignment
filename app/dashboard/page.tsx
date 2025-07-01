import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { DataTable } from "@/components/data-table";
import { SectionCards } from "@/components/section-cards";

import data from "./data.json";
import PeopleCard from "@/components/peoplecard";

export default function Page() {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:py-6">
          <SectionCards />
          <div className="px-4 lg:px-6 flex flex-col lg:flex-row gap-4">
            <ChartAreaInteractive />
            <PeopleCard />
          </div>
          <DataTable data={data} />
        </div>
      </div>
    </div>
  );
}
