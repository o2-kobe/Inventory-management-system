import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import type { ChartConfig } from "@/components/ui/chart";

export const description =
  "A bar chart showing devices across Ghana's 16 regions";

// Hardcoded data for all 16 regions of Ghana
const chartData = [
  { region: "G-Accra", devices: 920 },
  { region: "Ashanti", devices: 860 },
  { region: "Eastern", devices: 610 },
  { region: "Western", devices: 540 },
  { region: "Central", devices: 470 },
  { region: "Northern", devices: 750 },
  { region: "U-East", devices: 310 },
  { region: "U-West", devices: 295 },
  { region: "Volta", devices: 520 },
  { region: "Oti", devices: 340 },
  { region: "Western North", devices: 410 },
  { region: "Bono", devices: 480 },
  { region: "Bono East", devices: 450 },
  { region: "Ahafo", devices: 365 },
  { region: "Nor-East", devices: 275 },
  { region: "Savannah", devices: 325 },
];

const chartConfig = {
  devices: {
    label: "Devices",
    color: "var(--chart-2)",
  },
} satisfies ChartConfig;

export function ChartBarLabel() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Device Distribution by Region</CardTitle>
        <CardDescription>
          Across courts within all 16 regions of Ghana
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={chartData}
            margin={{
              top: 20,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="region"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) =>
                value.length > 10 ? value.slice(0, 10) + "…" : value
              }
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Bar dataKey="devices" fill="var(--color-devices)" radius={8}>
              <LabelList
                dataKey="devices"
                position="top"
                offset={12}
                className="fill-foreground"
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 leading-none font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <div className="text-muted-foreground leading-none">
          Showing total device counts across courts within Ghana’s 16 regions
        </div>
      </CardFooter>
    </Card>
  );
}
