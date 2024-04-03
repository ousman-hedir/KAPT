import React, { useState } from "react";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import { UserInfo } from "./types";

interface AddUserFormProps {
	onSubmit: (newEmployee: UserInfo) => void;
	onCancel: () => void;
}

const AddUserForm: React.FC<AddUserFormProps> = ({ onSubmit, onCancel }) => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [role, setRole] = useState("");
	const [phone, setPhone] = useState("");
	const [startDate, setStartDate] = useState("");
	const [farm, setFarm] = useState("");

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		onSubmit({ name, email, role, phone, startDate, farm });
		setName("");
		setEmail("");
		setRole("");
		setPhone("");
		setStartDate("");
		setFarm("");
	};

	return (
		<div className="bg-white shadow-2xl mb-4 rounded-md p-4">
			<div className="flex items-center justify-between mb-4">
				<h2 className="text-lg font-bold mb-4"> Employee's Details</h2>
			</div>
			<form onSubmit={handleSubmit} className="bg-[white] p-2 mb-5">
				{/* full name  */}
				<div className="mb-4">
					<label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600  w-[60%]">
						<input
							id="name"
							type="text"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
							className="h-10 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 "
						/>

						<span className="absolute top-[50%] -translate-y-1/2 start-2.5 bg-white p-0.5 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0  peer-focus:text-sm">
							Employee's Full Name
						</span>
					</label>
				</div>

				{/* email  */}
				<div className="mb-4">
					<label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600  w-[60%]">
						<input
							id="email"
							type="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="h-10 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 "
						/>

						<span className="absolute top-[50%] -translate-y-1/2 start-2.5 bg-white p-0.5 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0 peer-focus:text-sm">
							Employee's Email
						</span>
					</label>
				</div>

				{/* role  */}
				<div className="mb-4">
					<label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600  w-[60%]">
						<input
							id="role"
							type="text"
							value={role}
							onChange={(e) => setRole(e.target.value)}
							required
							className="h-10 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 "
						/>

						<span className="absolute top-[50%] -translate-y-1/2 start-2.5 bg-white p-0.5 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0  peer-focus:text-sm">
							Employee's Role
						</span>
					</label>
				</div>
				{/* phone number  */}

				<div className="mb-4">
					<label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600  w-[60%]">
						<input
							id="phone"
							type="tel"
							value={phone}
							onChange={(e) => setPhone(e.target.value)}
							required
							className="h-10 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 "
						/>

						<span className="absolute top-[50%] -translate-y-1/2 start-2.5 bg-white p-0.5 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0  peer-focus:text-sm">
							Phone Number
						</span>
					</label>
				</div>
				{/* farm  */}
				<div className="mb-4">
					<label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600  w-[60%]">
						<input
							id="farm"
							type="text"
							value={farm}
							onChange={(e) => setFarm(e.target.value)}
							required
							className="h-10 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 "
						/>

						<span className="absolute top-[50%] -translate-y-1/2 start-2.5 bg-white p-0.5 text-gray-500 transition-all peer-placeholder-shown:top-1/2 peer-placeholder-shown:text-sm peer-focus:top-0  peer-focus:text-sm">
							Working Area
						</span>
					</label>
				</div>

				{/* date  */}
				<div className="mb-4">
					<label className="relative block rounded-md border border-gray-200 shadow-sm focus-within:border-blue-600 focus-within:ring-1 focus-within:ring-blue-600  w-[60%]">
						<input
							id="date"
							type="date"
							value={startDate}
							onChange={(e) => setStartDate(e.target.value)}
							required
							className="h-10 peer border-none bg-transparent placeholder-transparent focus:border-transparent focus:outline-none focus:ring-0 "
						/>
					</label>
				</div>

				{/* button  */}
				<div className="flex justify-start my-3">
					<button
						type="submit"
						className="bg-[#60a018] rounded-lg p-2 hover:bg-[#d7a022] text-[white] mr-2 flex"
					>
						Add Employee
						<FaPlusCircle size={25} className="ms-1 pt-1" />
					</button>
					<button
						onClick={onCancel}
						className="bg-[#a03818] rounded-lg p-2 hover:bg-[#d72e22] text-[white] focus:outline-none flex"
					>
						Cancel
						<FaTimesCircle size={25} className="ms-1 pt-1" />
					</button>
				</div>
			</form>
		</div>
	);
};

export default AddUserForm;
