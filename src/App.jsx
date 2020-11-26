import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { db, auth } from "./firebase.utils";
import { connect } from "react-redux";
import * as action from "./redux/actions";

import Layout from "./hoc/Layout/Layout";
import Shop from "./pages/Shop/Shop";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Signout from "./pages/Auth/Signout/Signout";
import Checkout from "./pages/Checkout/Checkout";
import "./App.scss";

class App extends Component {
	componentDidMount() {
		const { setCurrentUser, setBasketItems } = this.props;
		const items = localStorage.getItem("basket-items");
		const initialItemsState = {
			basketItems: [],
			numberOfItems: 0,
			totalPrice: 0,
		};
		setBasketItems(JSON.parse(items) || initialItemsState);
		auth.onAuthStateChanged((user) => {
			if (user) {
				const userRef = db.doc(`users/${user.uid}`);
				userRef.onSnapshot((snapshot) => {
					setCurrentUser({
						id: snapshot.id,
						...snapshot.data(),
					});
				});
			} else setCurrentUser(null);
		});
		window.addEventListener("beforeunload", this.registerItemsInLocalStorage);
	}

	registerItemsInLocalStorage = () => {
		const { items } = this.props;
		localStorage.setItem("basket-items", JSON.stringify(items));
	};

	componentWillUnmount() {
		window.removeEventListener(
			"beforeunload",
			this.registerItemsInLocalStorage
		);
	}
	render() {
		const { isAuth, items } = this.props;
		return (
			<Layout>
				<Switch>
					<Route path="/signout" component={Signout} />
					<Route
						path="/auth"
						render={() => (isAuth ? <Redirect to="/" /> : <Auth />)}
					/>
					<Route
						path="/checkout"
						render={() =>
							items.numberOfItems ? <Checkout /> : <Redirect to="/" />
						}
					/>
					<Route path="/shop" component={Shop} />
					<Route exact path="/" component={Home} />
					<Redirect to="/" />
				</Switch>
			</Layout>
		);
	}
}

const mapStateToProps = ({ user, shop }) => ({
	isAuth: user.currentUser,
	items: shop,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(action.setCurrentUser(user)),
	setBasketItems: (items) => dispatch(action.setBasketItems(items)),
});
App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
