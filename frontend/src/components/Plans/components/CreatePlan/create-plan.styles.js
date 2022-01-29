import styled from "styled-components";
import { darkgold, outerBackgroundColor } from "../../../../App.variables";

export const StyledCreatePlan = styled.div`
	border: 1px solid gold;
	display: flex;
	flex-direction: row;
	justify-content: space-evenly;
	height: 300px;
	width: 85%;

	.create-plan {
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
		background-color: inherit;
		display: flex;
		flex-direction: column;

		&-row {
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin-bottom: 2px;
			align-items: center;

			&-label {
				background-color: inherit;
				display: flex;
				flex-direction: column;
				width: 40%;
			}

			&-input {
				display: flex;
				flex-direction: column;
				background-color: rgba(255, 255, 255, 0.8);
				border: none;
				border-radius: 3px;
				height: 20px;
				padding: 0.125rem;
			}

			&-btn {
				width: 30%;
				margin: 10px auto;

				border: none;
				padding: 0.5rem;
				border-radius: 5px;
				color: black;
				font-weight: bold;
				margin: 5px;
			}
		}
	}

	.supply-list {
		padding-top: 15px;
		display: flex;
		flex-direction: column;
		width: 30%;
		border-right: 1px solid gold;

		h3 {
			margin-top: 0;
		}
	}

	.plan-form {
		padding-top: 15px;
		display: flex;
		flex-direction: column;
		width: 50%;
		align-items: center;
	}

	.error-div {
		background-color: red;
		height: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 15px;
		border-radius: 5px;
	}

	#btn-row {
		width: 100%;
		margin-top: 30px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
	.create-plan-btn {
		background-color: ${outerBackgroundColor};
		border: 1px solid lime;
		color: lime;
		margin: 5px;

		:hover {
			cursor: pointer;
			background-color: lime;
			color: black;
		}
	}
	.toggle {
		background-color: ${outerBackgroundColor};
		border: 1px solid ${darkgold};
		color: ${darkgold};
		margin: 5px;
		:hover {
			cursor: pointer;
			background-color: lime;
			color: black;
		}
	}
`;
