import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import CreateTerm from "./pages/CreateTerm";
import Terms from "./pages/Terms";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import { deepPurple, green } from "@material-ui/core/colors";

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
					<Nav />
					<Switch>
						<Route exact path="/" />
						<Route exact path="/sign-in" />
						<Route exact path="/create-term" component={CreateTerm} />
						<Route exact path="/search-results" component={Terms} />
					</Switch>
					<Footer />
				</Router>
			</ThemeProvider>
		);
}

export default App;
