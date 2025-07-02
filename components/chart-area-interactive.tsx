"use client";

import * as React from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { Database } from "@/lib/types/supabasetypes";

export const description = "An interactive area chart";

type ChartData = Database['public']['Tables']['activity_log']['Row'];

const chartData = [
  { time: "02:00", login: 45, matched: 25, meeting: 10 },
  { time: "10:00", login: 65, matched: 38, meeting: 17 },
  { time: "11:00", login: 85, matched: 47, meeting: 23 },
  { time: "12:30", login: 80, matched: 42, meeting: 19 },
  { time: "13:00", login: 105, matched: 60, meeting: 30 },
  { time: "14:00", login: 115, matched: 70, meeting: 35 },
  { time: "15:00", login: 110, matched: 66, meeting: 32 },
  { time: "16:00", login: 100, matched: 58, meeting: 25 },
];

const chartConfig = {
  visitors: {
    label: "Visitors",
  },
  login: {
    label: "Login",
    color: "var(--chart-2)",
  },
  matched: {
    label: "Matched",
    color: "var(--chart-3)",
  },
  meeting: {
    label: "Meeting",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export function ChartAreaInteractive({chartData1}:{chartData1: ChartData[]}) {
  const isMobile = useIsMobile();

  return (
    <Card className="@container/card w-full">
      <CardHeader>
        <CardTitle>Activity by Time</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Activity for the last 14 hours
          </span>
          <span className="@[540px]/card:hidden">Last 14 hrs</span>
        </CardDescription>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="time"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              width={30}
            />
            <ChartTooltip
              cursor={false}
              defaultIndex={isMobile ? -1 : 10}
              content={<ChartTooltipContent indicator="dot" />}
            />
            <Line
              dataKey="login"
              type="monotone"
              stroke="var(--color-login)"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              dataKey="matched"
              type="monotone"
              stroke="var(--color-matched)"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
            <Line
              dataKey="meeting"
              type="monotone"
              stroke="var(--color-meeting)"
              strokeWidth={2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
