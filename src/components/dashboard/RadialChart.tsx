import { TrendingUp } from "lucide-react";
import { Label, PolarGrid, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/Card";
import { ChartConfig, ChartContainer } from "@/components/ui/chart";

interface RadialChartProps {
  title: string;
  description: string;
  label: string;
  data: { value: number; fill?: string }[];
  trend?: {
    value: string;
    direction: "up" | "down";
  };
  footerText?: string;
}

export function RadialChart({
  title,
  description,
  label,
  data,
  trend,
  footerText,
}: RadialChartProps) {
  // Default chart configuration
  const chartConfig = {
    value: {
      label: label,
      color: "hsl(var(--primary))", // default color
    },
  } satisfies ChartConfig;

  // Calculate total value if multiple data points are provided
  const totalValue = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className='flex flex-col'>
      <CardHeader className='items-center pb-0'>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className='flex-1 pb-0'>
        <ChartContainer
          config={chartConfig}
          className='mx-auto aspect-square max-h-[250px]'
        >
          <RadialBarChart
            data={data}
            startAngle={0}
            endAngle={250}
            innerRadius={80}
            outerRadius={110}
          >
            <PolarGrid
              gridType='circle'
              radialLines={false}
              stroke='none'
              className='first:fill-muted last:fill-card'
              polarRadius={[86, 74]}
            />
            <RadialBar
              dataKey='value'
              background
              cornerRadius={10}
              fill={data[0]?.fill || "hsl(var(--chart-1))"} // Use custom fill or default
            />
            <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
              <Label
                content={({ viewBox }) => {
                  if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                    return (
                      <text
                        x={viewBox.cx}
                        y={viewBox.cy}
                        textAnchor='middle'
                        dominantBaseline='middle'
                      >
                        <tspan
                          x={viewBox.cx}
                          y={viewBox.cy}
                          className='fill-foreground text-4xl font-bold'
                        >
                          {totalValue}
                        </tspan>
                        <tspan
                          x={viewBox.cx}
                          y={(viewBox.cy || 0) + 24}
                          className='fill-muted-foreground'
                        >
                          {label}
                        </tspan>
                      </text>
                    );
                  }
                }}
              />
            </PolarRadiusAxis>
          </RadialBarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col gap-2 text-sm'>
        {trend && (
          <div className='flex items-center gap-2 font-medium leading-none'>
            {trend.direction === "up" ? (
              <>
                Trending up by {trend.value} <TrendingUp className='h-4 w-4' />
              </>
            ) : (
              <>
                Trending down by {trend.value}
                <TrendingUp className='h-4 w-4 transform rotate-180' />
              </>
            )}
          </div>
        )}
        {footerText && (
          <div className='leading-none text-muted-foreground'>{footerText}</div>
        )}
      </CardFooter>
    </Card>
  );
}
