"use client";

import React, { useState, useEffect } from "react";
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
  const [chartData, setChartData] = useState([]);

  useEffect(() => {
    console.log("Updating chart data with score:", score); // Log score to verify it's being updated
    const updatedData = [
      { browser: "chrome", visitors: Number(score), fill: "rgb(37 99 235)" },
      { browser: "other", visitors: 15 - score, fill: "rgb(191 225 250)" },
    ];
    setChartData(updatedData);
  }, [score]);

  // console.log(chartData);

  return (
    <div
      key={score}
      className="border rounded-lg p-4 md:p-6 lg:p-10 mt-4 md:mt-5"
    >
      <div className="flex flex-col md:flex-row justify-between">
        <p className="font-bold text-lg text-center md:text-left">
          Question Analysis
        </p>
        <p className="text-lg text-blue-700 font-bold text-center md:text-left">
          {`${score}/15`}
        </p>
      </div>
      <p className="text-gray-600 mt-2 text-center md:text-left">
        <span className="font-bold">
          You scored {score} questions correct out of 15.
        </span>{" "}
        However, it still needs some improvements.
      </p>
      <Card className="flex flex-col">
        <CardContent className="flex-1 pb-0">
          <ChartContainer
            config={chartConfig}
            className="relative mx-auto aspect-square max-h-[250px] w-full"
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
                innerRadius={60}
                strokeWidth={5}
              />
            </RechartsPieChart>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={
                  "https://res.cloudinary.com/dcvjujoc3/image/upload/v1721474405/vmcf9eaemmx7wis6aewt.jpg"
                }
                alt="dart"
                width={70}
                height={70}
                className="rounded-full"
              />
            </div>
          </ChartContainer>
        </CardContent>
      </Card>
    </div>
  );
}
