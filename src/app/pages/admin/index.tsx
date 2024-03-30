import { useState } from "react";
import AdminNavigation from "./Navigation";
import AdminDashboard from "./Dashboard";

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
        <AdminDashboard minimized={minimized} />
      </div>
    </div>
  );
}
