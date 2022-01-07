import React from "react";
import { StyledDashboard } from "./dashboard.styles";

const Dashboard = ({ activeUser }) => {
	return (
		<StyledDashboard>
			Welcome to CrafterKeeper {activeUser.username}
			<div>
				You have {activeUser.orders.data.length} orders to complete{" "}
				<br />
				You have {activeUser.supplies.data.length} unique supply types{" "}
				<br />
				You have {activeUser.plans.data.length} plans <br />
			</div>
		</StyledDashboard>
	);
};

export default Dashboard;
