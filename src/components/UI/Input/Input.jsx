import React from "react";

import "./Input.scss";

const Input = ({ inputAttributes, labelAttributes, isValid, errorMessage }) => {
	const inputClasses = [
		"form-input",
		inputAttributes.value && "shrink",
		!isValid && "invalid",
	];

	const error = !isValid && (
		<span className="error-message">{errorMessage}</span>
	);
	return (
		<div className="group">
			<input className={inputClasses.join(" ")} {...inputAttributes} />
			<label className="form-input-label" htmlFor={labelAttributes.htmlFor}>
				{labelAttributes.value}
			</label>
			{error}
		</div>
	);
};

export default Input;
