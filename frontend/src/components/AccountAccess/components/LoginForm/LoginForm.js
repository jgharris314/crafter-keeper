import React, { useState } from "react";
// import { useLocation } from "react-router-dom";
import { StyledLoginForm } from "./login-form.styles";
import { login } from "../../../../utils/api";

const LoginForm = ({ loggedIn, setLoggedIn, activeUser, setActiveUser }) => {
	const initialFormData = { username: "", password: "" };
	// const history = useLocation();
	const [formData, setFormData] = useState({ ...initialFormData });

	async function handleLogin(e) {
		e.preventDefault();

		const abortController = new AbortController();
		await login(formData, abortController.signal).then(setActiveUser);

		setLoggedIn(true);
		return () => abortController.abort;
	}

	const handleChange = ({ target }) => {
		const value = target.value;
		setFormData({
			...formData,
			[target.name]: value,
		});
	};
	const handleCancel = () => {
		setFormData({ ...initialFormData });
		// history.push("/");
	};

	return (
		<StyledLoginForm>
			<form onSubmit={(e) => handleLogin(e)} className="login-form">
				<div className="login-form-row">
					<label className="login-form-row-label" htmlFor="userName">
						User Name:
					</label>
					<input
						className="login-form-row-input"
						type="text"
						// pattern="(?=.*[a-z])(?=.*[A-Z].{3,})"
						name="username"
						id="username"
						onChange={handleChange}
					/>
				</div>

				<div className="login-form-row">
					<label className="login-form-row-label" htmlFor="password">
						Password:
					</label>
					<input
						className="login-form-row-input"
						type="password"
						name="password"
						id="password"
						onChange={handleChange}
						// pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
					/>
				</div>
				<div className="login-form-row">
					<button className="login-form-row-btn submit" type="submit">
						Sign In
					</button>
					<button
						className="login-form-row-btn cancel"
						onClick={handleCancel}
					>
						Cancel
					</button>
				</div>
			</form>
		</StyledLoginForm>
	);
};

export default LoginForm;