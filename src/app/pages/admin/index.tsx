import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminNavigation from "./Navigation";
import AdminDashboard from "./Dashboard";
import Users from "./Users";
import { AdminProps } from "./types";

export default function Admin({ darkMode }: AdminProps) {
  const [minimized, setMinimized] = useState(false);

  const handleMinimizeToggle = (
    minimizedState: boolean | ((prevState: boolean) => boolean)
  ) => {
    setMinimized(minimizedState);
  };

  return (
    <div className="flex">
      <AdminNavigation onMinimizeToggle={handleMinimizeToggle} />
      <div className={` ${darkMode ? "text-white" : "text-black"}`}>
        <Routes>
          <Route path="/" element={<Navigate to="dashboard" />} />
          <Route
            path="dashboard"
            element={<AdminDashboard minimized={minimized} />}
          />
          <Route path="users" element={<Users minimized={minimized} />} />
        </Routes>
      </div>
    </div>
  );
}
