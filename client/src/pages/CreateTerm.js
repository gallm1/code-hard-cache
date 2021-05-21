import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { withAuthenticationRequired } from "@auth0/auth0-react";
import { useEffect, useState } from "react";
import API from "../utils/API";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		"& > *": {
			margin: theme.spacing(1),
			width: "75%",
		},
	},
	paper: {
		marginTop: theme.spacing(14),
		marginLeft: theme.spacing(14),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
}));

const BasicTextFields = () => {
	const history = useHistory();
	const classes = useStyles();
	const [term, setTerm] = useState({
		term: "",
		represents: "",
		meaning: "",
		date: "",
		tips: "",
		user: "",
	});

	function handleChange(e) {
		const { value, name } = e.target;
		setTerm({ ...term, [name]: value });
	}
	console.log(term);

	function handleSubmit(e) {
		API.saveTerm(term).then((res) => console.log(res));
		history.push("/");
	}

	return (
		<div className={classes.paper}>
			<form
				onSubmit={handleSubmit}
				className={classes.root}
				noValidate
				autoComplete="off"
			>
				<TextField
					onChange={handleChange}
					value={term.term}
					id="outlined-basic"
					name="term"
					label="Term/Acronym"
					placeholder="ex: CSS"
					variant="outlined"
					required
				/>

				<TextField
					onChange={handleChange}
					value={term.represents}
					name="represents"
					id="outlined-basic"
					label="Represents"
					placeholder="ex: Cascading Style Sheets"
					variant="outlined"
					required
				/>

				<TextField
					onChange={handleChange}
					value={term.meaning}
					name="meaning"
					id="outlined-basic"
					label="Meaning/Definition"
					placeholder="ex: A language used to organize and design how a web site looks"
					variant="outlined"
				/>

				<TextField
					onChange={handleChange}
					value={term.tips}
					name="tips"
					id="outlined-basic"
					label="Tips/Hyperlinks"
					placeholder="ex: Insert links to tips or videos here"
					variant="outlined"
				/>

				<TextField
					onChange={handleChange}
					value={term.user}
					name="user"
					id="outlined-basic"
					label="User Name"
					placeholder="Enter your user name handle here"
					variant="outlined"
				/>

				<Button variant="contained" color="primary" type="submit">
					Submit New Term
				</Button>
			</form>
		</div>
	);
};

export default withAuthenticationRequired(BasicTextFields, {
	// Show a message while the user waits to be redirected to the login page.
	onRedirecting: () => <div>Redirecting you to the login page...</div>,
});
