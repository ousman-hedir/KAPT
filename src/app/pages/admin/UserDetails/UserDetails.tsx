import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import { AdminDashboardProps } from "../Dashboard/types";

function UserDetails({ minimized }: AdminDashboardProps) {
	const { userId } = useParams();
	console.log(userId);

	return (
		<div
			className={`container pb-5 mx-auto p-4 mb-10 bg-lightGreen ${
				minimized ? "lg:w-[90%]" : "lg:w-[80%]"
			} items-center h-screen mt-16 right-0 fixed  overflow-y-auto transition-all duration-500 ease-in`}
		>
			<div className="container mx-auto p-4">
				<div className="flex  items-center justify-between mb-4">
					<h2 className="text-lg font-bold">Employee Details</h2>
					<Link to="/admin/users" className="text-blue-500 me-10 font-bold flex" >
						<FaArrowLeft size={20} className="me-2"/>
						Back 
					</Link>
				</div>
				<div className="bg-white shadow-lg rounded-md p-4">
					<h1>use id is {userId}</h1>
				</div>
			</div>
		</div>
	);
}

export default UserDetails;
