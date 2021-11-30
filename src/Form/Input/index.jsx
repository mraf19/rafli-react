import React from "react";

const Input = ({ label, type, name, onChange }) => {
	return (
		<div>
			<label htmlFor={name}> {label}: </label>
			<br />
			<input
				type={type}
				name={name}
				id={name}
				onChange={(e) => onChange(e.target.value)}
			/>
			<br />
		</div>
	);
};
export default Input;
