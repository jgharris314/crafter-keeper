import styled from "styled-components";
import { darkgold, darkOrange } from "../../../../App.variables";

export const StyledCreationForm = styled.div`
	width: 85%;
	background-color: transparent;
	color: white;
	position: relative;
	margin: 0 auto;
	border-radius: 10px;
	padding: 0.5rem;

	.creation-form {
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

		display: flex;
		flex-direction: column;
		background-color: inherit;

		&-row {
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			background-color: inherit;
			margin-bottom: 2px;

			&-label {
				display: flex;
				flex-direction: column;
				width: 40%;
				background-color: inherit;
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
				margin: 10px auto;
				width: 50%;
				border: none;
				padding: 0.5rem;
				border-radius: 3px;
				color: black;
				font-weight: bold;
				margin: 0.125rem;
			}
		}
	}

	.submit {
		background-color: ${darkgold};
		background-image: linear-gradient(
			-45deg,
			rgba(199, 144, 14, 0.8),
			rgba(255, 255, 255, 0.4),
			rgba(199, 144, 14, 1)
		);
	}

	.cancel {
		background-color: ${darkOrange};
		background-image: linear-gradient(
			-45deg,
			rgba(210, 74, 0, 0.8),
			rgba(255, 255, 255, 0.4),
			rgba(210, 74, 0, 0.8)
		);
	}

	.password-info {
		font-size: 12px;
		text-align: right;
		background-color: inherit;
		margin-top: 3px;
		margin-bottom: 3px;
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
