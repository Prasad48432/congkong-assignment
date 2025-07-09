import { createSClient } from "@/supabase/server";
import DashboardClientProvider from "./dashboard-client-provider";
import { ReactNode } from "react";

export default async function DashboardGroupLayout({ children }: { children: ReactNode }) {

  const supabase = createSClient();

  const [logRes, participantsRes, meetingsRes] = await Promise.all([
    supabase.from("activity_log").select("*").order("id", { ascending: true }),
    supabase.from("participants").select("*"),
    supabase.from("meetings").select("id, rating, satisfaction, scheduled_at, user_id, status, participants(id, name, avatar_initial)"),
  ]);

  const activity = logRes.data ?? [];
  const participants = participantsRes.data ?? [];
  const meetings = meetingsRes.data ?? [];

  return (
    <DashboardClientProvider activity={activity} participants={participants} meetings={meetings}>
      {children}
    </DashboardClientProvider>
  );
}



