import React, { useState } from "react";
import { FaPlusCircle, FaTimesCircle } from "react-icons/fa";
import { Standard, UpdateFormProps } from "./type";



const SopUpdateForm: React.FC<UpdateFormProps> = ({
	standard,
	onCancel,
	onUpdate,
}) => {
	const [formData, setFormData] = useState<Standard>(standard);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		onUpdate(formData);
	};

	return (
		<div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
			<form onSubmit={handleSubmit}>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Task:
					</label>
					<input
						type="text"
						name="title"
						value={formData.title}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Measured By:
					</label>
					<select
						name="time"
						value={formData.time}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					>
						<option value="">Select an option</option>
						<option value="ሰዓት">ሰዓት</option>
						<option value="ሰው/ቀን">ሰው/ቀን</option>
					</select>
				</div>

				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Required People / day:
					</label>
					<input
						type="text"
						name="people"
						value={formData.people}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">
						Human Expenses / day:
					</label>
					<input
						type="text"
						name="place"
						value={formData.place}
						onChange={handleChange}
						className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					/>
				</div>
				<div className="flex items-center ms-6 my-5">
					<button
						type="submit"
						className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline me-3 flex"
					>
						Update
						<FaPlusCircle size={25} className="ms-1 pt-1" />
					</button>
					<button 
						type="button"
						onClick={onCancel}
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex"
					>
						Cancel
						<FaTimesCircle size={25} className="ms-1 pt-1" />
					</button>
				</div>
			</form>
		</div>
	);
};

export default SopUpdateForm;
