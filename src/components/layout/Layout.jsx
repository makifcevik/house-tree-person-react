import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = () => {
  return (
    <div className='relative flex flex-col page-default page-default-colors'>
      <Navbar />
      <div className='overflow-auto'>
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
