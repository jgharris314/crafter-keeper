import React from "react";
import { StyledSupplies } from "./supplies.styles";

const Supplies = ({}) => {
	return (
		<StyledSupplies>
			Supplies
			<br />
			<button onClick={() => (window.location.href = "/dashboard")}>
				Return to Dashboard{" "}
			</button>
		</StyledSupplies>
	);
};

export default Supplies;
