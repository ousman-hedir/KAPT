import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminNavigation from "./Navigation";
import AdminDashboard from "./Dashboard";
import Users from "./Users";
import { AdminProps } from "./types";
import SopManipulation from "./SopManipulation";
import SopDetails from "./SopManipulation/SopDetails";
import UserDetails from "./UserDetails/UserDetails";
import SetUp from "./SetUp";

export default function Admin({ darkMode }: AdminProps) {
	const [minimized, setMinimized] = useState(false);

	const handleMinimizeToggle = (
		minimizedState: boolean | ((prevState: boolean) => boolean)
	) => {
		setMinimized(minimizedState);
	};

	return (
		<div className="flex">
			<AdminNavigation onMinimizeToggle={handleMinimizeToggle} />
			<div className={` ${darkMode ? "text-white" : "text-black"}`}>
				<Routes>
					<Route path="/" element={<Navigate to="dashboard" />} />
					<Route
						path="dashboard"
						element={<AdminDashboard minimized={minimized} />}
					/>
					<Route path="users" element={<Users minimized={minimized} />} />
					<Route
						path="users/:userId"
						element={<UserDetails minimized={minimized} />}
					/>
					<Route path="setup" element={<SetUp minimized={minimized} />} />
					<Route
						path="/setup/sop"
						element={<SopManipulation minimized={minimized} />}
					/>
					<Route
						path="sop/sopDetails"
						element={<SopDetails minimized={minimized} />}
					/>
				</Routes>
			</div>
		</div>
	);
}
