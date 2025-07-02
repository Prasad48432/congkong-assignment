import { ChartAreaInteractive } from "@/components/chart-area-interactive";
import { SectionCards } from "@/components/section-cards";
import PeopleCard from "@/components/peoplecard";
import { ChartNoAxesCombined, MoveRight, UserX } from "lucide-react";
import { createSClient } from "@/supabase/server";
import RealTimeInsights from "@/components/real-time-insights";

export default async function Page() {
  const supabase = createSClient();

  const [logRes, participantsRes, meetingsRes] = await Promise.all([
    supabase.from("activity_log").select("*").order("id", { ascending: true }),
    supabase.from("participants").select("*"),
    supabase
      .from("meetings")
      .select(
        "id, rating, satisfaction, scheduled_at, user_id, participants(id, name, avatar_initial)"
      ),
  ]);

  const activityData = logRes.data;
  const logError = logRes.error;

  const participants = participantsRes.data;
  const participantsError = participantsRes.error;

  const meetings = meetingsRes.data;
  const meetingsError = meetingsRes.error;

  if (logError || !activityData) {
    console.log();
    return <div>Logs fetching error</div>;
  }
  if (participantsError || !participants) {
    return <div>Participants fetching error</div>;
  }
  if (meetingsError || !meetings) {
    return <div>Meetings fetching error</div>;
  }
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:py-6">
          <SectionCards participants={participants} meetings={meetings} />
          <div className="px-4 lg:px-6 flex flex-col lg:flex-row gap-4">
            <div className="flex flex-col items-center justify-center w-full h-full gap-4">
              <ChartAreaInteractive activity={activityData} />
              <RealTimeInsights participants={participants} />
            </div>
            <PeopleCard participants={participants} meetings={meetings}/>
          </div>
          {/* <DataTable data={data} /> */}
        </div>
      </div>
    </div>
  );
}
