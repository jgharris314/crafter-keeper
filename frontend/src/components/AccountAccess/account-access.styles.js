import styled from "styled-components";

export const StyledAccountAccess = styled.div`
	font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;

	/* background-image: linear-gradient(
		-45deg,
		rgba(29, 32, 42, 1),
		rgba(0, 0, 0, 0.9),
		rgba(29, 32, 42, 1),
		rgba(0, 0, 0, 0.9),
		rgba(29, 32, 42, 1)
	); */
	/* box-shadow: 1px -1px 10px rgba(255, 255, 255, 0.3) inset,
		-1px 1px 10px rgba(255, 255, 255, 0.3) inset; */
	width: 100%;
	/* height: 85vh; */
	/* position: relative; */
	margin: 0 auto;
	/* border-radius: 10px; */
	/* padding: 0.5rem; */
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
