"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AIMatchingSettings = () => {
  const [selectedModel, setSelectedModel] = useState("gpt-4o");

  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:py-6">
          <div className="px-6 lg:px-8">
            <h1 className="text-2xl font-semibold">AI Matching Settings</h1>
            <p className="text-muted-foreground mt-1">
              Configure how AI assists in smart matching and recommendations.
            </p>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>AI Model</CardTitle>
                <CardDescription>
                  Choose the AI model used for smart decisioning and matches.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Select value={selectedModel} onValueChange={setSelectedModel}>
                  <SelectTrigger className="w-[250px]">
                    <SelectValue placeholder="Select a model" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gpt-4o">GPT-4o (OpenAI)</SelectItem>
                    <SelectItem value="gpt-3.5">GPT-3.5 Turbo</SelectItem>
                    <SelectItem value="gemini-pro">Gemini 1.5 Flash</SelectItem>
                    <SelectItem value="o3">Claude 3 Opus (O3)</SelectItem>
                    <SelectItem value="grok">Grok (X AI)</SelectItem>
                  </SelectContent>
                </Select>

                <div className="mt-4 text-sm text-muted-foreground">
                  The selected model will power matching algorithms.
                </div>

                <Button className="mt-6" variant="default">
                  Update preferences
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIMatchingSettings;
