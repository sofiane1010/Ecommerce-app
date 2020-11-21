import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { auth } from "./firebase.utils";

import Layout from "./hoc/Layout/Layout";
import Shop from "./pages/Shop/Shop";
import Auth from "./pages/Auth/Auth";
import Home from "./pages/Home/Home";
import Signout from "./pages/Auth/Signout/Signout";
import "./App.scss";

class App extends Component {
	state = {
		user: null,
	};

	componentDidMount() {
		this.unsubscribe = auth.onAuthStateChanged((user) => {
			this.setState({ user: user });
			console.log(user);
		});
	}

	componentWillUnmout() {
		this.unsubscribe();
	}

	render() {
		const { user } = this.state;
		return (
			<Layout user={user}>
				<Switch>
					<Route path="/signout" component={Signout} />
					<Route path="/auth" component={Auth} />
					<Route path="/shop" component={Shop} />
					<Route exact path="/" component={Home} />
					<Redirect to="/" />
				</Switch>
			</Layout>
		);
	}
}

export default App;
