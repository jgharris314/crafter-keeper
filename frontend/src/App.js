import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import AccountAccess from "./components/AccountAccess/AccountAccess";
function App() {
	const [loggedIn, setLoggedIn] = useState(false);

	const defaultUser = { username: "guest" };

	const [activeUser, setActiveUser] = useState(defaultUser);
	return (
		<div className="App">
			Welcome {activeUser.username}!
			<Routes>
				<Route path="/" exact element={<>Home</>} />

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
			</Routes>
		</div>
	);
}

export default App;
