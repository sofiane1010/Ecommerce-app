import React from "react";
import { connect } from "react-redux";

import "./Auth.scss";

import { selectUserLoading } from "../../redux/selectors";
import Spinner from "../../components/UI/Spinner/Spinner";
import SignIn from "../../components/Auth/SignIn/SignIn";
import SignUp from "../../components/Auth/SignUp/SignUp";

const Auth = ({ loading }) => {
	return loading ? (
		<Spinner fullScreen />
	) : (
		<div className="auth">
			<SignIn />
			<SignUp />
		</div>
	);
};

const mapStateToProps = (state) => ({
	loading: selectUserLoading(state),
});

export default connect(mapStateToProps)(Auth);
