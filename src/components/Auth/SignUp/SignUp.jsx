import React, { Component } from "react";
import { signUp } from "../../../firebase.utils";

import "./SignUp.scss";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

const patterns = {
	fullName: /^[a-zéèçà]+ [a-zéèçà]+$/i,
	email: /^([\w-.éèçà]+)@([\w-]+)\.([a-zéèçà]{2,8})(\.[a-zéèçà]{2,8})*$/,
	password: /^[\w.,-@éè&çà]{6,}$/,
};

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
				isValid: true,
				errorMessage: "**Must contain your full name**",
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
				isValid: true,
				errorMessage: "**Password doesn't match**",
			},
		},
	};

	checkInputValidity = (regex, value) => regex.test(value);

	checkFormValidity = (formInputs) => {
		return Object.values(formInputs).reduce((obj, current) => {
			if (current.inputAttributes.name === "confirmPassword")
				current.isValid =
					obj["password"].inputAttributes.value ===
					current.inputAttributes.value;
			else
				current.isValid = this.checkInputValidity(
					patterns[current.inputAttributes.name],
					current.inputAttributes.value
				);
			obj[current.inputAttributes.name] = current;

			return obj;
		}, {});
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { formInputs } = this.state;
		const { email, password } = formInputs;
		const updatedFormInputs = this.checkFormValidity(formInputs);
		const formIsValid = Object.values(updatedFormInputs)
			.map(({ isValid }) => isValid)
			.every((isValid) => isValid);
		this.setState({ formInputs: updatedFormInputs });

		if (formIsValid) {
			try {
				const { user } = await signUp(
					email.inputAttributes.value,
					password.inputAttributes.value
				);
				console.log(user);
			} catch (error) {
				alert(error.message);
			}
		}
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
