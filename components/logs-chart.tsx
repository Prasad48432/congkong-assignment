"use client";

import React, { useState } from "react";
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";

import { useIsMobile } from "@/hooks/use-mobile";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ToggleGroup, ToggleGroupItem } from "./ui/toggle-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "./ui/select";

export const description = "An interactive area chart";

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

export function LogsChart({ activity }: { activity: Activity[] }) {
  const activityData = activity.map((item) => ({
    time: new Date(item.timestamp).toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    }),
    login: item.participant_logins,
    matched: item.matches,
    meeting: item.meetings,
  }));

  const isMobile = useIsMobile();
  const [hoursRange, setHoursRange] = useState<number>(8); // default: last 8 hours

  const filteredData = activityData.slice(-hoursRange);

  return (
    <Card className="@container/card w-full">
      <CardHeader>
        <CardTitle>Activity by Time</CardTitle>
        <CardDescription>
          <span className="hidden @[540px]/card:block">
            Activity for the last 8 hours
          </span>
          <span className="@[540px]/card:hidden">Last 8 hrs</span>
        </CardDescription>
        <CardAction>
          <ToggleGroup
            type="single"
            value={`${hoursRange}`}
            onValueChange={(value) => setHoursRange(Number(value))}
            variant="outline"
            className="hidden *:data-[slot=toggle-group-item]:!px-4 @[767px]/card:flex"
          >
            <ToggleGroupItem value="30">Last 30 hours</ToggleGroupItem>
            <ToggleGroupItem value="24">Last 24 hours</ToggleGroupItem>
            <ToggleGroupItem value="8">Last 8 hours</ToggleGroupItem>
          </ToggleGroup>
          <Select value={`${hoursRange}`} onValueChange={(value) => setHoursRange(Number(value))}>
            <SelectTrigger
              className="flex w-28 text-xs **:data-[slot=select-value]:block **:data-[slot=select-value]:truncate @[767px]/card:hidden"
              size="sm"
              aria-label="Select a value"
            >
              <SelectValue placeholder="Last 3 months" />
            </SelectTrigger>
            <SelectContent className="rounded-xl">
              <SelectItem value="30" className="rounded-lg">
                30 hours
              </SelectItem>
              <SelectItem value="24" className="rounded-lg">
                24 hours
              </SelectItem>
              <SelectItem value="8" className="rounded-lg">
                8 hours
              </SelectItem>
            </SelectContent>
          </Select>
        </CardAction>
      </CardHeader>
      <CardContent className="px-2 pt-4 sm:px-6 sm:pt-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <LineChart data={filteredData}>
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
            <ChartLegend content={<ChartLegendContent />} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
