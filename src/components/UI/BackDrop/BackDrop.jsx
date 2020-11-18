import React, { Component } from "react";

import "./BackDrop.scss";
class BackDrop extends Component {
	componentDidUpdate() {
		const { show } = this.props;
		document.body.style.overflow = show ? "hidden" : "scroll";
	}
	render() {
		const { show, clicked } = this.props;
		return show ? <div className="back-drop" onClick={clicked} /> : null;
	}
}

export default BackDrop;
