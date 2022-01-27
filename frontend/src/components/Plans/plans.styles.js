import styled from "styled-components";
import { darkgold, outerBackgroundColor } from "../../App.variables";
export const StyledPlans = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 20px;

	.btn-row {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin-top: 15px;
		width: 30%;
	}
	.create-mode-btn {
		background-color: ${outerBackgroundColor};
		border: 1px solid lime;
		color: lime;
		width: 30%;

		:hover {
			cursor: pointer;
			background-color: lime;
			color: black;
		}
	}

	.not-create-mode-btn {
		background-color: red;
		width: 30%;
	}

	.return {
		background-color: ${outerBackgroundColor};
		border: 1px solid ${darkgold};
		color: ${darkgold};
		width: 30%;

		:hover {
			cursor: pointer;
			background-color: ${darkgold};
			color: black;
		}
	}
`;
