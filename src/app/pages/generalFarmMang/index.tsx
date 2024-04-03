import { useState } from "react";
import { GFMProps } from "./types";
import GFMNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
import GFMDashboard from "./Dashboard";
import Farms from "./Farms";

function GFM({ darkMode }: GFMProps) {
	const [minimized, setMinimized] = useState(false);

	const handleMinimizeToggle = (
		minimizedState: boolean | ((prevState: boolean) => boolean)
	) => {
		setMinimized(minimizedState);
	};

	return (
		<div className="flex">
			<GFMNavigation onMinimizeToggle={handleMinimizeToggle} />
			<div className={` ${darkMode ? "text-white" : "text-black"}`}>
				<Routes>
					<Route path="/" element={<Navigate to="dashboard" />} />
					<Route
						path="dashboard"
						element={<GFMDashboard minimized={minimized} />}
					/>
					<Route path="farms" element={<Farms minimized={minimized} />} />
				</Routes>
			</div>
		</div>
	);
}

export default GFM;
