import styled from "styled-components";
import {
	darkgold,
	darkOrange,
	outerBackgroundColor,
} from "../../../../App.variables";

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
			justify-content: center;
			background-color: inherit;
			margin-bottom: 2px;
			align-items: center;

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
				width: 30%;
				border: none;
				padding: 0.5rem;
				border-radius: 3px;
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
			background-color: lime;
			color: black;
		}
	}

	.cancel {
		background-color: ${outerBackgroundColor};
		border: 1px solid red;
		color: red;

		:hover {
			background-color: red;
			color: black;
		}
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

	#btn-row {
		margin-top: 10px;
	}
`;
