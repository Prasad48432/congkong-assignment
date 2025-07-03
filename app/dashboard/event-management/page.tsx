"use client";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CalendarClock, Star, ThumbsUp } from "lucide-react";
import React from "react";
import { useDashboardData } from "../context";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { fixedColors } from "@/components/peoplecard";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const EventManagement = () => {
  const { meetings } = useDashboardData();
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:py-6">
          <h1 className="px-6 lg:px-8 font-semibold">Upcoming Events</h1>
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-3 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            {meetings
              .filter((meeting) => meeting.status === "scheduled")
              .map((meeting, idx) => {
                return (
                  <Card key={idx} className="@container/card">
                    <CardHeader>
                      <CardDescription className="text-xs lg:text-sm font-semibold">
                        Regular Meeting
                      </CardDescription>
                      <CardTitle className="text-lg font-semibold tabular-nums @[250px]/card:text-xl flex gap-2 items-center">
                        <CalendarClock className="text-foreground/80 shrink-0" />{" "}
                        Meeting {meeting.participants.name.split(" ")[0]}
                      </CardTitle>
                    </CardHeader>
                    <CardFooter className="items-start gap-1.5 text-xs lg:text-sm">
                      <Avatar className="h-8 w-8 rounded-full cursor-pointer">
                        <AvatarImage src={""} alt={meeting.participants.name} />
                        <AvatarFallback
                          className={`rounded-lg text-xs ${
                            fixedColors[idx > 10 ? idx % 10 : idx]
                          }`}
                        >
                          {meeting.participants.avatar_initial}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">
                          {meeting.participants.name}
                        </span>
                        <span className="text-muted-foreground truncate text-xs">
                          {meeting.participants.id}
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
          </div>
        </div>
        <div className="flex flex-col gap-4 py-4 md:py-6">
          <h1 className="px-6 lg:px-8 font-semibold">Finished Events</h1>
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-3 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            {meetings
              .filter((meeting) => meeting.status === "completed")
              .map((meeting, idx) => {
                return (
                  <Card key={idx} className="@container/card opacity-70">
                    <CardHeader>
                      <CardDescription className="text-xs lg:text-sm font-semibold">
                        Regular Meeting
                      </CardDescription>
                      <CardTitle className="text-lg font-semibold tabular-nums @[250px]/card:text-xl flex gap-2 items-center">
                        <CalendarClock className="text-foreground/80 shrink-0" />{" "}
                        Meeting {meeting.participants.name.split(" ")[0]}
                      </CardTitle>
                      <CardAction>
                        <Badge
                          variant="outline"
                          className={cn(
                            meeting.rating >= 4 &&
                              "border-green-500 bg-green-600 text-foreground",
                            meeting.rating >= 2.5 &&
                              meeting.rating < 4 &&
                              "border-yellow-500 bg-yellow-600 text-foreground",
                            meeting.rating < 2.5 &&
                              "border-red-500 bg-red-600 text-foreground"
                          )}
                        >
                          <Star className="mr-1" />
                          {meeting.rating}
                        </Badge>
                      </CardAction>
                    </CardHeader>
                    <CardFooter className="items-start gap-1.5 text-xs lg:text-sm">
                      <Avatar className="h-8 w-8 rounded-full cursor-pointer">
                        <AvatarImage src={""} alt={meeting.participants.name} />
                        <AvatarFallback
                          className={`rounded-lg text-xs ${
                            fixedColors[idx > 10 ? idx % 10 : idx]
                          }`}
                        >
                          {meeting.participants.avatar_initial}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium flex items-center gap-2">
                          {meeting.participants.name} -{" "}
                          <span className="text-xs flex items-center gap-1">
                            {meeting.satisfaction}%
                            <ThumbsUp size={15} strokeWidth={1.5} className="mb-1" />
                          </span>
                        </span>
                        <span className="text-muted-foreground truncate text-xs">
                          {meeting.participants.id}
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventManagement;
