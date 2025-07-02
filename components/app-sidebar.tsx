"use client";

import * as React from "react";
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
} from "@tabler/icons-react";

import { NavTools } from "@/components/nav-documents";
import { NavMain } from "@/components/nav-main";
import { NavSecondary } from "@/components/nav-secondary";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import Image from "next/image";

import {
  CalendarCheck2,
  ChartLine,
  Puzzle,
  MonitorDot,
  Users,
  NotepadText,
  Settings,
  CircleQuestionMark,
  Search,
} from "lucide-react";

export const data = {
  navMain: [
    {
      title: "Realtime KPI Dashboard",
      url: "/dashboard",
      icon: ChartLine,
    },
    {
      title: "Event Management",
      url: "/dashboard/event-management",
      icon: CalendarCheck2,
    },
    {
      title: "Matching Tracker",
      url: "/dashboard/matching-tracker",
      icon: Puzzle,
    },
    {
      title: "Meeting Monitoring",
      url: "/dashboard/meeting-monitoring",
      icon: MonitorDot,
    },
    {
      title: "Participant Management",
      url: "/dashboard/participant-management",
      icon: Users,
    },
  ],
  navSecondary: [
    {
      title: "Get Help",
      url: "#",
      icon: CircleQuestionMark,
    },
    {
      title: "Search",
      url: "#",
      icon: Search,
    },
  ],
  tools: [
    {
      name: "Reports",
      url: "#",
      icon: NotepadText,
    },
    {
      name: "AI Matching Settings",
      url: "#",
      icon: Settings,
    },
  ],
};

export function AppSidebar({
  user,
  ...props
}: {
  user: {
    name: string;
    email: string;
    avatar: string;
  };
} & React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <span className="flex items-center justify-start p-2">
              <a className="flex items-center justify-center gap-2" href="#">
                <Image
                  width={100}
                  height={100}
                  className="size-5 lg:size-8 invert"
                  alt="Main logo"
                  src="/logo.avif"
                />
                <span className="text-base lg:text-lg font-semibold">
                  Congkong
                </span>
              </a>
            </span>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavTools items={data.tools} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={user} />
      </SidebarFooter>
    </Sidebar>
  );
}
