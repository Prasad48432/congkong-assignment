"use client";
import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useDashboardData } from "../context";

const Reports = () => {
  const { activity } = useDashboardData();
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="px-4 lg:px-6 py-6">
          <h1 className="text-lg font-semibold py-2 lg:py-4">Logs last 30 Hours</h1>
          <Table className="overflow-hidden rounded-lg border">
            <TableHeader className="bg-muted sticky top-0 z-10">
              <TableRow>
                <TableHead>Time</TableHead>
                <TableHead>Matches</TableHead>
                <TableHead>Meetings</TableHead>
                <TableHead>Logins</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {activity.map((activity) => (
                <TableRow key={activity.id}>
                  <TableCell>{activity.timestamp}</TableCell>
                  <TableCell className="font-medium">
                    {activity.matches}
                  </TableCell>
                  <TableCell>{activity.meetings}</TableCell>
                  <TableCell>{activity.participant_logins}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Reports;
