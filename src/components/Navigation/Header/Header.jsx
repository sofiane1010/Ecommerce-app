import React from "react";

import NavigationLinks from "../NavigationLinks/NavigationLinks";
import Logo from "../../UI/Logo/Logo";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

import "./Header.scss";

const Header = ({ closeSideDrawer, isAuth }) => (
	<header className="header">
		<BurgerMenu clicked={closeSideDrawer} />
		<Logo />
		<nav className="nav-bar">
			<NavigationLinks isAuth={isAuth} />
		</nav>
	</header>
);

export default Header;
