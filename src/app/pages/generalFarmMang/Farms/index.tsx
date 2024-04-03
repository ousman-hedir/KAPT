import React, { useState } from "react";
import { FaEdit, FaEye, FaTimes, FaTrash } from "react-icons/fa";
import Modal from "../../../components/Modal";
import Button from "../../../components/Button";
import { GFMDashboardProps } from "../Dashboard/types";
import { FarmProps } from "./types";

function Farms({ minimized }: GFMDashboardProps) {
	const [farms, setFarms] = useState<FarmProps[]>([
		{ id: 1, name: "Aster", location: "Location 1" },
		{ id: 2, name: "Asela", location: "Location 2" },
	]);
	const [isNewFarmModalOpen, setIsNewFarmModalOpen] = useState(false);
	const [selectedFarm, setSelectedFarm] = useState<FarmProps | null>(null);
	const [deleteConfirmation, setDeleteConfirmation] = useState<number | null>(
		null
	);
	const [isViewFarmModalOpen, setIsViewFarmModalOpen] = useState(false);

	const handleCreateFarm = () => {
		setIsNewFarmModalOpen(true);
	};

	const handleCloseNewFarmModal = () => {
		setIsNewFarmModalOpen(false);
	};

	const handleSubmitNewFarm = (formData: FormData) => {
		const newFarm: FarmProps = {
			id: farms.length + 1,
			name: formData.get("name") as string,
			location: formData.get("location") as string,
		};
		setFarms([...farms, newFarm]);
		setIsNewFarmModalOpen(false);
	};

	const handleEditFarm = (id: number) => {
		console.log("Edit farm:", id);
	};

	const handleViewFarm = (farm: FarmProps) => {
		setSelectedFarm(farm);
		setIsViewFarmModalOpen(true);
	};

	const handleCloseViewFarmModal = () => {
		setSelectedFarm(null);
		setIsViewFarmModalOpen(false);
	};

	const handleDeleteFarm = (id: number) => {
		setDeleteConfirmation(id);
	};

	const confirmDeleteFarm = () => {
		if (deleteConfirmation !== null) {
			setFarms((prevFarms) =>
				prevFarms.filter((farm) => farm.id !== deleteConfirmation)
			);
			setDeleteConfirmation(null);
		}
	};

	return (
		<div
			className={`container pb-5 mx-auto p-4 mb-10 bg-lightGreen ${
				minimized ? "lg:w-[90%]" : "lg:w-[80%]"
			} items-center h-screen mt-16 right-0 fixed  overflow-y-auto transition-all duration-500 ease-in`}
		>
			<div className="container mx-auto px-4 py-8">
				<h2 className="text-2xl font-bold mb-4">Farm List</h2>
				<Button
					onClick={handleCreateFarm}
					className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mb-4"
				>
					Create New Farm
				</Button>
				<Modal
					isOpen={isNewFarmModalOpen}
					onClose={handleCloseNewFarmModal}
					minimized={minimized}
				>
					<h2 className="text-2xl font-bold mb-4">Create New Farm</h2>
					<form
						onSubmit={handleSubmitNewFarm}
						className="w-[20rem] md:w-[30rem]"
					>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								Name
							</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Farm's Name"
								className="mt-1 p-2 border border-gray-300 rounded-md w-full"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="name"
								className="block text-sm font-medium text-gray-700"
							>
								Farm Area
							</label>
							<input
								type="text"
								id="name"
								name="name"
								placeholder="Farm's Area"
								className="mt-1 p-2 border border-gray-300 rounded-md w-full"
								required
							/>
							<span className="my-2 tetx-sm">! please use Hectar to insert the Area of the farm</span>
						</div>
						<div className="mb-4">
							<label
								htmlFor="location"
								className="block text-sm font-medium text-gray-700"
							>
								Location
							</label>
							<input
								type="text"
								id="location"
								name="location"
								placeholder="Farm's Location"
								className="mt-1 p-2 border border-gray-300 rounded-md w-full"
								required
							/>
						</div>
						<div className="mb-4">
							<label
								htmlFor="location"
								className="block text-sm font-medium text-gray-700"
							>
								Humidity
							</label>
							<input
								type="text"
								id="location"
								name="location"
								placeholder="Farm's Humidity"
								className="mt-1 p-2 border border-gray-300 rounded-md w-full"
								required
							/>
						</div>
					</form>
				</Modal>
				{/* view details  */}
				<Modal
					isOpen={isViewFarmModalOpen}
					onClose={handleCloseViewFarmModal}
					minimized={minimized}
				>
					{selectedFarm && (
						<div className="w-[20rem] md:w-[50rem]">
							<h2 className="text-2xl font-bold mb-4">Farm Details</h2>
							<div className="mb-4">Name: {selectedFarm.name}</div>
							<div className="mb-4">Location: {selectedFarm.location}</div>
						</div>
					)}
				</Modal>
				{/* edit farm details  */}
			
				<ul className="my-3">
					{farms.map((farm) => (
						<li
							key={farm.id}
							className="bg-white shadow-md rounded-md p-4 mb-4"
						>
							<div className="font-semibold">
								{farm.name} <span>Farm</span>
							</div>
							<div className="text-gray-600">{farm.location}</div>
							<div className="mt-4">
								<button
									className="mx-3 bg-blue-500 hover:bg-blue-600 text-white font-bold py-1 px-2 rounded"
									onClick={() => handleEditFarm(farm.id)}
								>
									<FaEdit />
								</button>
								<button
									className="mx-2 bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-2 rounded"
									onClick={() => handleViewFarm(farm)}
								>
									<FaEye />
								</button>
								<button
									className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 ms-3 px-2 rounded"
									onClick={() => handleDeleteFarm(farm.id)}
								>
									<FaTrash />
								</button>
							</div>
							{deleteConfirmation === farm.id && (
								<div className="text-red-500 mt-2">
									Are you sure you want to delete this farm?
									<button
										className="ml-2 bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-2 rounded"
										onClick={confirmDeleteFarm}
									>
										Confirm
									</button>
								</div>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}

export default Farms;
