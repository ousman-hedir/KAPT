import { CiUser, CiSettings, CiCircleList } from "react-icons/ci";
import { NavBar } from "../../../components";
import { AdminNavigationProps } from "./types";
import { BiEdit } from "react-icons/bi";
import { HiHome } from "react-icons/hi";

function GFMNavigation({ onMinimizeToggle }: AdminNavigationProps) {
	const items = [
		{ icon: <HiHome size={24} />, text: "DashBoard", link: "/gfm" },
		{
			icon: <CiUser size={24} />,
			text: "Farms",
			link: "/gfm/farms",
		},
		{
			icon: <BiEdit size={24} />,
			text: "Tasks",
			link: "/gfm/tasks",
		},
		{
			icon: <CiSettings size={24} />,
			text: "System Setup",
			link: "/gfm/setup",
		},
		{
			icon: <CiCircleList size={24} />,
			text: "Records",
			link: "/gfm/records",
		},
	];

	return <NavBar items={items} onMinimizeToggle={onMinimizeToggle} />;
}

export default GFMNavigation;
