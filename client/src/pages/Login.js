import React, { useState, useEffect } from "react";
import API from "../utils/API";
import { Link } from "react-router-dom";
import { Nav } from "../components/Nav";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
//username input
//password input
//login button
const Login = () => {
	return (
		<Container>
			<form noValidate autoComplete="off">
				<TextField id="outlined-basic" label="Username" variant="outlined" />
				<TextField id="outlined-basic" label="Password" variant="outlined" />
				<Button variant="contained" color="primary">
					LOGIN
				</Button>
			</form>
		</Container>
	);
};

export default Login;
