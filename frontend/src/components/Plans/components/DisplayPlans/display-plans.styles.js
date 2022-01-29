import styled from "styled-components";

export const StyledDisplayPlans = styled.div`
	display: flex;
	flex-direction: column;
	border: 1px solid gold;
	width: 20%;

	.listed-plan-even {
		border-bottom: 1px solid black;
		background-color: #4e4f54;
		height: 30px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.listed-plan-odd {
		border-bottom: 1px solid gold;
		height: 30px;
		display: flex;
		flex-direction: row;
		justify-content: flex-end;
		align-items: center;
	}

	.btn-section {
		margin-left: 35%;
	}
`;
