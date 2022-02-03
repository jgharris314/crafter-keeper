import React, { useEffect, useState } from "react";
import { StyledCreatePlan } from "./create-plan.styles";
import { updateAccount } from "../../../../utils/api";
import AddSupply from "./components/AddSupply/AddSupply";

const CreatePlan = ({
	activeUser,
	setActiveUser,
	updatePlanMode,
	stateFormData,
}) => {
	const [formData, setFormData] = useState(stateFormData);
	const [error, setError] = useState();
	const [addSupply, setAddSupply] = useState(true);
	// const [rerender, setRerender] = useState(false);
	const [neededSupplies, setNeededSupplies] = useState(
		stateFormData.suppliesNeeded ? stateFormData.suppliesNeeded : []
	);

	const handleRemoveItem = (supplyName) => {
		if (
			window.confirm(
				"Do you really want to delete this item? This cannot be undone."
			)
		) {
			setNeededSupplies([
				...neededSupplies.filter((supply, index) => {
					return supply.supplyName !== supplyName;
				}),
			]);
		}
	};

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

	const handleRemovePlan = (planName) => {
		if (
			window.confirm(
				"Do you really want to delete this item? This cannot be undone."
			)
		) {
			setActiveUser({
				...activeUser,
				plans: {
					data: [
						...activeUser.plans.data.filter((plan) => {
							return plan.planName !== planName;
						}),
					],
				},
			});
		}
	};
	// useEffect(() => {
	// 	setActiveUser({
	// 		...activeUser,
	// 		plans: {
	// 			data: [...activeUser.plans.data],
	// 		},
	// 	});
	// }, [rerender]);
	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!updatePlanMode) {
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
				const updatedUser = { ...activeUser };
				delete updatedUser["cookie"];
				delete updatedUser["loggedin"];
				await updateAccount(
					Number(updatedUser.user_id),
					updatedUser,
					abortController.signal
				);

				setFormData({
					planName: "",
					suppliesNeeded: [],
					estimatedTime: 0,
				});
				window.alert("Created");
			} else {
				setError({ message: "Plan already exists" });
			}
		} else {
			//This section is for updating a plan. The intitial thought was remove the old plan, input a new one.
			//For whatever reason, this is not working.
			//Remove works by itself. it's adding the plan back to it that is causing the issue.
			handleRemovePlan(formData.planName);
			// setRerender(!rerender);
			const formedPlan = {
				planName: formData.planName,
				suppliesNeeded: neededSupplies,
				estimatedTime: formData.estimatedTime,
			};
			console.log(activeUser.plans.data);
			setTimeout(async () => {
				setActiveUser({
					...activeUser,
					plans: { data: [...activeUser.plans.data, formedPlan] },
				});
				const abortController = new AbortController();
				const updatedUser = { ...activeUser };
				delete updatedUser["cookie"];
				delete updatedUser["loggedin"];
				console.log(updatedUser);
				await updateAccount(
					Number(updatedUser.user_id),
					updatedUser,
					abortController.signal
				);

				setFormData({
					planName: "",
					suppliesNeeded: [],
					estimatedTime: 0,
				});
				window.alert("Updated");
			}, 1000);
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
							{supply.unitType.toLowerCase()} {supply.supplyName}{" "}
							<button
								onClick={() =>
									handleRemoveItem(supply.supplyName)
								}
							>
								X
							</button>
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

					<AddSupply
						activeUser={activeUser}
						neededSupplies={neededSupplies}
						setNeededSupplies={setNeededSupplies}
					/>

					<div className="create-supply-row" id="btn-row">
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
