import React, { useEffect, useState } from "react";
import { StyledCreationForm } from "./creation-form.styles";
import { createAccount } from "../../../../utils/api";

const CreationForm = () => {
	const initialFormData = {
		username: "",
		email: "",
		password: "",
		first_name: "",
		last_name: "",
		account_type: "free",
		plans: { data: [] },
		orders: { data: [] },
		supplies: { data: [] },
	};

	const [formData, setFormData] = useState({ ...initialFormData });
	const [accountCreated, setAccountCreated] = useState();
	const [error, setError] = useState();

	const handleCreateAccount = async (e) => {
		e.preventDefault();
		const abortController = new AbortController();
		setError();
		await createAccount(formData, abortController.signal)
			.then(setAccountCreated)
			.catch(setError);

		if (error && !error.message) {
			setAccountCreated(true);
		}
		return () => abortController.abort;
	};

	useEffect(() => {
		if (accountCreated) {
			if (accountCreated.username) {
				setTimeout(() => {
					window.alert("Thank you for joining!");
					window.location.href = "/";
				}, 1000);
			}
		}
	}, [accountCreated]);

	const handleChange = ({ target }) => {
		const value = target.value;
		setFormData({
			...formData,
			[target.name]: value,
		});
	};

	return (
		<StyledCreationForm>
			{error ? <div className="error-div"> {error.message}</div> : null}
			<form
				onSubmit={(e) => handleCreateAccount(e)}
				className="creation-form"
			>
				<div className="creation-form-row">
					<label
						className="creation-form-row-label"
						htmlFor="userName"
					>
						User Name:
					</label>
					<input
						className="creation-form-row-input"
						type="text"
						pattern="^[A-Za-z0-9._-]*$"
						name="username"
						id="username"
						onChange={handleChange}
						required
					/>
				</div>
				<div className="creation-form-row">
					<label className="creation-form-row-label" htmlFor="email">
						Email:
					</label>
					<input
						className="creation-form-row-input"
						type="email"
						name="email"
						id="email"
						onChange={handleChange}
						required
					/>
				</div>
				<div className="creation-form-row">
					<label
						className="creation-form-row-label"
						htmlFor="password"
					>
						Password:
					</label>
					<input
						className="creation-form-row-input"
						type="password"
						name="password"
						id="password"
						onChange={handleChange}
						required
						pattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$"
						placeholder={"8 letters 1 upper 1 #"}
					/>
				</div>

				<div className="creation-form-row" id="btn-row">
					<button
						className="creation-form-row-btn submit"
						type="submit"
					>
						Create
					</button>
				</div>
			</form>
		</StyledCreationForm>
	);
};

export default CreationForm;
