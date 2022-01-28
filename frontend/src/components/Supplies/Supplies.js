import React, { useState, useEffect } from "react";
import { StyledSupplies } from "./supplies.styles";
import SupplyRow from "./components/SupplyRow/SupplyRow";
import CreateSupply from "./components/CreateSupply/CreateSupply";
import { updateAccount } from "../../utils/api";
const Supplies = ({ activeUser, setActiveUser }) => {
	const [supplies, setSupplies] = useState([]);
	const [createSupplyMode, setCreateSupplyMode] = useState(false);

	useEffect(() => {
		if (activeUser.supplies) {
			setSupplies(activeUser.supplies.data);
		}
	}, [activeUser.supplies]);

	window.addEventListener("beforeunload", async (e) => {
		e.preventDefault();
		const abortController = new AbortController();
		const updatedUser = { ...activeUser };
		delete updatedUser["cookie"];
		delete updatedUser["loggedin"];
		if (activeUser.user_id) {
			await updateAccount(
				activeUser.user_id,
				updatedUser,
				abortController.signal
			);
		}
		return null;
	});

	window.addEventListener("beforeunload", (e) => {
		e.preventDefault();
		localStorage.setItem("activeUser", JSON.stringify(activeUser));
	});
	return (
		<StyledSupplies>
			<h1>Supplies</h1>
			<br />
			<div className="supply-categories">
				<div className="supply-categories-item">Name</div>
				<div className="supply-categories-item">Quantity</div>
			</div>
			{supplies
				? supplies.map((supply, index) => {
						return (
							<SupplyRow
								activeUser={activeUser}
								setActiveUser={setActiveUser}
								supply={supply}
								key={index}
							/>
						);
				  })
				: null}
			{createSupplyMode ? (
				<CreateSupply
					activeUser={activeUser}
					setActiveUser={setActiveUser}
				/>
			) : null}
			<div className="btn-row">
				<div
					onClick={() => setCreateSupplyMode(!createSupplyMode)}
					className={
						createSupplyMode
							? "not-create-mode-btn"
							: "create-mode-btn"
					}
				>
					{createSupplyMode ? "X" : "Add new supply"}
				</div>
				<div
					className="return"
					onClick={() => (window.location.href = "/dashboard")}
				>
					Return to Dashboard{" "}
				</div>
			</div>
		</StyledSupplies>
	);
};

export default Supplies;
