"use client";
import React from "react";
import { useDashboardData } from "../context";
import { Card, CardFooter } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { fixedColors } from "@/components/peoplecard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const ParticipantsPage = () => {
  const { participants } = useDashboardData();
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <Tabs defaultValue="active" className="w-full py-4">
          <TabsList className="mx-4 lg:mx-6 my-4">
            <TabsTrigger className="text-sm lg:text-base" value="active">
              Active{" "}
              <span className="relative w-2 h-2 flex items-center justify-center">
                <span className="absolute w-full h-full bg-green-400 rounded-full" />
                <span className="absolute w-full h-full bg-green-400 rounded-full opacity-75 animate-ping" />
              </span>
            </TabsTrigger>
            <TabsTrigger className="text-sm lg:text-base" value="inactive">
              Inactive
              <span className="relative w-2 h-2 flex items-center justify-center">
                <span className="absolute w-full h-full bg-red-400 rounded-full" />
                <span className="absolute w-full h-full bg-red-400 rounded-full opacity-75 animate-ping" />
              </span>
            </TabsTrigger>
          </TabsList>
          <TabsContent value="active">
            <div className="grid grid-cols-2 gap-3 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
              {participants
                .filter((p) => p.profile_status === "complete")
                .map((participant, idx) => (
                  <Card key={idx} className="@container/card py-3 md:py-6">
                    <CardFooter className="items-start gap-1.5 text-xs lg:text-sm px-3 md:px-6">
                      <Avatar className="h-8 w-8 rounded-full cursor-pointer">
                        <AvatarImage src="" alt={participant.name} />
                        <AvatarFallback
                          className={`rounded-lg text-xs ${
                            fixedColors[idx > 10 ? idx % 10 : idx]
                          }`}
                        >
                          {participant.avatar_initial}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">
                          {participant.name}
                        </span>
                        <span className="text-muted-foreground truncate text-xs">
                          {participant.id}
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
          <TabsContent value="inactive">
            <div className="grid grid-cols-2 gap-3 px-4 lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
              {participants
                .filter((p) => p.profile_status === "incomplete")
                .map((participant, idx) => (
                  <Card
                    key={idx}
                    className="@container/card py-3 md:py-6 opacity-70"
                  >
                    <CardFooter className="items-start gap-1.5 text-xs lg:text-sm px-3 md:px-6">
                      <Avatar className="h-8 w-8 rounded-full cursor-pointer">
                        <AvatarImage src="" alt={participant.name} />
                        <AvatarFallback
                          className={`rounded-lg text-xs ${
                            fixedColors[idx > 10 ? idx % 10 : idx]
                          }`}
                        >
                          {participant.avatar_initial}
                        </AvatarFallback>
                      </Avatar>
                      <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-medium">
                          {participant.name}
                        </span>
                        <span className="text-muted-foreground truncate text-xs">
                          {participant.id}
                        </span>
                      </div>
                    </CardFooter>
                  </Card>
                ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default ParticipantsPage;
