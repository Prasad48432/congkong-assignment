import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const fixedColors = [
  "bg-yellow-400 text-white",
  "bg-violet-600 text-white",
  "bg-green-600 text-white",
  "bg-black text-white",
  "bg-zinc-700 text-white",
  "bg-emerald-500 text-white",
  "bg-blue-600 text-white",
  "bg-indigo-600 text-white",
  "bg-lime-600 text-white",
  "bg-rose-600 text-white",
];

const PeopleCard = ({
  participants,
  meetings,
}: {
  participants: Participant[];
  meetings: any;
}) => {
  const matchingTop5 =
    participants
      ?.filter((p) => p.profile_status === "complete")
      .sort(
        (a, b) =>
          new Date(b.last_active_at).getTime() -
          new Date(a.last_active_at).getTime()
      )
      .slice(0, 5)
      .map((p, idx) => ({
        name: p.name,
        initial: p.avatar_initial,
        color: fixedColors[idx % fixedColors.length],
      })) ?? [];

  const meetingInAnticipation =
    meetings
      ?.sort(
        (a: any, b: any) =>
          new Date(a.scheduled_at).getTime() -
          new Date(b.scheduled_at).getTime()
      )
      .slice(0, 5)
      .map((m: any, idx: number) => ({
        name: m.participants.name,
        initial: m.participants.avatar_initial,
        color: fixedColors[(idx+5) % fixedColors.length],
      })) ?? [];

  return (
    <Card className="w-full lg:w-[25%] h-fit flex flex-col gap-4 items-start justify-center px-6">
      <div className="space-y-6 w-full">
        <div>
          <h3 className="font-semibold mb-2">Matching TOP 5</h3>
          <ul className="space-y-2">
            {matchingTop5.map((person, index) => (
              <li
                key={index}
                className="cursor-pointer flex items-center pl-2 rounded-md py-0.5 gap-2 text-sm transition hover:bg-secondary w-full"
              >
                <span className="w-4">{index + 1}.</span>
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${person.color}`}
                >
                  {person.initial}
                </span>
                <span className="truncate">{person.name}</span>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="font-semibold mb-2">Meeting in Anticipation</h3>
          <ul className="space-y-2">
            {meetingInAnticipation.map((person: any, index: number) => (
              <li
                key={index}
                className="cursor-pointer flex items-center pl-2 rounded-md py-0.5 gap-2 text-sm transition hover:bg-secondary w-full"
              >
                <span className="w-4">{index + 1}.</span>
                <span
                  className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-semibold ${person.color}`}
                >
                  {person.initial}
                </span>
                <span className="truncate">{person.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Card>
  );
};

export default PeopleCard;
