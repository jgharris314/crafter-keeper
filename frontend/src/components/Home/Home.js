import React from "react";
import { StyledHome } from "./home.styles";

const Home = ({}) => {
	return (
		<StyledHome>
			<h1>CrafterKeeper</h1>
			<br />
			Your one stop to help manage shop!
			<div
				className="account-access-button"
				onClick={() => (window.location.href = "/accounts")}
			>{`>`}</div>
		</StyledHome>
	);
};

export default Home;
