import React, { Component } from "react";

import "./SignIn.scss";
import Input from "../../UI/Input/Input";
import Button from "../../UI/Button/Button";

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
