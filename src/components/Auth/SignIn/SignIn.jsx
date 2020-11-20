import React, { Component } from "react";

import "./SignIn.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

const patterns = {
	email: /^([\w-.éèçà]+)@([\w-]+)\.([a-zéèçà]{2,8})(\.[a-zéèçà]{2,8})*$/,
	password: /^[\w.,-@éè&çà]{6,}$/,
};

class SignIn extends Component {
	state = {
		formInputs: {
			email: {
				inputAttributes: {
					name: "email",
					type: "email",
					value: "",
					onChange: (e) => this.updateInputValue(e),
					required: true,
				},
				labelAttributes: {
					htmlFor: "email",
					value: "Email",
				},
				isValid: true,
				errorMessage: "**Must be a valid email**",
			},
			password: {
				inputAttributes: {
					name: "password",
					type: "password",
					value: "",
					onChange: (e) => this.updateInputValue(e),
					required: true,
				},
				labelAttributes: {
					htmlFor: "password",
					value: "Password",
				},
				isValid: true,
				errorMessage: "**Must contain at least 6 alphanumeric caracters**",
			},
		},
	};

	checkValidity = (regex, value) => regex.test(value);

	handleSubmit = (e) => {
		e.preventDefault();
		const { formInputs } = this.state;
		const updatedFormInputs = Object.values(formInputs).reduce(
			(obj, current) => {
				current.isValid = this.checkValidity(
					patterns[current.inputAttributes.name],
					current.inputAttributes.value
				);
				obj[current.inputAttributes.name] = current;

				return obj;
			},
			{}
		);
		// const formIsValid = Object.values(updatedFormInputs)
		// 	.map(({ inputAttributes }) => inputAttributes.isValid)
		// 	.every((isValid) => isValid);

		this.setState({ formInputs: updatedFormInputs });
	};

	updateInputValue = (e) => {
		const { name, value } = e.target;
		const updatedFormInputs = { ...this.state.formInputs };
		const updatedInput = { ...updatedFormInputs[name] };
		const updatedInputAttributes = { ...updatedInput.inputAttributes };
		updatedInputAttributes.value = value;
		updatedInput.inputAttributes = updatedInputAttributes;
		updatedFormInputs[name] = updatedInput;
		this.setState({ formInputs: updatedFormInputs });
	};

	render() {
		const { formInputs } = this.state;
		const inputForm = Object.entries(formInputs).map(([key, value]) => (
			<Input key={key} {...value} />
		));
		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					{inputForm}
					<Button type="submit" color="black">
						Sign in
					</Button>
					<Button type="submit" color="orange">
						Login with Google
					</Button>
				</form>
			</div>
		);
	}
}

export default SignIn;
