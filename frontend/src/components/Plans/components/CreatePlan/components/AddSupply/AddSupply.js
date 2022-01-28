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
		console.log(formData);
		if (!validateUniqueSupply(formData)) {
			setNeededSupplies([...neededSupplies, formData]);
			setError();
			setRerender(!rerender);
		} else {
			setError({ message: "Supply already in inventory" });
		}
	};

	return (
		<StyledAddSupply>
			{error ? <div className="error-div"> {error.message}</div> : null}
			<div className="create-plan-row supply">
				<label className="create-plan-row-label" htmlFor="supplyName">
					Supply Name
				</label>
				<select name="supplyName" onChange={handleChange}>
					{activeUser.supplies.data.map((supply, index) => {
						return (
							<option value={supply.supplyName}>
								{supply.supplyName}
							</option>
						);
					})}
				</select>
				<label className="create-plan-row-label" htmlFor="amountNeeded">
					Amount Needed
				</label>
				<input
					className="create-plan-row-input"
					type="number"
					name="amountNeeded"
					id="amountNeeded"
					defaultValue={0}
					onChange={handleChange}
					required
				/>
			</div>
			<div className="create-plan-row" id="btn-row">
				<button
					className="create-plan-row-btn submit"
					onClick={(e) => handleSubmit(e)}
				>
					Create Supply
				</button>
			</div>
		</StyledAddSupply>
	);
};

export default AddSupply;
