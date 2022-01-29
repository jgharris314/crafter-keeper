import React from "react";
import { StyledHoverPlan } from "./hover-plan.styles";

const HoverPlan = ({ plan }) => {
	return (
		<StyledHoverPlan>
			<div>Preview</div>
			<div className="plan-name">{plan.planName}</div>
			<div>
				Requirements
				{plan.suppliesNeeded.map((supply, index) => {
					return (
						<div key={supply.supplyName + index}>
							{supply.supplyName}
						</div>
					);
				})}
			</div>
		</StyledHoverPlan>
	);
};

export default HoverPlan;
