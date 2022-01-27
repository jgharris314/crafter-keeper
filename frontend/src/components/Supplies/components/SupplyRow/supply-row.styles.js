import styled from "styled-components";

export const StyledSupplyRow = styled.div`
	display: flex;
	flex-direction: column;
	background-color: rosybrown;
	justify-content: center;
	align-items: center;

	.supply-section {
		display: flex;
		flex-direction: row;
	}

	.supply-item {
		display: flex;
		flex-direction: column;
		width: 50px;
		margin-left: 5px;
		background-color: green;
	}

	.increment-btn {
		background-color: rgba(255, 255, 255, 0.2);
		width: 25px;
		margin-top: 5px;
	}
`;
