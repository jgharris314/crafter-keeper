import styled from "styled-components";
import { darkgold } from "../../../../App.variables";
export const StyledSupplyRow = styled.div`
	display: flex;
	flex-direction: column;
	/* background-color: rosybrown; */
	justify-content: center;
	align-items: center;

	.supply-section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;

		&-row {
			display: flex;
			flex-direction: row;
		}
	}

	.supply-item {
		display: flex;
		flex-direction: column;
		width: 80px;
		margin: 5px;
		height: 50px;
		background-color: rgba(255, 255, 255, 0.2);
		align-items: center;
		justify-content: center;
	}

	.increment-btn {
		background-color: ${darkgold};
		width: 25px;
		height: 25px;
		margin: 2px;
	}

	.btn-row {
		margin-top: 0px;
		justify-content: right;
		display: flex;
		flex-direction: row;
	}

	.remove-btn {
		background-color: red;
		width: 25px;
		height: 25px;
		margin: 2px;
	}
`;
