"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "@/Components/Sidebar";
import DashboardHeader from "@/Components/DashboardHeader";
import Orders from "../orders/page";
import Profile from "../profile/page";
import Proposals from "../proposals/page";
import Quotations from "../quotations/page";
import Orders1 from "../orders1/page";
import Quotation2 from "../quotations2/page";
import Quotation1 from "../quotations1/page";
import Sales from "../sales/page";
export default function Page() {
  const [isActiveItem, setIsActiveItem] = useState("dashboard");
  const [sidebarWidth, setSidebarWidth] = useState("w-60");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setSidebarWidth("w-0");
      } else {
        setSidebarWidth("w-60");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const getTitle = () => {
    switch (isActiveItem) {
      case "dashboard":
        return "Dashboard";
      case "orders":
        return "Orders";
      case "quotations":
        return "Quotations";
      case "proposals":
        return "Proposals";
      case "profile":
        return "Profile";
      case "orders1":
        return "Orders1";
      case "quotation1":
        return "Quotation1";
      case "quotation2":
        return "Quotation2";
      default:
        return "Dashboard";
    }
  };

  const renderContent = () => {
    switch (isActiveItem) {
      case "dashboard":
        return (
          <div className="m-[2%]">
            <Sales />
          </div>
        );
      case "orders":
        return <Orders />;
      case "quotations":
        return <Quotations />;
      case "proposals":
        return <Proposals />;
      case "profile":
        return <Profile />;
      case "orders1":
        return <Orders1 />;
      case "quotation1":
        return <Quotation1 />;
      case "quotation2":
        return <Quotation2 />;
      default:
        return <div>Dashboard Content</div>;
    }
  };

  return (
    <div className="flex">
      <Sidebar
        className={`fixed top-0 left-0 h-full ${sidebarWidth} transition-all duration-300`}
        isActiveItem={isActiveItem}
        setIsActiveItem={setIsActiveItem} // Pass setIsActiveItem as prop
      />
      <div
        className={`transition-all duration-300`}
        style={{
          marginLeft: sidebarWidth === "w-60" ? "16rem" : "4rem",
          width: `calc(100% - ${sidebarWidth === "w-60" ? "16rem" : "4rem"})`,
        }}
      >
        <DashboardHeader title={getTitle()} />
        {renderContent()}
      </div>
    </div>
  );
}
