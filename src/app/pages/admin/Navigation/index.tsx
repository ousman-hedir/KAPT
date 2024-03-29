
import { CiUser, CiSettings, CiCircleList } from "react-icons/ci";
import { NavBar } from "../../../components";

function AdminNavigation() {
  const items = [
    { icon: <CiUser size={24} />, text: "Users" },
    { icon: <CiSettings size={24} />, text: "System Setup" },
    { icon: <CiCircleList size={24} />, text: "Records", link:'/records' },
  ];

  return <NavBar items={items} />;
}

export default AdminNavigation;
