import React from "react";
import { StyledOrders } from "./orders.styles";

const Orders = ({}) => {
	return (
		<StyledOrders>
			Orders <br />
			<button onClick={() => (window.location.href = "/dashboard")}>
				Return to Dashboard{" "}
			</button>
		</StyledOrders>
	);
};

export default Orders;
