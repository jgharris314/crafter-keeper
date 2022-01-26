import React, { useState, useEffect } from "react";
import { StyledSupplies } from "./supplies.styles";
import SupplyRow from "./components/SupplyRow/SupplyRow";
import CreateSupply from "./components/CreateSupply/CreateSupply";
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

	window.addEventListener("beforeunload", (e) => {
		e.preventDefault();
		// setActiveUser({ ...activeUser });
		return (e.returnValue = "Are you sure you want to close?");
	});
	return (
		<StyledSupplies>
			Supplies
			<br />
			{supplies
				? supplies.map((supply) => {
						return <SupplyRow supply={supply} />;
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
