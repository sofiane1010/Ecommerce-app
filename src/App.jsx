import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { db, auth } from "./firebase.utils";
import { connect } from "react-redux";
import * as action from "./redux/actions";
import * as selector from "./redux/selectors";

import "./App.scss";

import Layout from "./hoc/Layout/Layout";
import Shop from "./pages/Shop/Shop";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Signout from "./pages/Auth/Signout/Signout";
import Checkout from "./pages/Checkout/Checkout";

class App extends Component {
	componentDidMount() {
		const { setCurrentUser, setBasketItems } = this.props;
		const items = localStorage.getItem("basket-items");
		const initialItemsState = {
			basketItems: [],
			numberOfItems: 0,
			totalPrice: 0,
			showBasket: false,
		};
		setBasketItems(JSON.parse(items) || initialItemsState);
		auth.onAuthStateChanged(async (user) => {
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
		const { basket } = this.props;
		localStorage.setItem("basket-items", JSON.stringify(basket));
	};

	componentWillUnmount() {
		window.removeEventListener(
			"beforeunload",
			this.registerItemsInLocalStorage
		);
	}
	render() {
		const { isAuth, numberOfItems } = this.props;

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
						render={() => (numberOfItems ? <Checkout /> : <Redirect to="/" />)}
					/>
					<Route path="/shop" component={Shop} />
					<Route exact path="/" component={Home} />
					<Redirect to="/" />
				</Switch>
			</Layout>
		);
	}
}

const mapStateToProps = (state) => ({
	isAuth: selector.selectCurrentUser(state) !== null,
	basket: state.basket,
	numberOfItems: selector.selectNumberOfItems(state),
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(action.setCurrentUser(user)),
	setBasketItems: (items) => dispatch(action.setBasketItems(items)),
});
App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
