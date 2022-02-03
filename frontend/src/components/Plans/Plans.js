import React, { useEffect, useState } from "react";
import { StyledPlans } from "./plans.styles";
import CreatePlan from "./components/CreatePlan/CreatePlan";
import DisplayPlans from "./components/DisplayPlans/DisplayPlans";
import { updateAccount } from "../../utils/api";
const Plans = ({ activeUser, setActiveUser }) => {
	const [createPlanMode, setCreatePlanMode] = useState(false);
	const [updatePlanMode, setUpdatePlanMode] = useState(false);
	const defaultFormData = {
		planName: "",
		suppliesNeeded: [],
		estimatedTime: 0,
	};
	const [updatePlanFormData, setUpdatePlanFormData] = useState();
	const handleReturnToDashboard = () => {
		window.location.href = "/dashboard";
	};
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

	const handleCreatePlanMode = () => {
		setCreatePlanMode(!createPlanMode);
		setUpdatePlanMode(false);
	};
	// useEffect(() => {
	// 	if (createPlanMode) {
	// 		setUpdatePlanMode(false);
	// 	}
	// 	if (updatePlanMode) {
	// 		setCreatePlanMode(false);
	// 	}
	// }, [createPlanMode, updatePlanMode]);

	window.addEventListener("beforeunload", (e) => {
		e.preventDefault();
		localStorage.setItem("activeUser", JSON.stringify(activeUser));
	});
	return (
		<StyledPlans>
			<h1>Plans</h1>
			<DisplayPlans
				activeUser={activeUser}
				setActiveUser={setActiveUser}
				setUpdatePlanMode={setUpdatePlanMode}
				setCreatePlanMode={setCreatePlanMode}
				setUpdatePlanFormData={setUpdatePlanFormData}
			/>
			{createPlanMode ? (
				<div className="create-plan-container">
					<h3>Create a plan</h3>
					<CreatePlan
						activeUser={activeUser}
						setActiveUser={setActiveUser}
						updatePlanMode={updatePlanMode}
						stateFormData={defaultFormData}
					/>
				</div>
			) : null}
			{updatePlanMode ? (
				<div className="create-plan-container">
					<h3>Update a plan</h3>
					<CreatePlan
						activeUser={activeUser}
						setActiveUser={setActiveUser}
						updatePlanMode={updatePlanMode}
						stateFormData={updatePlanFormData}
					/>
				</div>
			) : null}
			<div className="btn-row">
				<div
					onClick={() => handleCreatePlanMode()}
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
					onClick={() => handleReturnToDashboard()}
				>
					Return to Dashboard{" "}
				</div>
			</div>
		</StyledPlans>
	);
};

export default Plans;
