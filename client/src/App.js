import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import SignIn from "./pages/Login";
import CreateTerm from "./pages/CreateTerm";
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

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<Router>
					<Nav />
					<Switch>
						<Route exact path="/create-term" component={CreateTerm} />
					</Switch>
				</Router>
			</ThemeProvider>
		);
	}
}

export default App;
