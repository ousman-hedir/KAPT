import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { AdminDashboardProps } from "../Dashboard/types";
import { Standard } from "./type";
import Modal from "../../../components/Modal";

const standards: Standard[] = [
	{ id: 1, title: "ምንጣሮ በማሽን", time: "ሰዓት", people: "22", place: "250" },
	{
		id: 2,
		title: "ትናንሽ ምንጣሮ /መሬት ጽዳት",
		time: "ሰው/ቀን",
		people: "10",
		place: "250",
	},
	{ id: 3, title: "እርሻ በትራክተር", time: "ሰዓት", people: "2", place: "8000" },
	{ id: 4, title: "ክስካሶ በትራክተር", time: "ሰዓት", people: "1", place: "4500" },
	{
		id: 5,
		title: "የውሃ ቦይ ማውጣት በትራክተር",
		time: "ሰዓት",
		people: "1.5",
		place: "3000",
	},
	{ id: 6, title: "ሪጀር/የውሃ ማጠጫ", time: "ሰዓት", people: "1", place: "4000" },
	{
		id: 7,
		title: "ችግኝ ማፍላት (ለ40 ቀናት)",
		time: "ሰው/ ቀን",
		people: "80",
		place: "250",
	},
	{ id: 8, title: "ችግኝ ማዛመት", time: "ሰው/ ቀን", people: "17", place: "250" },
	{
		id: 9,
		title: "ለአረም እና ለኩትኳቶ (3 ጊዜ)",
		time: "ሰው/ቀን",
		people: "45",
		place: "250",
	},
	{ id: 10, title: "ማዳበሪያ መጨመር", time: "ሰው/ቀን", people: "3", place: "250" },
	{
		id: 11,
		title: "ለመስኖ ውሃ ማጠጣት (በየ5 ቀኑ በምርት ወቅት)",
		time: "ሰው/ቀን",
		people: "90",
		place: "250",
	},
	{
		id: 12,
		title: "ጸረ- ተባይ መድሃኒት መርጨት 5 ጊዜ በምርት ወቅት",
		time: "ሰው/ቀን",
		people: "20",
		place: "250",
	},
	{
		id: 13,
		title: "ቲማቲም መደገፍ ከ3-4 ዙር",
		time: "ሰው/ቀን",
		people: "30",
		place: "250",
	},
	{ id: 14, title: "ምርት መሰብሰብ", time: "ሰው/ቀን", people: "27", place: "250" },
	{ id: 15, title: "ምርት ማጓጓዝ", time: "ሰው/ቀን", people: "20", place: "250" },
	{
		id: 16,
		title: "የምርት ጥራት ደረጃ ማውጣት",
		time: "ሰው/ ቀን",
		people: "18",
		place: "250",
	},
	{ id: 17, title: "ምርት መጫንና ማውረድ", time: "ሰው/ቀን", people: "20", place: "250" },
];

function SopDetails({ minimized }: AdminDashboardProps) {
	const [selectedStandard, setSelectedStandard] = useState<Standard | null>(
		null
	);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = (standard: Standard) => {
		setSelectedStandard(standard);
		setIsEditing(true);
	};

	const handleCloseModal = () => {
		setIsEditing(false);
		setSelectedStandard(null);
	};

	const handleInputChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
	) => {
		if (selectedStandard) {
			setSelectedStandard({
				...selectedStandard,
				[e.target.name]: e.target.value,
			});
		}
	};

	const [currentPage, setCurrentPage] = useState(1);
	const standardsPerPage = 10;

	const indexOfLastStandard = currentPage * standardsPerPage;
	const indexOfFirstStandard = indexOfLastStandard - standardsPerPage;
	const currentStandards = standards.slice(
		indexOfFirstStandard,
		indexOfLastStandard
	);

	const totalPages = Math.ceil(standards.length / standardsPerPage);

	return (
		<div
			className={`container pb-5 mx-auto p-4 mb-10 bg-lightGreen ${
				minimized ? "lg:w-[90%]" : "lg:w-[80%]"
			} items-center h-screen mt-16 right-0 fixed overflow-y-auto transition-all duration-500 ease-in`}
		>
			<div className="overflow-x-auto">
				<table className="table-auto w-full text-textColor">
					<thead>
						<tr className="bg-gray-200">
							<th className="px-4 py-2">ተ.ቁ</th>
							<th className="px-4 py-2">ዝርዝር ተግባራት</th>
							<th className="px-4 py-2">መለኪያ</th>
							<th className="px-4 py-2">የሚያስፈልገው ሰው/ቀን</th>
							<th className="px-4 py-2">የጉልበት ወጪ በቀን</th>
							<th className="px-4 py-2">ማስተካከል</th>
						</tr>
					</thead>
					<tbody>
						{currentStandards.map((standard, index) => (
							<React.Fragment key={standard.id}>
								<tr className={index % 2 !== 0 ? "bg-secondary" : ""}>
									<td className="border px-4 py-2">{standard.id}</td>
									<td className="border px-4 py-2">{standard.title}</td>
									<td className="border px-4 py-2">{standard.time}</td>
									<td className="border px-4 py-2">{standard.people}</td>
									<td className="border px-4 py-2">{standard.place}</td>
									<td className="border px-4 py-2">
										<FiEdit
											className="text-blue-500 text-xl ms-10 cursor-pointer"
											onClick={() => handleEditClick(standard)}
										/>
									</td>
								</tr>
							</React.Fragment>
						))}
					</tbody>
				</table>
			</div>

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

			<Modal
				isOpen={isEditing}
				onClose={handleCloseModal}
				minimized={minimized}
			>
				<div className="my-10 mx-auto">
					<h2 className="text-2xl font-semibold my-2">Update Standards</h2>
					{selectedStandard && (
						<form>
							<div className="flex md:flex-row flex-col  gap-5 mt-4">
								<div className="flex flex-col ">
									<label className="text-sm font-medium mb-1">Task</label>
									<input
										name="title"
										value={selectedStandard.title}
										onChange={handleInputChange}
										type="text"
										className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-auto"
									/>
								</div>
								<div className="flex flex-col">
									<label className="text-sm font-medium mb-1">
										Measured By
									</label>
									<select
										name="time"
										value={selectedStandard.time}
										onChange={handleInputChange}
										className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500"
									>
										<option value="ሰው/ቀን">ሰው/ቀን</option>
										<option value="ሰዓት">ሰዓት</option>
										<option value="ሰው">ሰው</option>
									</select>
								</div>

								<div className="flex flex-col">
									<label className="text-sm font-medium mb-1">
										Required People / day
									</label>
									<input
										name="people"
										type="text"
										value={selectedStandard.people}
										onChange={handleInputChange}
										className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-auto"
									/>
								</div>
								<div className="flex flex-col">
									<label className="text-sm font-medium mb-1">
										Expenses / day
									</label>
									<input
										name="place"
										type="text"
										value={selectedStandard.place}
										onChange={handleInputChange}
										className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-100%"
									/>
								</div>
							</div>
						</form>
					)}
				</div>
			</Modal>
		</div>
	);
}

export default SopDetails;
