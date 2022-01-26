import React, { useState } from "react";
import { StyledCreateSupply } from "./create-supply.styles";
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

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		if (!validateUniqueSupply(formData)) {
			setActiveUser({
				...activeUser,
				supplies: { data: [...activeUser.supplies.data, formData] },
			});
			setFormData(defaultFormData);
			window.alert("Created");
		} else {
			setError({ message: "Supply already in inventory" });
		}
	};

	const handleChange = ({ target }) => {
		const value =
			target.name === "quantity" ? Number(target.value) : target.value;
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
					<div className="unit-type-infor-display">
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
