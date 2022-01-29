import styled from "styled-components";
import { outerBackgroundColor } from "../../../../../../App.variables";
export const StyledAddSupply = styled.div`
	display: flex;
	flex-direction: column;
	width: 350px;
	border: 1px solid gold;
	padding: 2px;
	background-color: rgba(255, 255, 255, 0.2);
	margin-top: 10px;

	.add-supply {
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
				width: 50px;
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

	.error-div {
		background-color: red;
		height: 30px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		margin: 15px;
		border-radius: 5px;
	}

	.add-supply-btn {
		background-color: ${outerBackgroundColor};
		border: 1px solid lime;
		color: lime;

		:hover {
			cursor: pointer;
			background-color: lime;
			color: black;
		}
	}
`;
