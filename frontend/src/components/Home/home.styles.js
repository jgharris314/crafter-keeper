import styled from "styled-components";
import { outerBackgroundColor } from "../../App.variables";

export const StyledHome = styled.div`
	background-color: ${outerBackgroundColor};
	color: white;
	width: 100%;
	text-align: center;
	height: 100vh;
	display: flex;
	/* padding-top: 25%; */
	align-items: center;
	justify-content: center;
	font-size: 52px;
	flex-direction: column;

	h1 {
		margin: 0;
	}

	.account-access-button {
		display: flex;
		margin-top: 50px;
		width: 90px;
		background-color: lime;
		color: black;
		font-weight: bolder;
		font-size: 50px;
		padding: 0;
		border-radius: 50px;

		justify-content: center;
		align-items: center;
		&:hover {
			cursor: pointer;
		}
	}
`;
