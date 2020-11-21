import React, { Component, Fragment } from "react";

import Header from "../../components/Navigation/Header/Header";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
	state = {
		showSideDrawer: false,
	};

	handleCloseSideDrawer = () => {
		this.setState((prevState) => ({
			showSideDrawer: !prevState.showSideDrawer,
		}));
	};
	render() {
		const { children, user } = this.props;
		const { showSideDrawer } = this.state;
		return (
			<Fragment>
				<Header
					closeSideDrawer={this.handleCloseSideDrawer}
					isAuth={user !== null}
				/>
				<SideDrawer
					show={showSideDrawer}
					isAuth={user !== null}
					close={this.handleCloseSideDrawer}
				/>
				<main>{children}</main>
			</Fragment>
		);
	}
}

export default Layout;
