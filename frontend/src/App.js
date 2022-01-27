import "./App.css";
import React, { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import AccountAccess from "./components/AccountAccess/AccountAccess";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Orders/Orders";
import Supplies from "./components/Supplies/Supplies";
import Plans from "./components/Plans/Plans";
import { updateAccount } from "./utils/api";
function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const defaultUser = { username: "guest", cookie: "" };

	const [activeUser, setActiveUser] = useState({ ...defaultUser });

	useEffect(() => {
		let loggedInUser;
		if (localStorage.getItem("activeUser")) {
			loggedInUser = JSON.parse(localStorage.getItem("activeUser"));
		}
		const today = new Date(Date.now());
		if (loggedInUser && loggedInUser.username !== "guest") {
			const foundUser = loggedInUser;

			if (foundUser.cookie.expires > today.toISOString()) {
				return setActiveUser(foundUser);
			} else {
				setActiveUser(defaultUser);
				localStorage.setItem("activeUser", "");
			}
		}
	}, []);

	const handleSignOut = async () => {
		const abortController = new AbortController();
		const updatedUser = activeUser;
		delete updatedUser["cookie"];
		delete updatedUser["loggedin"];
		await updateAccount(
			Number(activeUser.user_id),
			updatedUser,
			abortController.signal
		);
		setActiveUser(defaultUser);
		localStorage.setItem("activeUser", "");
		window.location.href = "/";
	};

	// window.addEventListener("beforeunload", async (e) => {
	// 	e.preventDefault();
	// 	const abortController = new AbortController();
	// 	const updatedUser = activeUser;
	// 	delete updatedUser["cookie"];
	// 	delete updatedUser["loggedin"];
	// 	await updateAccount(
	// 		Number(activeUser.user_id),
	// 		updatedUser,
	// 		abortController.signal
	// 	);
	// 	localStorage.setItem("activeUser", "");
	// });

	return (
		<div className="App">
			{activeUser.username !== "guest" && (
				<div className="sign-out-button">
					<button onClick={() => handleSignOut()}>Sign out</button>
				</div>
			)}
			<Routes>
				<Route
					path="/"
					exact
					element={<Home activeUser={activeUser} />}
				/>

				<Route
					path="accounts"
					exact
					element={
						<AccountAccess
							loggedIn={loggedIn}
							setLoggedIn={setLoggedIn}
							activeUser={activeUser}
							setActiveUser={setActiveUser}
						/>
					}
				/>

				<Route
					path="dashboard"
					exact
					element={<Dashboard activeUser={activeUser} />}
				/>
				<Route path="plans" exact element={<Plans />} />
				<Route path="orders" exact element={<Orders />} />
				<Route
					path="supplies"
					exact
					element={
						<Supplies
							activeUser={activeUser}
							setActiveUser={setActiveUser}
						/>
					}
				/>
			</Routes>
		</div>
	);
}

export default App;
