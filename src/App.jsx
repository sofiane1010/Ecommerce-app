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
import "./App.scss";

class App extends Component {
	componentDidMount() {
		const { setCurrentUser } = this.props;
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
	}
	render() {
		const { isAuth } = this.props;
		return (
			<Layout>
				<Switch>
					<Route path="/signout" component={Signout} />
					<Route
						path="/auth"
						render={() => (isAuth ? <Redirect to="/" /> : <Auth />)}
					/>
					<Route path="/shop" component={Shop} />
					<Route exact path="/" component={Home} />
					<Redirect to="/" />
				</Switch>
			</Layout>
		);
	}
}

const mapStateToProps = ({ user }) => ({
	isAuth: user.currentUser,
});

const mapDispatchToProps = (dispatch) => ({
	setCurrentUser: (user) => dispatch(action.setCurrentUser(user)),
});
App = connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
