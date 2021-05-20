import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { withAuthenticationRequired } from "@auth0/auth0-react";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '75%',
    },
  },
  paper: {
    marginTop: theme.spacing(14),
    marginLeft: theme.spacing(14),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}));

const BasicTextFields = () => {
  const classes = useStyles();

  return (
    <div className={classes.paper}>
    <form className={classes.root} noValidate autoComplete="off">
      
      <TextField id="outlined-basic" label="Term/Acronym" placeholder="ex: CSS" variant="outlined" required />
     
      <TextField id="outlined-basic" label="Represents" placeholder="ex: Cascading Style Sheets" variant="outlined" required />
     
      <TextField id="outlined-basic" label="Meaning/Definition" placeholder="ex: A language used to organize and design how a web site looks" variant="outlined" />
   
      <TextField id="outlined-basic" label="Tips/Hyperlinks" placeholder="ex: Insert links to tips or videos here" variant="outlined" />

      <TextField id="outlined-basic" label="User Name" placeholder="Enter your user name handle here" variant="outlined" />

      <Button variant="contained" color="primary">Submit New Term</Button>
    </form>
    
    </div>
  );
};

export default withAuthenticationRequired(BasicTextFields, {
	// Show a message while the user waits to be redirected to the login page.
	onRedirecting: () => <div>Redirecting you to the login page...</div>,
});