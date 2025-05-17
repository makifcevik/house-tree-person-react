"use client";

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface InteractiveBarChartProps {
  title: string;
  description: string;
  data: Record<string, any>[];
  dataKeys: {
    key: string;
    label: string;
    color: string;
  }[];
  dateKey: string;
  dateFormatter?: (date: string) => string;
  tooltipLabelFormatter?: (date: string) => string;
}

export function InteractiveVerticalBarChart({
  title,
  description,
  data,
  dataKeys,
  dateKey = "date",
  dateFormatter = (date) => {
    const d = new Date(date);
    return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  },
  tooltipLabelFormatter = (date) => {
    return new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  },
}: InteractiveBarChartProps) {
  const [activeChart, setActiveChart] = React.useState(dataKeys[0].key);

  // Generate chart config from dataKeys
  const chartConfig = React.useMemo(() => {
    const config: Record<string, any> = {
      views: { label: "Views" }, // Default metric label
    };

    dataKeys.forEach(({ key, label, color }) => {
      config[key] = { label, color };
    });

    return config as ChartConfig;
  }, [dataKeys]);

  // Calculate totals for each data key
  const totals = React.useMemo(() => {
    const result: Record<string, number> = {};
    dataKeys.forEach(({ key }) => {
      result[key] = data.reduce((sum, item) => sum + (item[key] || 0), 0);
    });
    return result;
  }, [data, dataKeys]);

  return (
    <Card>
      <CardHeader className='flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row'>
        <div className='flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6'>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </div>
        <div className='flex'>
          {dataKeys.map(({ key, label }) => (
            <button
              key={key}
              data-active={activeChart === key}
              className='relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6 py-4 text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 sm:px-8 sm:py-6'
              onClick={() => setActiveChart(key)}
            >
              <span className='text-xs text-muted-foreground'>{label}</span>
              <span className='text-lg font-bold leading-none sm:text-3xl'>
                {totals[key]?.toLocaleString()}
              </span>
            </button>
          ))}
        </div>
      </CardHeader>
      <CardContent className='px-2 sm:p-6'>
        <ChartContainer config={chartConfig} className='aspect-auto h-[250px] w-full'>
          <BarChart accessibilityLayer data={data} margin={{ left: 12, right: 12 }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey={dateKey}
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={dateFormatter}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className='w-[150px]'
                  nameKey={dataKeys.find((d) => d.key === activeChart)?.label || "value"}
                  labelFormatter={tooltipLabelFormatter}
                />
              }
            />
            <Bar
              dataKey={activeChart}
              fill={dataKeys.find((d) => d.key === activeChart)?.color}
            />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
