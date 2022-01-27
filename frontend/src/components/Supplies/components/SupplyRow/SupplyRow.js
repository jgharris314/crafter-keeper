import React from "react";
import { StyledSupplyRow } from "./supply-row.styles";
const SupplyRow = ({ supply }) => {
	return (
		<StyledSupplyRow key={supply.name}>
			{" "}
			{supply.supplyName}
		</StyledSupplyRow>
	);
};

export default SupplyRow;
