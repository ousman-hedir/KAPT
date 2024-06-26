import React, { useState } from "react";
import {
	FaChevronLeft,
	FaChevronRight,
	FaEye,
	FaPlusCircle,
} from "react-icons/fa";
import Modal from "../../../components/Modal";
import { AdminDashboardProps } from "../Dashboard/types";
import { Link } from "react-router-dom";
import { UserInfo } from "./types";

function Users({ minimized }: AdminDashboardProps) {
	// User List
	const [users, setUsers] = useState<UserInfo[]>([
		{
			id: 1,
			name: "Abebe Kebede",
			email: "abebe@example.com",
			role: "Developer",
			phone: 251911234567,
			farm: "Asela",
		},
		{
			id: 2,
			name: "Meseret Tadesse",
			email: "meseret@example.com",
			role: "Designer",
			phone: 251922345678,
			farm: "Asela",
		},
		{
			id: 3,
			name: "Yohannes Assefa",
			email: "yohannes@example.com",
			role: "Manager",
			phone: 251933456789,
			farm: "Asela",
		},
		{
			id: 4,
			name: "Sara Solomon",
			email: "sara@example.com",
			role: "Administrator",
			phone: 251944567890,
			farm: "Asela",
		},
		{
			id: 5,
			name: "John Doe",
			email: "john.doe@example.com",
			role: "Developer",
			phone: 1234567890,
			farm: "Asela",
		},
		{
			id: 6,
			name: "Jane Smith",
			email: "jane.smith@example.com",
			role: "Designer",
			phone: 987654321,
			farm: "Asela",
		},
		{
			id: 7,
			name: "Michael Johnson",
			email: "michael.johnson@example.com",
			role: "Manager",
			phone: 9876543210,
			farm: "Asela",
		},
		{
			id: 8,
			name: "Emily Williams",
			email: "emily.williams@example.com",
			role: "Administrator",
			phone: 123456789,
			farm: "Asela",
		},
		{
			id: 9,
			name: "Daniel Brown",
			email: "daniel.brown@example.com",
			role: "Developer",
			phone: 5432109876,
			farm: "Asela",
		},
		{
			id: 10,
			name: "Olivia Garcia",
			email: "olivia.garcia@example.com",
			role: "Designer",
			phone: 6789012345,
			farm: "Asela",
		},
		{
			id: 11,
			name: "Matthew Martinez",
			email: "matthew.martinez@example.com",
			role: "Manager",
			phone: 3456789012,
			farm: "Asela",
		},
		{
			id: 12,
			name: "Emma Taylor",
			email: "emma.taylor@example.com",
			role: "Administrator",
			phone: 8901234567,
			farm: "Asela",
		},
		{
			id: 13,
			name: "William Rodriguez",
			email: "william.rodriguez@example.com",
			role: "Developer",
			phone: 9876543210,
			farm: "Asela",
		},
		{
			id: 14,
			name: "Sophia Martinez",
			email: "sophia.martinez@example.com",
			role: "Designer",
			phone: 1234567890,
			farm: "Asela",
		},
		{
			id: 15,
			name: "Liam Brown",
			email: "liam.brown@example.com",
			role: "Manager",
			phone: 987654321,
			farm: "Asela",
		},
		{
			id: 16,
			name: "Isabella Garcia",
			email: "isabella.garcia@example.com",
			role: "Administrator",
			phone: 9876543210,
			farm: "Asela",
		},
		{
			id: 17,
			name: "James Johnson",
			email: "james.johnson@example.com",
			role: "Developer",
			phone: 123456789,
			farm: "Asela",
		},
	]);

	const [currentPage, setCurrentPage] = useState(1);
	const usersPerPage = 10;
	const totalPages = Math.ceil(users.length / usersPerPage);
	const [isOpen, setIsOpen] = useState(false);

	const handleOpenModal = () => {
		setIsOpen(true);
	};

	const handleCloseModal = () => {
		setIsOpen(false);
	};

	const handleFormSubmit = (formData: unknown) => {
		// Handle form submission, e.g., send data to server
		console.log("Form submitted with data:", formData);
	};

	const usersToShow = users.slice(
		(currentPage - 1) * usersPerPage,
		currentPage * usersPerPage
	);

	return (
		<div
			className={`container pb-5 mx-auto p-4 mb-10 bg-lightGreen ${
				minimized ? "lg:w-[90%]" : "lg:w-[80%]"
			} items-center h-screen mt-16 right-0 fixed  overflow-y-auto transition-all duration-500 ease-in`}
		>
			<h1 className="text-2xl font-bold mb-6">Employee Management</h1>
			<button
				onClick={handleOpenModal}
				className="text-[white] p-2 mb-6 flex bg-[#d7a022] rounded-lg hover:bg-[#3b3bf7]"
			>
				Add New Employee
				<FaPlusCircle size={30} className="ms-1 pt-1" />
			</button>

			<Modal isOpen={isOpen} onClose={handleCloseModal} minimized={minimized}>
				<h2 className="text-xl font-semibold mb-4">Add New Employee</h2>
				<form onSubmit={handleFormSubmit}>
					<input
						type="text"
						name="name"
						placeholder="First Name"
						className="w-full border rounded-md p-2 mb-2 outline-none"
					/>
					<input
						type="text"
						name="name"
						placeholder="Last Name"
						className="w-full border rounded-md p-2 mb-2 outline-none"
					/>

					<input
						type="phone"
						name="phone"
						placeholder="Phone Number"
						className="w-full border rounded-md p-2 mb-2 outline-none"
					/>
					<input
						type="email"
						name="email"
						placeholder="Email"
						className="w-full border rounded-md p-2 mb-2 outline-none"
					/>
					<input
						type="text"
						name="farm"
						placeholder="Working Area"
						className="w-full border rounded-md p-2 mb-2 outline-none"
					/>
					<input
						type="text"
						name="roll"
						placeholder="Working Position"
						className="w-full border rounded-md p-2 mb-2 outline-none"
					/>
				</form>
			</Modal>

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
