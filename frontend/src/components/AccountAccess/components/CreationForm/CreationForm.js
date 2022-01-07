import React, { useEffect, useState } from "react";
// import { useHistory } from "react-router-dom";
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
	// const history = useHistory();
	const [formData, setFormData] = useState({ ...initialFormData });
	const [failedPass, setFailedPass] = useState(false);
	const [accountCreated, setAccountCreated] = useState(false);
	const validatePassword = () => {
		const pattern = new RegExp("^(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$"); // eslint-disable-line
		const valid = pattern.test(formData.password);

		if (!valid) {
			console.log("password failed");
			setFailedPass(true);
			return;
		}
		return setFailedPass(false);
	};

	const handleCreateAccount = async (e) => {
		//this still sets account created even when the account isn't created IE:there is a repeat username. how to fix??
		e.preventDefault();
		const abortController = new AbortController();
		await createAccount(formData, abortController.signal).then(
			setAccountCreated(true)
		);

		return () => abortController.abort;
	};

	useEffect(() => {
		if (accountCreated) {
			setTimeout(() => {
				window.alert("Thank you for joining!");
				window.location.href = "/";
			}, 1000);
		}
	}, [accountCreated]);

	const handleChange = ({ target }) => {
		const value = target.value;
		setFormData({
			...formData,
			[target.name]: value,
		});
	};
	const handleCancel = () => {
		setFormData({ ...initialFormData });
		window.location.href = "/";
	};

	return (
		<StyledCreationForm>
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
				{failedPass && (
					<div className="password-info">
						At least 8 characters, 1 uppercase, and 1 number
					</div>
				)}
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

				<div className="creation-form-row">
					<button
						className="creation-form-row-btn submit"
						type="submit"
					>
						Create
					</button>
					<button
						className="creation-form-row-btn cancel"
						onClick={handleCancel}
					>
						Cancel
					</button>
				</div>
			</form>
		</StyledCreationForm>
	);
};

export default CreationForm;
