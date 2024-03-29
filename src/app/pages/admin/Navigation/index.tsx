import { CiUser, CiSettings, CiCircleList } from "react-icons/ci";
import { NavBar } from "../../../components";
import { AdminNavigationProps } from "./types";

function AdminNavigation({ onMinimizeToggle }: AdminNavigationProps) {
  const items = [
    { icon: <CiUser size={24} />, text: "Users" },
    { icon: <CiSettings size={24} />, text: "System Setup" },
    { icon: <CiCircleList size={24} />, text: "Records", link: "/records" },
  ];

  return <NavBar items={items} onMinimizeToggle={onMinimizeToggle} />;
}

export default AdminNavigation;
