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
import { StoreProvider } from "./utils/GlobalState";

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


		return (
			<ThemeProvider theme={theme}>
				<Router>
					<StoreProvider>
					<Nav />
					<Switch>
						<Route exact path="/" component={Home} />
						<Route exact path="/sign-in" />
						<Route exact path="/create-term" component={CreateTerm} />
						<Route exact path="/" component={Terms} />
					</Switch>
					<Footer />
					</StoreProvider>
				</Router>
			</ThemeProvider>
		);
}

export default App;
