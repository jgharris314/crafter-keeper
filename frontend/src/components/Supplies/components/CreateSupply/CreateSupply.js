import React, { useState } from "react";
import { StyledCreateSupply } from "./create-supply.styles";
import { updateAccount } from "../../../../utils/api";
const CreateSupply = ({ activeUser, setActiveUser }) => {
	const defaultFormData = { supplyName: "", quantity: 0, unitType: "X" };
	const [formData, setFormData] = useState(defaultFormData);
	const [error, setError] = useState();
	const [unitTypeInfo, setUnitTypeInfo] = useState(false);

	const validateUniqueSupply = (newSupply) => {
		return activeUser.supplies.data.find(
			({ supplyName }) => supplyName === newSupply.supplyName
		);
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateUniqueSupply(formData)) {
			setActiveUser({
				...activeUser,
				supplies: { data: [...activeUser.supplies.data, formData] },
			});
			const abortController = new AbortController();
			const updatedUser = activeUser;
			delete updatedUser["cookie"];
			delete updatedUser["loggedin"];
			await updateAccount(
				Number(updatedUser.user_id),
				updatedUser,
				abortController.signal
			);

			setFormData(defaultFormData);
			window.alert("Created");
		} else {
			setError({ message: "Supply already in inventory" });
		}
	};

	window.addEventListener("beforeunload", (e) => {
		e.preventDefault();
		localStorage.setItem("activeUser", JSON.stringify(activeUser));
	});

	const handleChange = ({ target }) => {
		const value =
			target.name === "quantity"
				? Number(target.value)
				: target.name === "supplyName"
				? target.value.charAt(0).toUpperCase() + target.value.slice(1)
				: target.value;
		setFormData({
			...formData,
			[target.name]: value,
		});
	};

	return (
		<StyledCreateSupply>
			{error ? <div className="error-div"> {error.message}</div> : null}
			<form onSubmit={(e) => handleSubmit(e)}>
				<div className="create-supply-row">
					<label
						className="create-supply-row-label"
						htmlFor="supplyName"
					>
						Supply Name
					</label>
					<input
						className="create-supply-row-input"
						type="text"
						name="supplyName"
						id="supplyName"
						value={formData.supplyName}
						onChange={handleChange}
						required
					/>
				</div>
				<div className="create-supply-row">
					<label
						className="create-supply-row-label"
						htmlFor="quantity"
					>
						Quantity
					</label>
					<input
						className="create-supply-row-input"
						type="number"
						name="quantity"
						id="quantity"
						onChange={handleChange}
						value={formData.quantity}
						required
					/>
				</div>
				<div className="create-supply-row">
					<label
						className="create-supply-row-label"
						htmlFor="unitType"
					>
						Unit Type{" "}
						<div
							className="unit-type-info"
							onMouseEnter={() => setUnitTypeInfo(true)}
							onMouseLeave={() => setUnitTypeInfo(false)}
						>
							?
						</div>
					</label>

					<input
						className="create-supply-row-input"
						type="text"
						name="unitType"
						id="unitType"
						onChange={handleChange}
						value={formData.unitType}
					/>
				</div>
				{unitTypeInfo ? (
					<div className="unit-type-info-display">
						lbs, yds, cm, etc. Defaults to X for a plain count
					</div>
				) : null}
				<div className="create-supply-row" id="btn-row">
					<button
						className="create-supply-row-btn submit"
						type="submit"
					>
						Create
					</button>
				</div>
			</form>
		</StyledCreateSupply>
	);
};

export default CreateSupply;
