import React, { useEffect } from "react";
import { StyledDashboard } from "./dashboard.styles";

const Dashboard = ({ activeUser }) => {
	useEffect(() => {}, [activeUser]);
	return (
		<StyledDashboard>
			{activeUser.orders && activeUser.supplies && activeUser.plans && (
				<div className="dashboard">
					<h1>Welcome to CrafterKeeper {activeUser.username}</h1>
					<div className="dashboard-section">
						<div
							className="dashboard-section-item"
							onClick={() => (window.location.href = "/orders")}
						>
							Orders
						</div>
						<div
							className="dashboard-section-item"
							onClick={() => (window.location.href = "/supplies")}
						>
							Supplies
						</div>
						<div
							className="dashboard-section-item"
							onClick={() => (window.location.href = "/plans")}
						>
							Plans
						</div>
					</div>
				</div>
			)}
		</StyledDashboard>
	);
};

export default Dashboard;
