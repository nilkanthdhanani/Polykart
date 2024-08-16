import React, { useState } from "react";
import Header from "../common/header";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import "../App.css";

export default function DefaultLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <div>
      <div className="main-layout-body">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-layout-content">
          <Header toggleSidebar={toggleSidebar} />
          <div className="main-layout">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
}
