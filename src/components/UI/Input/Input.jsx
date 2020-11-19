import React from "react";

import "./Input.scss";

const Input = ({ inputAttributes, labelAttributes }) => {
	const inputClasses = ["form-input", inputAttributes.value ? "shrink" : null];
	return (
		<div className="group">
			<input className={inputClasses.join(" ")} {...inputAttributes} />
			<label className="form-input-label" htmlFor={labelAttributes.htmlFor}>
				{labelAttributes.value}
			</label>
		</div>
	);
};

export default Input;
