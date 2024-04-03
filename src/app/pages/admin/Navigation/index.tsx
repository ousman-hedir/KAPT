import { CiUser, CiSettings, CiCircleList } from "react-icons/ci";
import { NavBar } from "../../../components";
import { AdminNavigationProps } from "./types";
import { BiEdit } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

function AdminNavigation({ onMinimizeToggle }: AdminNavigationProps) {
  const items = [
		{ icon: <HiHome size={24} />, text: "DashBoard", link: "/admin" },
		{ icon: <CiUser size={24} />, text: "Users", link: "/admin/users" },
		{
			icon: <BiEdit size={24} />,
			text: "SOP",
			link: "/admin/sop",
		},
		{
			icon: <CiSettings size={24} />,
			text: "setup",
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
