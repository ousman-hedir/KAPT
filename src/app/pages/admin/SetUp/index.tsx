import { Link } from "react-router-dom";
import Button from "../../../components/Button";
import { AdminDashboardProps } from "../Dashboard/types";

function SetUp({ minimized }: AdminDashboardProps) {
	return (
		<div
			className={`container pb-5 mx-auto p-4 mb-10 bg-lightGreen ${
				minimized ? "lg:w-[90%]" : "lg:w-[80%]"
			} items-center h-screen mt-16 right-0 fixed  overflow-y-auto transition-all duration-500 ease-in`}
		>
			<div className="flex gap-5">
				<Link to="/sop">
					<Button>SOP Manipulation</Button>
				</Link>
				<Link to="/variation">
				
					<Button>Variation SetUp</Button>
				</Link>
			</div>
		</div>
	);
}

export default SetUp