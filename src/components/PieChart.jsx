"use client";

import * as React from "react";
import { Pie, PieChart as RechartsPieChart } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import Image from "next/image";

const chartConfig = {
  visitors: {
    label: "Visitors",
    color: "",
  },
  chrome: {
    label: "Chrome",
  },
};

export function PieChart({ score }) {

  const chartData = [
    { browser: "chrome", visitors: score, fill: "rgb(37 99 235)" },
    { browser: "other", visitors: 15 - score, fill: "rgb(191 225 250)" },
  ];


  const totalVisitors = React.useMemo(() => {
    return chartData.reduce((acc, curr) => acc + curr.visitors, 0);
  }, [score]);

  return (
    <div className="border rounded-lg p-10 mt-5">
      <div className="flex justify-between">
        <p className="font-bold text-lg">Question Analysis</p>
        <p className="text-lg text-blue-700 font-bold">{`${score}/${totalVisitors}`}</p>
      </div>
      <p className="text-gray-600 mt-2">
        <span className="font-bold">
          You scored {score} questions correct out of 15.
        </span>{" "}
        However it still needs some improvements
      </p>
      <Card className="flex flex-col">
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="mx-auto aspect-square max-h-[250px] relative"
          >
            <RechartsPieChart>
              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent hideLabel />}
              />
              <Pie
                data={chartData}
                dataKey="visitors"
                nameKey="browser"
                innerRadius={65}
                strokeWidth={5}
              />
            </RechartsPieChart>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={
                  "https://res.cloudinary.com/dcvjujoc3/image/upload/v1721474405/vmcf9eaemmx7wis6aewt.jpg"
                }
                alt="dart"
                width={90}
                height={90}
                className="rounded-full mt-1 ml-2"
              />
            </div>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
