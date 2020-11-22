import React from "react";

import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Logo from "../../UI/Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import "./Header.scss";

const Header = ({ closeSideDrawer }) => (
	<header className="header">
		<BurgerMenu clicked={closeSideDrawer} />
		<Logo />
		<nav className="nav-bar">
			<NavigationLinks />
		</nav>
	</header>
);

export default Header;
