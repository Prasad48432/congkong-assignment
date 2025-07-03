// dashboard/context.tsx
"use client";
import { createContext, useContext } from "react";

type DashboardData = {
  activity: Activity[];
  participants: Participant[];
  meetings: MeetingWithParticipant[];
};

export const DashboardContext = createContext<DashboardData | null>(null);

export const useDashboardData = () => {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("DashboardData used outside provider");
  return ctx;
};
