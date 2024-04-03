import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AdminDashboardProps } from "../Dashboard/types";

const products = [
	{ id: 1, name: "Wheat" },
	{ id: 2, name: "Corn" },
	{ id: 3, name: "Rice" },
];

const SopManipulation = ({ minimized }: AdminDashboardProps) => {
	const [selectedProductId, setSelectedProductId] = useState(null);

	const handleProductSelect = (productId) => {
		setSelectedProductId(productId);
	};

	return (
		<div
			className={`container pb-5 mx-auto p-4 mb-10 bg-lightGreen ${
				minimized ? "lg:w-[90%]" : "lg:w-[80%]"
			} items-center h-screen mt-16 right-0 fixed overflow-y-auto transition-all duration-500 ease-in`}
		>
			<h2>Select Agricultural Product To Update Its Standard of Operation</h2>

			<select
				value={selectedProductId}
				onChange={(e) => handleProductSelect(e.target.value)}
				className="block appearance-none w-[60%] mt-5 bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 rounded shadow leading-tight focus:outline-none focus:shadow-outline"
			>
				<option value="">Select Product To Update Its SOP</option>

				{products.map((product) => (
					<option key={product.id} value={product.id}>
						{product.name}
					</option>
				))}
			</select>
			{selectedProductId && (
				<Link to="sopDetails">
					<button className="hover:bg-blue-500 text-[white] px-4 py-2 rounded-xl bg-[#d7a022] mt-10">
						Click Here To Update the SOP
					</button>
				</Link>
			)}
		</div>
	);
};

export default SopManipulation;
