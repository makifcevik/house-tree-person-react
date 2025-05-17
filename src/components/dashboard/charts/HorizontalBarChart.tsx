import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, LabelList, XAxis, YAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

interface Props {
  title: string;
  description?: string;
  data: any;
  dataKey: string;
  trend?: {
    value: string;
    direction: "up" | "down";
  };
  footerText?: string;
}

export function HorizontalBarChart({
  title,
  description,
  data,
  dataKey,
  trend,
  footerText,
}: Props) {
  const chartConfig = {
    bar: {
      color: "hsl(var(--chart-1))",
    },
  } satisfies ChartConfig;

  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart
            accessibilityLayer
            data={data}
            layout='vertical'
            margin={{
              right: 16,
            }}
          >
            <CartesianGrid horizontal={false} />
            <YAxis
              dataKey='month'
              type='category'
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
              hide
            />
            <XAxis dataKey={dataKey} type='number' hide />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator='line' />}
            />
            <Bar dataKey={dataKey} layout='vertical' fill='var(--color-bar)' radius={4}>
              <LabelList
                dataKey='month'
                position='insideLeft'
                offset={8}
                className='fill-foreground'
                fontSize={12}
              />
              <LabelList
                dataKey={dataKey}
                position='right'
                offset={8}
                className='fill-foreground'
                fontSize={12}
              />
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className='flex-col items-start gap-2 text-sm'>
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
