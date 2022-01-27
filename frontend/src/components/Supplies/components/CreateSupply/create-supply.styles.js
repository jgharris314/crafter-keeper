import styled from "styled-components";
import { outerBackgroundColor } from "../../../../App.variables";

export const StyledCreateSupply = styled.div`
	width: 85%;
	background-color: transparent;
	color: white;
	position: relative;
	margin: 0 auto;
	border-radius: 10px;
	padding: 0.5rem;

	.create-supply {
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

		background-color: inherit;
		display: flex;
		flex-direction: column;

		&-row {
			background-color: inherit;
			display: flex;
			flex-direction: row;
			justify-content: center;
			margin-bottom: 2px;
			align-items: center;

			&-label {
				background-color: inherit;
				display: flex;
				flex-direction: column;
				width: 20%;
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

	.submit {
		background-color: ${outerBackgroundColor};
		border: 1px solid lime;
		color: lime;

		:hover {
			cursor: pointer;
			background-color: lime;
			color: black;
		}
	}

	.unit-type-info {
		margin-left: 40%;
		margin-top: 5px;
		display: flex;
		flex-direction: column;
		background-color: rgba(255, 255, 255, 0.2);
		width: 10%;
		border-radius: 25px;

		&-display {
			display: flex;
			flex-direction: row;
			background-color: rgba(255, 255, 255, 0.2);
			width: 30%;
			justify-content: center;
			margin-left: 35%;
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
`;
