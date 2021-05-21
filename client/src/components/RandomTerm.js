import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../index.css";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "65%",
		marginTop: theme.spacing(4),
	},
	paper: {
		// marginTop: theme.spacing(),
		// marginLeft: theme.spacing(1),
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
	},
	bullet: {
		display: "inline-block",
		margin: "0 2px",
		transform: "scale(0.8)",
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
		marginTop: 4,
	},
	mainTerm: {
		marginBottom: 12,
	},
}));

export default function OutlinedCard() {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<div className={classes.paper}>
			<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography className={classes.title} color="primary" gutterBottom>
						Code | Hard | Cache --- Random Term of the Moment
					</Typography>
					<Typography
						className="card-title"
						variant="h6"
						component="h2"
						color="secondary"
					>
						Term:
					</Typography>
					<Typography
						className={classes.mainTerm}
						variant="h4"
						component="h2"
						color="primary"
					>
						CHC
					</Typography>
					<Typography
						className="card-title"
						variant="h6"
						component="h2"
						color="secondary"
					>
						Represents:
					</Typography>
					<Typography className={classes.pos} color="primary">
						CODE|HARD|CACHE
					</Typography>
					<Typography
						className="card-title"
						variant="h6"
						component="h2"
						color="secondary"
					>
						Meaning:
					</Typography>
					<Typography className={classes.pos} color="primary">
						The best application to learn coding acronyms and what they represent
					</Typography>
					<Typography
						className="card-title"
						variant="h6"
						component="h2"
						color="secondary"
					>
						Tips/Links:
					</Typography>
					<Typography className={classes.pos} color="primary">
						https://code-hard-cache.herokuapp.com/
					</Typography>
					<Typography variant="body2" component="p" color="primary">
						User : SF MG
					</Typography>
					<Typography variant="body2" component="p" color="primary">
						Date : May 21 2021
					</Typography>
				</CardContent>
				{/* <CardActions>
        <Button size="small">Tips/HyperLinks</Button>
      </CardActions> */}
			</Card>
		</div>
	);
}
