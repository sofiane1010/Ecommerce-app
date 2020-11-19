import React, { Component } from "react";

import "./SignUp.scss";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
class SignUp extends Component {
	state = {
		formInputs: {
			fullName: {
				inputAttributes: {
					name: "fullName",
					type: "text",
					value: "",
					onChange: (e) => this.updateInputValue(e),
					required: true,
				},
				labelAttributes: {
					htmlFor: "fullName",
					value: "Full Name",
				},
			},
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
			},
			confirmPassword: {
				inputAttributes: {
					name: "confirmPassword",
					type: "password",
					value: "",
					onChange: (e) => this.updateInputValue(e),
					required: true,
				},
				labelAttributes: {
					htmlFor: "confirmPassword",
					value: "Confirm Password",
				},
			},
		},
	};

	handleSubmit = (e) => {
		e.preventDefault();
		this.setState({ email: "", password: "" });
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
			<div className="sign-up">
				<h2>I don't have an account yet</h2>
				<span>Sign up</span>
				<form onSubmit={this.handleSubmit}>
					{inputForm}
					<Button type="submit" color="black">
						Sign up
					</Button>
				</form>
			</div>
		);
	}
}
export default SignUp;
