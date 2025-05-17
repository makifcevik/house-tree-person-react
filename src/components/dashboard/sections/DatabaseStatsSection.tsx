import React from "react";
import { InteractiveVerticalBarChart } from "../charts/InteractiveVerticalBarChart";
import { chartData3, downloadDataDayByDay } from "@/constants/data";
import { RadialChart } from "../charts/RadialChart";
import { HorizontalBarChart } from "../charts/HorizontalBarChart";

const DatabaseStatsSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:gap-x-8 gap-x-2 gap-y-5 my-8 mx-10'>
      <HorizontalBarChart
        title='Database Downloads'
        description='January, June 2025'
        data={chartData3}
        dataKey='value'
        trend={{ value: "21.4%", direction: "up" }}
        footerText='Showing total database downloads for the last 6 months'
      />
      <RadialChart
        title='Total Database Downloads'
        description='Last 6 Months'
        label='Downloads'
        data={[{ value: 92 }]}
        trend={{ value: "21.4%", direction: "up" }}
        footerText='Showing total database downloads for the last 6 months'
      />
      <div className='lg:col-span-2 col-span-1'>
        <InteractiveVerticalBarChart
          title='Database Downloads'
          description='Last 3 Months of Database Downloads Data'
          data={downloadDataDayByDay}
          dataKeys={[
            { key: "downloads", label: "Downloads", color: "hsl(var(--chart-1))" },
          ]}
          dateKey='date'
        />
      </div>
    </div>
  );
};

export default DatabaseStatsSection;
