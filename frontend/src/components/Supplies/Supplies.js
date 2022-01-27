import React, { useState, useEffect } from "react";
import { StyledSupplies } from "./supplies.styles";
import SupplyRow from "./components/SupplyRow/SupplyRow";
import CreateSupply from "./components/CreateSupply/CreateSupply";
import { updateAccount } from "../../utils/api";
const Supplies = ({ activeUser, setActiveUser }) => {
	const [supplies, setSupplies] = useState([]);
	const [createSupplyMode, setCreateSupplyMode] = useState(false);
	//Load supplies in to state

	useEffect(() => {
		if (activeUser.supplies) {
			setSupplies(activeUser.supplies.data);
		}
	}, [activeUser.supplies]);
	//Lock and unlock supplies to add to inventory
	//Save button that updates the db

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
	return (
		<StyledSupplies>
			Supplies
			<br />
			{supplies
				? supplies.map((supply, index) => {
						return <SupplyRow supply={supply} key={index} />;
				  })
				: null}
			{createSupplyMode ? (
				<CreateSupply
					activeUser={activeUser}
					setActiveUser={setActiveUser}
				/>
			) : null}
			<button onClick={() => setCreateSupplyMode(!createSupplyMode)}>
				{createSupplyMode ? "X" : "Add new supply"}
			</button>
			<button onClick={() => (window.location.href = "/dashboard")}>
				Return to Dashboard{" "}
			</button>
		</StyledSupplies>
	);
};

export default Supplies;
