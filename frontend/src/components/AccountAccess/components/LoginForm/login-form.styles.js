import styled from "styled-components";

import { darkgold, darkOrange } from "../../../../App.variables";

export const StyledLoginForm = styled.div`
	width: 85%;
	background-color: transparent;
	color: white;
	position: relative;
	margin: 0 auto;
	border-radius: 10px;
	padding: 0.5rem;

	.login-form {
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

		background-color: inherit;
		display: flex;
		flex-direction: column;

		&-row {
			background-color: inherit;
			display: flex;
			flex-direction: row;
			justify-content: space-evenly;
			margin-bottom: 2px;

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
				width: 50%;
				margin: 10px auto;

				border: none;
				padding: 0.5rem;
				border-radius: 5px;
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
