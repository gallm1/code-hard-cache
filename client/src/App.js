import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CreateTerm from "./pages/CreateTerm";
import Terms from "./pages/Terms";
import Home from "./pages/Home";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { deepPurple, green } from "@material-ui/core/colors";
import { StoreProvider, useStoreContext } from "./utils/GlobalState";
import { useState } from "react";

const theme = createMuiTheme({
	palette: {
		primary: deepPurple,
		secondary: green,
	},
	typography: {
		fontFamily: "Montserrat",
		fontWeightLight: 400,
		fontWeightRegular: 500,
		fontWeightMedium: 600,
		fontWeightBold: 700,
	},
});

function App() {
	const [search, setSearch] = useState("");
	// const [state, dispatch] = useStoreContext();

	const handleChange = (e) => {
		e.persist();
		e.preventDefault();
		setSearch((cur) => e.target.value);

		// dispatch({
		// 	type: UPDATE_SEARCH,
		// 	search: e.target.value,
		// });
		// state.search = "";
	};

	return (
		<ThemeProvider theme={theme}>
			<Router>
				<StoreProvider>
					<Nav onChange={handleChange} search={search} />
					<Switch>
						<Route exact path="/">
							<Home query={search} />
						</Route>
						<Route exact path="/sign-in" />
						<Route exact path="/create-term" component={CreateTerm} />
					</Switch>
					<Footer />
				</StoreProvider>
			</Router>
		</ThemeProvider>
	);
}

export default App;
