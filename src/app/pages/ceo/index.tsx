import { useState } from "react";
import { CeoProps } from "./types";
import CeoNavigation from "./Navigation";
import { Navigate, Route, Routes } from "react-router-dom";
import CeoDashboard from "./Dashboard";

function Ceo({ darkMode }: CeoProps) {
	const [minimized, setMinimized] = useState(false);

	const handleMinimizeToggle = (
		minimizedState: boolean | ((prevState: boolean) => boolean)
	) => {
		setMinimized(minimizedState);
	};
	return (
		<div className="flex">
			<CeoNavigation onMinimizeToggle={handleMinimizeToggle} />
			<div className={` ${darkMode ? "text-white" : "text-black"}`}>
				<Routes>
					<Route path="/" element={<CeoDashboard minimized={minimized} />} />
				</Routes>
			</div>
		</div>
	);
}

export default Ceo;
