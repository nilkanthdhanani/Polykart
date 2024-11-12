import React, { useState, useEffect } from "react";
import Header from "../common/header";
import { Outlet } from "react-router-dom";
import Sidebar from "../common/Sidebar";
import "../App.css";

export default function DefaultLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (isSidebarOpen && window.innerWidth < 1024) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => document.body.classList.remove("no-scroll");
  }, [isSidebarOpen]);

  return (
    <>
      <div className="main-layout-body">
        <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        <div className="main-layout-content">
          <Header toggleSidebar={toggleSidebar} />
          <Outlet />
        </div>
      </div>
    </>
  );
}
