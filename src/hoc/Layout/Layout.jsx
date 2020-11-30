import React, { Component, Fragment } from "react";

import Header from "../../components/Navigation/Header/Header";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
	render() {
		const { children } = this.props;
		return (
			<Fragment>
				<Header />
				<SideDrawer />
				<main>{children}</main>
			</Fragment>
		);
	}
}

export default Layout;
