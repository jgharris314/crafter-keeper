import styled from "styled-components";

export const StyledAccountAccess = styled.div`
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
	width: 100%;
	margin: 0 auto;
	border: none;
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	h3 {
		padding-top: 10px;
		text-align: center;
		background-color: transparent;
		color: white;
		font-weight: normal;
		font-size: 2rem;
	}
	.radio-form {
		font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
		font-size: 1rem;
		margin: 5px;
		background-color: transparent;
		position: relative;
		margin: 0 auto;
		text-align: center;
		width: 100%;

		&-label {
			margin-right: 20px;
			margin-left: 5px;
			background-color: inherit;
			color: white;
		}
	}
`;
