import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { signOut } from "../../../firebase.utils";

class Signout extends Component {
	componentDidMount() {
		signOut();
	}
	render() {
		return <Redirect to="/" />;
	}
}

export default Signout;
