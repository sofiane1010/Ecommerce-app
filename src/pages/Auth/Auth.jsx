import React from "react";

import "./Auth.scss";
import SignIn from "../../components/Auth/SignIn/SignIn";
import SignUp from "../../components/Auth/SignUp/SignUp";

const Auth = (props) => {
	return (
		<div className="auth">
			<SignIn />
			<SignUp />
		</div>
	);
};

export default Auth;
