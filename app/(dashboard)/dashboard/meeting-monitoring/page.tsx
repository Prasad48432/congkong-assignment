"use client";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  CalendarClock,
  Clock,
  SignalHigh,
  Users,
} from "lucide-react";
import React, { useState } from "react";
import { useDashboardData } from "../../context";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { AvatarFallback } from "@/components/ui/avatar";
import { fixedColors } from "@/components/peoplecard";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const MeetingMonitoring = () => {
  const { meetings } = useDashboardData();
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:py-6">
          <h1 className="px-8 font-semibold">Ongoing Meetings</h1>
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-3 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            {meetings
              .filter((meeting) => meeting.status === "ongoing")
              .map((meeting, idx) => {
                const [open, setOpen] = useState(false);
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
                      <CardAction>
                        <TooltipProvider delayDuration={0}>
                          <Tooltip open={open}>
                            <TooltipTrigger asChild>
                              <button
                                type="button"
                                className={"cursor-pointer"}
                                onClick={() => setOpen(!open)}
                                onMouseEnter={() => setOpen(true)}
                                onMouseLeave={() => setOpen(false)}
                                onTouchStart={() => setOpen(!open)}
                                onKeyDown={(e) => {
                                  e.preventDefault();
                                  e.key === "Enter" && setOpen(!open);
                                }}
                              >
                                <Badge
                                  variant="outline"
                                  className="cursor-pointer"
                                >
                                  status
                                  <span className="relative w-2 h-2 flex items-center justify-center">
                                    <span className="absolute w-full h-full bg-green-400 rounded-full" />
                                    <span className="absolute w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                                  </span>
                                </Badge>
                              </button>
                            </TooltipTrigger>
                            <TooltipContent className="text-xs font-medium leading-relaxed space-y-1 p-2 bg-popover text-foreground">
                              <p className="flex items-center gap-2">
                                <span className="text-foreground/80">
                                  Status:
                                </span>{" "}
                                Ongoing
                                <span className="relative w-2 h-2 flex items-center justify-center">
                                  <span className="absolute w-full h-full bg-green-400 rounded-full" />
                                  <span className="absolute w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
                                </span>
                              </p>
                              <p className="flex items-center gap-1">
                                <Users size={16} strokeWidth={1.5} />
                                <span className="text-foreground/80">
                                  Participants:
                                </span>{" "}
                                5
                              </p>
                              <p className="flex items-center gap-1">
                                <SignalHigh size={16} strokeWidth={1.5} />
                                <span className="text-foreground/80">
                                  Latency:
                                </span>{" "}
                                ~120ms
                              </p>
                              <p className="flex items-center gap-1">
                                <Clock size={16} strokeWidth={1.5} />
                                <span className="text-foreground/80">
                                  Ends at:
                                </span>{" "}
                                3:30 PM
                              </p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
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
      </div>
    </div>
  );
};

export default MeetingMonitoring;
