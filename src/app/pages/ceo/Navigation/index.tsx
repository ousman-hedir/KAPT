import { CiUser, CiSettings, CiCircleList } from "react-icons/ci";
import { NavBar } from "../../../components";
import { AdminNavigationProps } from "./types";
import { BiEdit, BiTask } from "react-icons/bi";
import { BsEyeFill } from "react-icons/bs";
import { HiHome } from "react-icons/hi";
import { FaRainbow } from "react-icons/fa";
import { GiFarmTractor } from "react-icons/gi";

function CeoNavigation({ onMinimizeToggle }: AdminNavigationProps) {
	const items = [
		{ icon: <HiHome size={24} />, text: "DashBoard", link: "/ceo" },
		{ icon: <CiUser size={24} />, text: "Employees", link: "/ceo/users" },
		{
			icon: <GiFarmTractor size={24} />,
			text: "Farms",
			link: "/ceo/farms",
		},
		{
			icon: <BiTask size={24} />,
			text: "Tasks",
			link: "/ceo/tasks",
		},
		{
			icon: <CiCircleList size={24} />,
			text: "Records",
			link: "/ceo/records",
		},
	];

	return <NavBar items={items} onMinimizeToggle={onMinimizeToggle} />;
}

export default CeoNavigation;
