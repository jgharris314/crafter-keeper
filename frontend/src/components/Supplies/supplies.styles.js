import styled from "styled-components";
import { outerBackgroundColor, darkgold } from "../../App.variables";
export const StyledSupplies = styled.div`
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
		width: 100%;
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

	.supply-categories {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		width: 175px;

		&-item {
			font-size: 20px;
		}
	}
`;
