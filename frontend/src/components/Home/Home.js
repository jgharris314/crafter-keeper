import React from "react";
import { StyledHome } from "./home.styles";

const Home = ({ activeUser }) => {
	return (
		<StyledHome>
			<h1>CrafterKeeper</h1>
			<br />
			Your one stop to help manage shop! {activeUser.username}
			<div
				className="account-access-button"
				onClick={() => (window.location.href = "/accounts")}
			>{`>`}</div>
		</StyledHome>
	);
};

export default Home;
