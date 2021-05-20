import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import "../index.css";

const useStyles = makeStyles((theme) => ({
	root: {
		width: "65%",
		marginTop: theme.spacing(10),
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

export default function OutlinedCard({ term, rep, meaning, date, tips, user }) {
	const classes = useStyles();
	const bull = <span className={classes.bullet}>•</span>;

	return (
		<div className={classes.paper}>
			<Card className={classes.root} variant="outlined">
				<CardContent>
					<Typography className={classes.title} color="primary" gutterBottom>
						Code | Hard | Cache --- Search Result
					</Typography>
					<Typography
						className="card-title"
						variant="h6"
						component="h2"
						color="secondary"
					>
						Term: {term}
					</Typography>
					<Typography
						className={classes.mainTerm}
						variant="h4"
						component="h2"
						color="primary"
					>
						{"ex: CSS; (term from db)"}
					</Typography>
					<Typography
						className="card-title"
						variant="h6"
						component="h2"
						color="secondary"
					>
						Represents: {rep}
					</Typography>
					<Typography className={classes.pos} color="primary">
						{"represents from db"}
					</Typography>
					<Typography
						className="card-title"
						variant="h6"
						component="h2"
						color="secondary"
					>
						Meaning: {meaning}
					</Typography>
					<Typography className={classes.pos} color="primary">
						{"meaning from db"}
					</Typography>
					<Typography
						className="card-title"
						variant="h6"
						component="h2"
						color="secondary"
					>
						Tips/Links: {tips}
					</Typography>
					<Typography className={classes.pos} color="primary">
						{"tips from db"}
					</Typography>
					<Typography variant="body2" component="p" color="primary">
						User : (user from db) {user}
					</Typography>
					<Typography variant="body2" component="p" color="primary">
						Date : (date from db) {date}
					</Typography>
				</CardContent>
				{/* <CardActions>
        <Button size="small">Tips/HyperLinks</Button>
      </CardActions> */}
			</Card>
		</div>
	);
}
