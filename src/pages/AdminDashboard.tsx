import React, { useEffect, useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import BtnThemeToggler from "@/components/buttons/BtnThemeToggler";
import BtnLanguageToggler from "@/components/buttons/BtnLanguageToggler";
import { HorizontalBarChart } from "@/components/dashboard/HorizontalBarChart";
import { RadialChart } from "@/components/dashboard/RadialChart";
import { InteractiveVerticalBarChart } from "@/components/dashboard/InteractiveVerticalBarChart";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const toggleSidebarOnResize = () => {
    const newWidth = window.innerWidth;
    setWindowWidth(newWidth);

    if (newWidth < 768) {
      setIsSidebarOpen(false);
    } else {
      setIsSidebarOpen(true);
    }
  };

  useEffect(() => {
    toggleSidebarOnResize();

    window.addEventListener("resize", toggleSidebarOnResize);

    return () => {
      window.removeEventListener("resize", toggleSidebarOnResize);
    };
  }, []);

  return (
    <div className='flex'>
      <Sidebar isSidebarOpen={isSidebarOpen} />

      {/* Main content area with margin to account for sidebar */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out py-3 px-2 ${
          isSidebarOpen ? "ml-[240px]" : "ml-0"
        }`}
      >
        <Button
          variant='ghost'
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className={`${isSidebarOpen ? "ml-[0px]" : "ml-10"}`}
        >
          <FontAwesomeIcon icon={faTable} />
        </Button>
        <div className='absolute flex flex-row space-x-2 top-0 right-0 py-3 px-2'>
          <BtnThemeToggler />
          <BtnLanguageToggler />
        </div>

        <main className='flex flex-col'>
          <div className='grid grid-cols-1 lg:grid-cols-2 xl:gap-x-8 gap-x-2 gap-y-5 my-8 mx-10'>
            <HorizontalBarChart />
            <RadialChart />
            <HorizontalBarChart />
            <RadialChart />
            <div className='lg:col-span-2 col-span-1'>
              <InteractiveVerticalBarChart />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
