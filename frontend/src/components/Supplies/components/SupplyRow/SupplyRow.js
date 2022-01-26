import React from "react";
import { StyledSupplyRow } from "./supply-row.styles";
const SupplyRow = ({ supply }) => {
	return <StyledSupplyRow> {supply.supplyName}</StyledSupplyRow>;
};

export default SupplyRow;
