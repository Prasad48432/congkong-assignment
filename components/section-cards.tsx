import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Equal,
  EqualApproximately,
  MonitorPlay,
  Puzzle,
  Star,
  ThumbsUp,
  UserCheck,
  Users,
} from "lucide-react";

export function SectionCards({
  participants,
  meetings,
}: {
  participants: Participant[];
  meetings: Meeting[];
}) {
  const twoDaysAgo = new Date(Date.now() - 2 * 24 * 60 * 60 * 1000);

  const activeInLast2Days = participants.filter((participant) => {
    const lastActive = new Date(participant.last_active_at);
    return lastActive >= twoDaysAgo;
  });

  const ratingAvg = (
    meetings.reduce((acc, cur) => acc + (cur.rating ?? 0), 0) / meetings.length
  ).toFixed(1);

  const satisfactionAvg = Math.round(
    meetings.reduce((acc, cur) => acc + (cur.satisfaction ?? 0), 0) /
      meetings.length
  );

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-3 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-6">
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-semibold">
            Total Participants
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl flex gap-2 items-center">
            <Users className="text-foreground/80" /> {participants.length}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Trending up <IconTrendingUp className="size-4 text-green-300" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-semibold">
            Real-Time Identified
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl flex items-center gap-1">
            <UserCheck className="text-foreground/80 mr-1" />
            {activeInLast2Days.length}{" "}
            <span className="text-sm flex items-center text-foreground/80">
              <EqualApproximately />{" "}
              {Math.round(
                (activeInLast2Days.length / participants.length) * 100
              )}
              %
            </span>
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Down 5% <IconTrendingDown className="size-4 text-destructive" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-semibold">
            Total Matches
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl flex gap-2 items-center">
            <Puzzle className="text-foreground/80" />
            160
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong retention{" "}
            <IconTrendingUp className="size-4 text-green-300" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-semibold">
            Avg Satistfaction
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl flex items-center gap-2">
            <ThumbsUp className="text-foreground/80" /> {satisfactionAvg}%
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Steady increase <IconTrendingUp className="size-4 text-green-300" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-semibold">
            Total Meetings
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl flex items-center gap-2">
            <MonitorPlay className="text-foreground/80" /> {meetings.length}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Breakeven <Equal className="size-4 text-yellow-200" />
          </div>
        </CardFooter>
      </Card>
      <Card className="@container/card">
        <CardHeader>
          <CardDescription className="font-semibold">
            Peak Rating
          </CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl flex gap-2 items-center">
            <Star className="text-foreground/80" /> {ratingAvg}
          </CardTitle>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Slight Pickup <IconTrendingUp className="size-4 text-green-300" />
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
