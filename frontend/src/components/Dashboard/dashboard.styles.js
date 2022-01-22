import styled from "styled-components";
import {
	innerBackgroundColor,
	outerBackgroundColor,
} from "../../App.variables";

export const StyledDashboard = styled.div`
	background-color: ${outerBackgroundColor};
	display: flex;
	flex-direction: column;
	align-items: center;
	color: white;
	height: 100vh;
	width: 100%;

	.dashboard {
		width: 100%;
		&-section {
			display: flex;
			flex-direction: row;
			width: 100%;
			margin-top: 50px;
			justify-content: space-evenly;

			&-item {
				display: flex;
				flex-direction: column;
				width: 190px;

				border: 1px solid gold;
				padding: 15px;
				justify-content: center;

				:hover {
					cursor: pointer;
					background-color: gold;
					color: black;
				}
			}
		}
	}
`;
