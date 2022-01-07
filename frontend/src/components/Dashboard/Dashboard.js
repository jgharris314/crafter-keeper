import React, { useEffect } from "react";
import { StyledDashboard } from "./dashboard.styles";

const Dashboard = ({ activeUser }) => {
	useEffect(() => {}, [activeUser]);
	return (
		<StyledDashboard>
			{activeUser.orders && activeUser.supplies && activeUser.plans && (
				<>
					Welcome to CrafterKeeper {activeUser.username}
					<div>
						<div>
							You have {activeUser.orders.data.length} orders to
							complete{" "}
						</div>
						<br />
						You have {activeUser.supplies.data.length} unique supply
						types <br />
						You have {activeUser.plans.data.length} plans <br />
					</div>
				</>
			)}
		</StyledDashboard>
	);
};

export default Dashboard;
