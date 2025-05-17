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
  label: string;
  title: string;
  description?: string;
  data: any;
  dataKey: string;
}

export function HorizontalBarChart({ label, title, description, data, dataKey }: Props) {
  const chartConfig = {
    desktop: {
      label: label,
      color: "hsl(var(--chart-1))",
    },
    label: {
      color: "hsl(var(--background))",
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
            <Bar
              dataKey={dataKey}
              layout='vertical'
              fill='var(--color-desktop)'
              radius={4}
            >
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
        <div className='flex gap-2 font-medium leading-none'>
          Trending up by 5.2% this month <TrendingUp className='h-4 w-4' />
        </div>
        <div className='leading-none text-muted-foreground'>
          Showing total visitors for the last 6 months
        </div>
      </CardFooter>
    </Card>
  );
}
