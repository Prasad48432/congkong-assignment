import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { SquareSlash } from "lucide-react";
import React from "react";

const MatchingTracker = () => {
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:py-6">
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-3 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            <Card className="@container/card">
              <CardHeader>
                <CardDescription className="text-xs lg:text-sm font-semibold">
                  Regular Meeting
                </CardDescription>
                <CardTitle className="text-lg font-semibold tabular-nums @[250px]/card:text-xl flex gap-2 items-center">
                  <SquareSlash className="text-foreground/80 shrink-0" /> 160
                  Matches
                </CardTitle>
              </CardHeader>
              <CardFooter className="items-start gap-1.5 text-xs lg:text-sm">
                Credits left: 200
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchingTracker;
