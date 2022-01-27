import React from "react";
import { StyledSupplyRow } from "./supply-row.styles";
const SupplyRow = ({ supply, activeUser, setActiveUser }) => {
	const handleRemoveItem = (supplyName) => {
		if (
			window.confirm(
				"Do you really want to delete this item? This cannot be undone."
			)
		) {
			setActiveUser({
				...activeUser,
				supplies: {
					data: [
						...activeUser.supplies.data.filter((supply) => {
							return supply.supplyName !== supplyName;
						}),
					],
				},
			});
		}
	};

	const handleIncrementQuantity = (increment) => {
		console.log(increment);
		// setActiveUser({
		// 	...activeUser,
		// 	supplies: {
		// 		data: [
		// 			...activeUser.supplies.data,
		// 			increment === "-"
		// 				? (activeUser.supplies.data.quantity -= 1)
		// 				: (activeUser.supplies.data.quantity += 1),
		// 		],
		// 	},
		// });
	};
	return (
		<StyledSupplyRow key={supply.supplyName}>
			<div className="supply-section">
				<div className="supply-item">{supply.supplyName}</div>
				<div
					className="increment-btn"
					value="-"
					onClick={(target) => handleIncrementQuantity(target.value)}
				>
					-
				</div>
				<div className="supply-item">{supply.quantity}</div>
				<div className="increment-btn">+</div>
				<div className="supply-item">
					{supply.unitType === "X" ? null : supply.unitType}
				</div>
				<div
					className="remove-button"
					onClick={() => handleRemoveItem(supply.supplyName)}
				>
					X
				</div>
			</div>
		</StyledSupplyRow>
	);
};

export default SupplyRow;
