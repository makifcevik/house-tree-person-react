import React, { useState } from "react";
import Sidebar from "@/components/dashboard/Sidebar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTable } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import BtnThemeToggler from "@/components/buttons/BtnThemeToggler";
import BtnLanguageToggler from "@/components/buttons/BtnLanguageToggler";

const AdminDashboard = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className='flex h-screen'>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <div className='flex-1 transition-all duration-300 ease-in-out py-3 px-2'>
        <Button variant='ghost' onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <FontAwesomeIcon icon={faTable} />
        </Button>
        <div className='absolute flex flex-row space-x-2 top-0 right-0 py-3 px-2'>
          <BtnThemeToggler />
          <BtnLanguageToggler />
        </div>

        <main></main>
      </div>
    </div>
  );
};

export default AdminDashboard;
