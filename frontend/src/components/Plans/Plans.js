import React, { useState } from "react";
import { StyledPlans } from "./plans.styles";
import CreatePlan from "./components/CreatePlan/CreatePlan";
const Plans = ({ activeUser, setActiveUser }) => {
	const [createPlanMode, setCreatePlanMode] = useState(false);
	return (
		<StyledPlans>
			<h1>Plans</h1>
			{createPlanMode ? (
				<CreatePlan
					activeUser={activeUser}
					setActiveUser={setActiveUser}
				/>
			) : null}
			<div className="btn-row">
				<div
					onClick={() => setCreatePlanMode(!createPlanMode)}
					className={
						createPlanMode
							? "not-create-mode-btn"
							: "create-mode-btn"
					}
				>
					{createPlanMode ? "X" : "Add new Plan"}
				</div>
				<div
					className="return"
					onClick={() => (window.location.href = "/dashboard")}
				>
					Return to Dashboard{" "}
				</div>
			</div>
		</StyledPlans>
	);
};

export default Plans;
