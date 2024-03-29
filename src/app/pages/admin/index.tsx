import AdminNavigation from "./Navigation";
import { Header } from "../../components";
import AdminDashboard from "./Dashboard";

export default function Admin() {
  return (
    <div>
      <div className="w-full flex">
        <AdminNavigation />
        <div className="w-full flex flex-col">
          <Header />
          <AdminDashboard />
        </div>
      </div>
    </div>
  );
}
