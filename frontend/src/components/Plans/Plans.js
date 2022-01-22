import React from "react";
import { StyledPlans } from "./plans.styles";

const Plans = ({}) => {
	return (
		<StyledPlans>
			Plans <br />
			<button onClick={() => (window.location.href = "/dashboard")}>
				Return to Dashboard{" "}
			</button>
		</StyledPlans>
	);
};

export default Plans;
