import React, { useEffect, useState } from "react";
import { StyledAddSupply } from "./add-supply.styles";

const AddSupply = ({ activeUser, neededSupplies, setNeededSupplies }) => {
	const [rerender, setRerender] = useState(false);
	useEffect(() => {}, [rerender]);
	const [formData, setFormData] = useState();
	const [error, setError] = useState();

	const validateUniqueSupply = (newSupply) => {
		return neededSupplies.find(
			({ supplyName }) => supplyName === newSupply.supplyName
		);
	};

	const findSupply = (newSupply) => {
		if (!newSupply) {
			setError({ message: "Please select a valid supply" });
		}
		return activeUser.supplies.data.find(
			({ supplyName }) => supplyName === newSupply.supplyName
		);
	};

	const handleChange = ({ target }) => {
		const value =
			target.name === "amountNeeded"
				? Number(target.value)
				: target.value;
		setFormData({
			...formData,
			[target.name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		const supplyInfo = findSupply(formData);
		const editedFormData = {
			supplyName: formData.supplyName,
			amountNeeded: formData.amountNeeded,
			unitType: supplyInfo.unitType,
		};

		if (!validateUniqueSupply(formData)) {
			setNeededSupplies([...neededSupplies, editedFormData]);
			setError();
			setRerender(!rerender);
		} else {
			setError({ message: "Supply already in inventory" });
		}
	};

	return (
		<StyledAddSupply>
			{error ? <div className="error-div"> {error.message}</div> : null}
			<div className="add-supply-row supply">
				<label className="add-supply-row-label" htmlFor="supplyName">
					Supply Name
				</label>
				<select name="supplyName" onChange={handleChange}>
					{activeUser.supplies.data.map((supply, index) => {
						return (
							<option
								key={supply.supplyName}
								value={supply.supplyName}
							>
								{supply.supplyName}
							</option>
						);
					})}
					<option selected value={"default"}>
						Select supply
					</option>
				</select>
				<label className="add-supply-row-label" htmlFor="amountNeeded">
					Amount Needed
				</label>
				<input
					className="add-supply-row-input"
					type="number"
					name="amountNeeded"
					id="amountNeeded"
					defaultValue={0}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="add-supply-row">
				<button
					className="add-supply-row-btn add-supply"
					onClick={(e) => handleSubmit(e)}
				>
					Add Supply
				</button>
			</div>
		</StyledAddSupply>
	);
};

export default AddSupply;
