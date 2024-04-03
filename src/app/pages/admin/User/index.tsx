import React, { useState } from "react";
import {
	FaChevronLeft,
	FaChevronRight,
	FaEye,
	FaPlusCircle,
} from "react-icons/fa";
import AddUserForm from "./AddUserForm";
import { AdminDashboardProps } from "../Dashboard/types";
import { Link } from "react-router-dom";

function Users({ minimized }: AdminDashboardProps) {
	// User List
	const [users, setUsers] = useState([
		{
			id: 1,
			name: "Abebe Kebede",
			email: "abebe@example.com",
			role: "Developer",
			phone: "+251911234567",
			startDate: "2023-01-15",
		},
		{
			id: 2,
			name: "Meseret Tadesse",
			email: "meseret@example.com",
			role: "Designer",
			phone: "+251922345678",
			startDate: "2023-02-20",
		},
		{
			id: 3,
			name: "Yohannes Assefa",
			email: "yohannes@example.com",
			role: "Manager",
			phone: "+251933456789",
			startDate: "2023-03-25",
		},
		{
			id: 4,
			name: "Sara Solomon",
			email: "sara@example.com",
			role: "Administrator",
			phone: "+251944567890",
			startDate: "2023-04-30",
		},
		{
			id: 5,
			name: "John Doe",
			email: "john.doe@example.com",
			role: "Developer",
			phone: "+1234567890",
			startDate: "2023-05-15",
		},
		{
			id: 6,
			name: "Jane Smith",
			email: "jane.smith@example.com",
			role: "Designer",
			phone: "+0987654321",
			startDate: "2023-06-20",
		},
		{
			id: 7,
			name: "Michael Johnson",
			email: "michael.johnson@example.com",
			role: "Manager",
			phone: "+9876543210",
			startDate: "2023-07-25",
		},
		{
			id: 8,
			name: "Emily Williams",
			email: "emily.williams@example.com",
			role: "Administrator",
			phone: "+0123456789",
			startDate: "2023-08-30",
		},
		{
			id: 9,
			name: "Daniel Brown",
			email: "daniel.brown@example.com",
			role: "Developer",
			phone: "+5432109876",
			startDate: "2023-09-15",
		},
		{
			id: 10,
			name: "Olivia Garcia",
			email: "olivia.garcia@example.com",
			role: "Designer",
			phone: "+6789012345",
			startDate: "2023-10-20",
		},
		{
			id: 11,
			name: "Matthew Martinez",
			email: "matthew.martinez@example.com",
			role: "Manager",
			phone: "+3456789012",
			startDate: "2023-11-25",
		},
		{
			id: 12,
			name: "Emma Taylor",
			email: "emma.taylor@example.com",
			role: "Administrator",
			phone: "+8901234567",
			startDate: "2023-12-30",
		},
		{
			id: 13,
			name: "William Rodriguez",
			email: "william.rodriguez@example.com",
			role: "Developer",
			phone: "+9876543210",
			startDate: "2024-01-15",
		},
		{
			id: 14,
			name: "Sophia Martinez",
			email: "sophia.martinez@example.com",
			role: "Designer",
			phone: "+1234567890",
			startDate: "2024-02-20",
		},
		{
			id: 15,
			name: "Liam Brown",
			email: "liam.brown@example.com",
			role: "Manager",
			phone: "+0987654321",
			startDate: "2024-03-25",
		},
		{
			id: 16,
			name: "Isabella Garcia",
			email: "isabella.garcia@example.com",
			role: "Administrator",
			phone: "+9876543210",
			startDate: "2024-04-30",
		},
		{
			id: 17,
			name: "James Johnson",
			email: "james.johnson@example.com",
			role: "Developer",
			phone: "+0123456789",
			startDate: "2024-05-15",
		},
	]);
	// user list end
	const [showForm, setShowForm] = useState(false);
	const [currentPage, setCurrentPage] = useState(1);
	const usersPerPage = 10;

	const usersToShow = users.slice(
		(currentPage - 1) * usersPerPage,
		currentPage * usersPerPage
	);

	const handleAddEmployee = (newEmployee) => {
		setUsers([...users, { id: users.length + 1, ...newEmployee }]);
		setShowForm(false);
	};

	const totalPages = Math.ceil(users.length / usersPerPage);

	return (
		<div
			className={`container pb-5 mx-auto p-4 mb-10 bg-lightGreen ${
				minimized ? "lg:w-[90%]" : "lg:w-[80%]"
			} items-center h-screen mt-16 right-0 fixed  overflow-y-auto transition-all duration-500 ease-in`}
		>
			<h1 className="text-2xl font-bold mb-6">Employee Management</h1>
			{!showForm && (
				<button
					onClick={() => setShowForm(true)}
					className="text-[white] p-2 mb-6 flex bg-[#d7a022] rounded-lg hover:bg-[#3b3bf7]"
				>
					Add New Employee
					<FaPlusCircle size={30} className="ms-1 pt-1" />
				</button>
			)}
			{showForm && (
				<AddUserForm
					onSubmit={handleAddEmployee}
					onCancel={() => setShowForm(false)}
				/>
			)}
			<table className="w-full border-collapse border border-gray-300">
				<thead className="bg-gray-100">
					<tr>
						<th className="px-4 py-2">ID</th>
						<th className="px-4 py-2">Name</th>
						<th className="px-4 py-2">Email</th>
						<th className="px-4 py-2">Role</th>
						<th className="px-4 py-2">Phone</th>
						<th className="px-4 py-2">Start Date</th>
						<th className="px-4 py-2">Actions</th>
					</tr>
				</thead>
				<tbody>
					{usersToShow.map((user, index) => (
						<tr key={user.id} className={index % 2 !== 0 ? "bg-gray-50" : ""}>
							<td className="px-4 py-2">{user.id}</td>
							<td className="px-4 py-2">{user.name}</td>
							<td className="px-4 py-2">{user.email}</td>
							<td className="px-4 py-2">{user.role}</td>
							<td className="px-4 py-2">{user.phone}</td>
							<td className="px-4 py-2">{user.startDate}</td>
							<td className="px-4 py-2">
								<Link to={`/admin/users/${user.id}`}>
									<button className="text-blue-500">
										<FaEye size={20} className="ms-5" />
									</button>
								</Link>
							</td>
						</tr>
					))}
				</tbody>
			</table>

			{/* page number viewrs buttons  */}

			<div className="flex justify-center mt-6 pb-20">
				<button
					className={`mx-1 px-3 py-1 rounded-lg ${
						currentPage === 1
							? "cursor-not-allowed opacity-50"
							: "hover:bg-gray-300"
					}`}
					onClick={() => setCurrentPage(currentPage - 1)}
					disabled={currentPage === 1}
				>
					<FaChevronLeft />
				</button>
				{Array.from({ length: totalPages }, (_, i) => (
					<button
						key={i}
						className={`mx-1 px-3 py-1 rounded-lg ${
							currentPage === i + 1
								? "bg-[#50ec3b] text-white font-bold"
								: "bg-[#d9f3d5] text-gray-900 font-medium"
						} hover:bg-gray-300`}
						onClick={() => setCurrentPage(i + 1)}
					>
						{i + 1}
					</button>
				))}
				<button
					className={`mx-1 px-3 py-1 rounded-lg ${
						currentPage === totalPages
							? "cursor-not-allowed opacity-50"
							: "hover:bg-gray-300"
					}`}
					onClick={() => setCurrentPage(currentPage + 1)}
					disabled={currentPage === totalPages}
				>
					<FaChevronRight />
				</button>
			</div>
		</div>
	);
}

export default Users;
