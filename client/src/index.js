import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import registerServiceWorker from "./registerServiceWorker";

ReactDOM.render(
	<Auth0Provider
		domain="dev-re-7n09f.us.auth0.com"
		clientId="BEzFtfWhqCKmukdaAI0WfwM6CWrybfpZ"
		redirectUri={window.location.origin}
	>
		<App />
	</Auth0Provider>,
	document.getElementById("root")
);
registerServiceWorker();
