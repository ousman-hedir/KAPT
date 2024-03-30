import { CiUser, CiSettings, CiCircleList } from "react-icons/ci";
import { NavBar } from "../../../components";
import { AdminNavigationProps } from "./types";

function AdminNavigation({ onMinimizeToggle }: AdminNavigationProps) {
  const items = [
    { icon: <CiUser size={24} />, text: "Users", link: "/admin/users" },
    {
      icon: <CiSettings size={24} />,
      text: "System Setup",
      link: "/admin/setup",
    },
    {
      icon: <CiCircleList size={24} />,
      text: "Records",
      link: "/admin/records",
    },
  ];

  return <NavBar items={items} onMinimizeToggle={onMinimizeToggle} />;
}

export default AdminNavigation;
