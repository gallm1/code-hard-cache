import React, { Component} from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav";
import CreateTerm from "./pages/CreateTerm"
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

				{/* // <div className="App">
        //   <div className="App-header">
        //     <img src={logo} className="App-logo" alt="logo" />
        //     <h2>Welcome to React</h2>
        //   </div>
        //   <p className="App-intro">
        //     To get started, edit <code>src/App.js</code> and save to reload.
        //   </p>
        // </div> */}
			</ThemeProvider>
		);
	}
}

export default App;
