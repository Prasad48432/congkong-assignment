"use client";

import { DashboardContext } from "./context";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import { SiteHeader } from "@/components/site-header";

export default function DashboardClientProvider({
  children,
  activity,
  participants,
  meetings,
}: {
  children: React.ReactNode;
  activity: Activity[];
  participants: Participant[];
  meetings: MeetingWithParticipant[];
}) {

  // simulate global user
  const user = {
    name: "Prasad Reddy",
    email: "prasad@gmail.com",
    avatar: "/avatar.svg",
  };

  return (
    <DashboardContext.Provider value={{ activity, participants, meetings }}>
      <SidebarProvider
        style={{
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties & Record<string, string>}
      >
        <AppSidebar variant="inset" user={user} />
        <SidebarInset>
          <SiteHeader user={user} />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </DashboardContext.Provider>
  );
}
