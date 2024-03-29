import { useState } from "react";
import AdminNavigation from "./Navigation";
import { Header } from "../../components";
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
        <Header />
        <AdminDashboard minimized={minimized} />
      </div>
    </div>
  );
}
