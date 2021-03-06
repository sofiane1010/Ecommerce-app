import React, { Component } from "react";
import { connect } from "react-redux";
import {
	signInWithGoogle,
	signIn,
	createNewPorfileDocument,
} from "../../../firebase.utils";

import "./SignIn.scss";

import { selectUserError } from "../../../redux/selectors";
import * as action from "../../../redux/actions";
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

	checkInputValidity = (regex, value) => regex.test(value);

	checkFormValidity = (formInputs) => {
		return Object.values(formInputs).reduce((obj, current) => {
			current.isValid = this.checkInputValidity(
				patterns[current.inputAttributes.name],
				current.inputAttributes.value
			);
			obj[current.inputAttributes.name] = current;

			return obj;
		}, {});
	};

	handleSignInWithGoogle = async () => {
		try {
			const { user } = await signInWithGoogle();
			await createNewPorfileDocument(user, null, true);
		} catch (error) {
			console.error(error.message);
		}
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { dispatch } = this.props;
		const { formInputs } = this.state;
		const { email, password } = formInputs;
		const updatedFormInputs = this.checkFormValidity(formInputs);
		const formIsValid = Object.values(updatedFormInputs)
			.map(({ isValid }) => isValid)
			.every((isValid) => isValid);
		this.setState({ formInputs: updatedFormInputs });
		if (formIsValid) {
			dispatch(action.authStart());
			try {
				await signIn(
					email.inputAttributes.value,
					password.inputAttributes.value
				);
				dispatch(action.authSuccess());
			} catch (error) {
				dispatch(action.authFail(error.message, "signIn"));
			}
		}
	};

	render() {
		const { formInputs } = this.state;
		const { error } = this.props;
		const inputForm = Object.entries(formInputs).map(([key, value]) => (
			<Input key={key} {...value} />
		));
		const errorMessage = error ? (
			<p className="error-form-message">{error}</p>
		) : null;

		return (
			<div className="sign-in">
				<h2>I already have an account</h2>
				<span>Sign in with your email and password</span>
				<form onSubmit={(e) => this.handleSubmit(e)}>
					{inputForm}
					{errorMessage}
					<Button type="submit" color="black">
						Sign in
					</Button>
					<Button
						type="button"
						onClick={this.handleSignInWithGoogle}
						color="orange"
					>
						Login with Google
					</Button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	error: selectUserError(state).signIn,
});

export default connect(mapStateToProps)(SignIn);
