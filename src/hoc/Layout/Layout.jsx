import React, { Component, Fragment } from "react";

import Header from "../../components/Navigation/Header/Header";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
	state = {
		showSideDrawer: false,
		showBasketDropDown: false,
	};

	handleCloseSideDrawer = () => {
		this.setState((prevState) => ({
			showSideDrawer: !prevState.showSideDrawer,
		}));
	};

	handleBasketDropDownState = () => {
		this.setState((prevState) => ({
			showBasketDropDown: !prevState.showBasketDropDown,
		}));
	};
	render() {
		const { children, user } = this.props;
		const { showSideDrawer, showBasketDropDown } = this.state;
		return (
			<Fragment>
				<Header
					showBasket={showBasketDropDown}
					toggleBasketDropDown={this.handleBasketDropDownState}
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
