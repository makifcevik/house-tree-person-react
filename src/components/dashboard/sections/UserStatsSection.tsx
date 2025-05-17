import React from "react";
import { InteractiveVerticalBarChart } from "../charts/InteractiveVerticalBarChart";
import { chartData1, chartData2, chartDataDayByDay } from "@/constants/data";
import { RadialChart } from "../charts/RadialChart";
import { HorizontalBarChart } from "../charts/HorizontalBarChart";

const UserStatsSection = () => {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-2 xl:gap-x-8 gap-x-2 gap-y-5 my-8 mx-10'>
      <HorizontalBarChart
        title='User Visits'
        description='January, June 2025'
        data={chartData1}
        dataKey='value'
        trend={{ value: "2.4%", direction: "up" }}
        footerText='Showing total visits for the last 6 months'
      />
      <RadialChart
        title='Total Visits'
        description='Last 6 Months'
        label='Visits'
        data={[{ value: 1224 }]}
        trend={{ value: "2.4%", direction: "up" }}
        footerText='Showing total visits for the last 6 months'
      />
      <HorizontalBarChart
        title='User Registeries'
        description='January, June 2025'
        data={chartData2}
        dataKey='value'
        trend={{ value: "100%", direction: "up" }}
        footerText='Showing total registeries for the last 6 months'
      />
      <RadialChart
        title='User Registeries'
        description='Last 6 Months'
        label='Downloads'
        data={[{ value: 298 }]}
        trend={{ value: "100%", direction: "up" }}
        footerText='Showing total registeries for the last 6 months'
      />
      <div className='lg:col-span-2 col-span-1'>
        <InteractiveVerticalBarChart
          title='Website Traffic'
          description='Last 3 Months of Visitor Data'
          data={chartDataDayByDay}
          dataKeys={[
            { key: "visits", label: "Visits", color: "hsl(var(--chart-1))" },
            {
              key: "registeries",
              label: "Registeries",
              color: "hsl(var(--chart-2))",
            },
          ]}
          dateKey='date'
        />
      </div>
    </div>
  );
};

export default UserStatsSection;
