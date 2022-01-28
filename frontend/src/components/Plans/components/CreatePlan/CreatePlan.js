import React, { useState } from "react";
import { StyledCreatePlan } from "./create-plan.styles";
import { updateAccount } from "../../../../utils/api";
import AddSupply from "./components/AddSupply/AddSupply";

const CreatePlan = ({ activeUser, setActiveUser }) => {
	const defaultFormData = {
		planName: "",
		suppliesNeeded: [],
		estimatedTime: 0,
	};
	const [formData, setFormData] = useState(defaultFormData);
	const [error, setError] = useState();
	const [addSupply, setAddSupply] = useState(true);
	const [neededSupplies, setNeededSupplies] = useState([]);

	const validateUniquePlan = (newPlan) => {
		return activeUser.plans.data.find(
			({ planName }) => planName === newPlan.planName
		);
	};

	const handleChange = ({ target }) => {
		const value =
			target.name === "amountNeeded"
				? Number(target.value)
				: target.name === "planName"
				? target.value.charAt(0).toUpperCase() + target.value.slice(1)
				: target.value;
		setFormData({
			...formData,
			[target.name]: value,
		});
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		if (!validateUniquePlan(formData)) {
			const formedPlan = {
				planName: formData.planName,
				suppliesNeeded: neededSupplies,
				estimatedTime: formData.estimatedTime,
			};
			setActiveUser({
				...activeUser,
				plans: { data: [...activeUser.plans.data, formedPlan] },
			});
			const abortController = new AbortController();
			const updatedUser = activeUser;
			delete updatedUser["cookie"];
			delete updatedUser["loggedin"];
			await updateAccount(
				Number(updatedUser.user_id),
				updatedUser,
				abortController.signal
			);

			setFormData(defaultFormData);
			window.alert("Created");
		} else {
			setError({ message: "Plan already exists" });
		}
	};

	window.addEventListener("beforeunload", (e) => {
		e.preventDefault();
		localStorage.setItem("activeUser", JSON.stringify(activeUser));
	});
	return (
		<StyledCreatePlan>
			{error ? <div className="error-div"> {error.message}</div> : null}

			<div className="supply-list">
				<h3>Supplies Needed</h3>
				{neededSupplies.map((supply, index) => {
					return (
						<div>
							{supply.amountNeeded ? supply.amountNeeded : 0}{" "}
							{supply.unitType.toLowerCase()} {supply.supplyName}
						</div>
					);
				})}
			</div>
			<div className="plan-form">
				<form onSubmit={(e) => handleSubmit(e)}>
					<div className="create-plan-row">
						<label
							className="create-plan-row-label"
							htmlFor="planName"
						>
							Plan Name
						</label>
						<input
							className="create-plan-row-input"
							type="text"
							name="planName"
							id="planName"
							value={formData.planName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="create-plan-row">
						<label
							className="create-plan-row-label"
							htmlFor="estimatedTime"
						>
							Estimated Time
						</label>
						<input
							className="create-plan-row-input"
							type="text"
							name="estimatedTime"
							id="estimatedTime"
							value={formData.estimatedTime}
							onChange={handleChange}
							required
						/>
					</div>
					{addSupply ? (
						<AddSupply
							activeUser={activeUser}
							neededSupplies={neededSupplies}
							setNeededSupplies={setNeededSupplies}
						/>
					) : null}
					<div className="create-supply-row" id="btn-row">
						<button
							className="create-supply-row-btn toggle"
							onClick={() => setAddSupply(!addSupply)}
						>
							{addSupply
								? "Close add supply window"
								: "Add Supply"}
						</button>

						<button
							className="create-supply-row-btn create-plan-btn"
							type="submit"
						>
							Create Plan
						</button>
					</div>
				</form>
			</div>
		</StyledCreatePlan>
	);
};

export default CreatePlan;
