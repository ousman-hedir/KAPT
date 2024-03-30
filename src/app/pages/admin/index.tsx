import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminNavigation from "./Navigation";
import AdminDashboard from "./Dashboard";
import Users from "./users";

export default function Admin() {
  const [minimized, setMinimized] = useState(false);

  const handleMinimizeToggle = (
    minimizedState: boolean | ((prevState: boolean) => boolean)
  ) => {
    setMinimized(minimizedState);
  };

  return (
    <div className="flex">
      <AdminNavigation onMinimizeToggle={handleMinimizeToggle} />
      <div>
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
