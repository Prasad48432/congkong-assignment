import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const rankings = {
  "Matching ing TOP 5": [
    { name: "Yeon He Eun", initial: "F", color: "bg-yellow-400 text-white" },
    { name: "Yoon Ji Soo", initial: "V", color: "bg-violet-600 text-white" },
    { name: "Kang Seo Youn", initial: "C", color: "bg-green-600 text-white" },
    { name: "Cho Do Yeon", initial: "C", color: "bg-black text-white" },
    { name: "Jo Seo Yeon", initial: "J", color: "bg-zinc-700 text-white" },
  ],
  "Meeting in Anticipation": [
    {
      name: "Choi Seo Youn",
      initial: "AI",
      color: "bg-emerald-500 text-white",
    },
    { name: "Kang Min Joon", initial: "N", color: "bg-blue-600 text-white" },
    { name: "Lim Seo Youn", initial: "S", color: "bg-indigo-600 text-white" },
    { name: "Jeong Do Youn", initial: "U", color: "bg-lime-600 text-white" },
  ],
};

const PeopleCard = () => {
  return (
    <Card className="w-full lg:w-[25%] h-full flex flex-col gap-4 items-start justify-center px-6">
      <div className="space-y-6 w-full">
        {Object.entries(rankings).map(([title, list]) => (
          <div key={title}>
            <h3 className="font-semibold mb-2">{title}</h3>
            <ul className="space-y-2">
              {list.map((person, index) => (
                <li key={index} className="cursor-pointer flex items-center pl-2 rounded-md py-0.5 gap-2 text-sm transition hover:bg-secondary w-full">
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
        ))}
      </div>
    </Card>
  );
};

export default PeopleCard;
