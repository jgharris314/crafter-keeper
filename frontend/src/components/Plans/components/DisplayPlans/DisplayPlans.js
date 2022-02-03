import React, { useState } from "react";
import { StyledDisplayPlans } from "./display-plans.styles";
import HoverPlan from "./components/HoverPlan/HoverPlan";
import { updateAccount } from "../../../../utils/api";
const DisplayPlans = ({
	activeUser,
	setActiveUser,
	setUpdatePlanMode,
	setUpdatePlanFormData,
	setCreatePlanMode,
}) => {
	const [hoverPlan, setHoverPlan] = useState({});

	const handleRemoveItem = (planName) => {
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

	const handleUpdateMode = (plan) => {
		setUpdatePlanFormData(plan);
		setUpdatePlanMode(true);
		setCreatePlanMode(false);
	};

	return (
		<StyledDisplayPlans>
			{activeUser.plans
				? activeUser.plans.data.map((plan, index) => {
						return (
							<div
								onMouseEnter={() => setHoverPlan(plan)}
								onMouseLeave={() => setHoverPlan({})}
								key={plan.planName + index}
								className={
									index % 2 === 0
										? "listed-plan-even"
										: "listed-plan-odd"
								}
							>
								{plan.planName}{" "}
								<div className="btn-section">
									<button
										onClick={() => handleUpdateMode(plan)}
									>
										Update
									</button>
									<button
										onClick={() =>
											handleRemoveItem(plan.planName)
										}
									>
										X
									</button>
								</div>
							</div>
						);
				  })
				: null}
			{hoverPlan.suppliesNeeded ? <HoverPlan plan={hoverPlan} /> : null}
		</StyledDisplayPlans>
	);
};

export default DisplayPlans;
