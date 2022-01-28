import React, { useEffect, useState } from "react";
import { StyledSupplyRow } from "./supply-row.styles";

const SupplyRow = ({ supply, activeUser, setActiveUser }) => {
	const [rerender, setRerender] = useState(false);
	useEffect(() => {}, [rerender]);
	const handleRemoveItem = async (supplyName) => {
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

	const handleIncrementQuantity = (increment, supply) => {
		if (increment === "-") {
			supply.quantity -= 1;
		} else {
			supply.quantity += 1;
		}
		setRerender(!rerender);
	};
	return (
		<StyledSupplyRow key={supply.supplyName}>
			<div className="supply-section">
				<div className="supply-section-row">
					<div className="supply-item">{supply.supplyName}</div>

					<div className="supply-item">
						{supply.quantity} {supply.unitType.toLowerCase()}
					</div>
				</div>
				<div className="btn-row">
					<div
						className="increment-btn"
						onClick={() => handleIncrementQuantity("-", supply)}
					>
						-
					</div>
					<div
						className="increment-btn"
						onClick={() => handleIncrementQuantity("+", supply)}
					>
						+
					</div>

					<div
						className="remove-btn"
						onClick={() => handleRemoveItem(supply.supplyName)}
					>
						X
					</div>
				</div>
			</div>
		</StyledSupplyRow>
	);
};

export default SupplyRow;
