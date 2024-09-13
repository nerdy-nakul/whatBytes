"use client";

import { Circle } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";
import Image from "next/image";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A line chart with dots";

const chartData = [
  { percentile: 0, data: 0 },
  { percentile: 10, data: 8 },
  { percentile: 20, data: 18 },
  { percentile: 25, data: 25 },
  { percentile: 35, data: 33 },
  { percentile: 45, data: 90 },
  { percentile: 50, data: 60 },
  { percentile: 60, data: 88 },
  { percentile: 70, data: 60 },
  { percentile: 75, data: 75 },
  { percentile: 85, data: 83 },
  { percentile: 95, data: 93 },
  { percentile: 100, data: 0 },
];

const chartConfig = {
  data: {
    label: `Your Percentile`,
    color: "hsl(var(--chart-1))",
  },
};

export function LineGraph() {
  return (
    <Card className="border w-full">
      <CardHeader>
        <CardTitle>Comparision Graph</CardTitle>
        <div className="flex justify-between items-center gap-5">
          <p className="">
            You scored 100% percentile which is greater than the average
            percentile 72% of all engineers who took this assessment
          </p>
          <div className=" flex justify-center items-center w-12 h-12 bg-slate-200 rounded-full p-3">
            <Image
              src={
                "https://res.cloudinary.com/debw7vpqa/image/upload/v1721431660/graph_qvhke4.png"
              }
              alt="graph"
              width={20}
              height={20}
            ></Image>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              bottom: 24, // Add margin at the bottom for extra space
            }}
          >
            <XAxis
              dataKey="percentile"
              tickMargin={10}
              padding={{ left: 10, right: 10 }}
              tickFormatter={(value) =>
                [0, 25, 50, 75, 100].includes(value) ? value : ""
              }
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px] ml-[-75px] border-none shadow-none"
                  formatter={(name) => `Your percentile is ${name}`}
                  labelFormatter={() => ""}
                />
              }
            />
            <Line
              dataKey="data"
              type="natural"
              stroke="#d39bf7"
              strokeWidth={1.5}
              dot={({ cx, cy, payload }) => {
                const r = 10;
                return (
                  <Circle
                    key={payload.percentile}
                    x={cx - r / 2}
                    y={cy - r / 2}
                    width={r}
                    height={r}
                    fill="#fff"
                    stroke="#d39bf7"
                  />
                );
              }}
              activeDot={{
                r: 6,
              }}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
