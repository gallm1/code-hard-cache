import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '75%',
        margin: theme.spacing(1),
    },
    paper: {
        marginTop: theme.spacing(1),
        // marginLeft: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
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
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Code | Hard | Cache Term
        </Typography>
        <Typography variant="h5" component="h2">
          Term/Acronym:  (from db)
        </Typography>
        {/* <Typography className={classes.pos} color="textSecondary">
          Represents (from db)
        </Typography> */}
        <Typography variant="body2" component="p">
          Represents: (from db)
          <br />
          {"(from db)"}
        </Typography>
        <Typography variant="body2" component="p">
          Meaning/Definition : 
          <br />
          {'"(from db)"'}
        </Typography>
        <Typography variant="body2" component="p">
          Tips/Links: 
          <br />
          {'"(from db)"'}
        </Typography>
        <Typography variant="body2" component="p">
          User : (from db)
        </Typography>
        <Typography variant="body2" component="p">
          Date : (from db)
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Tips/HyperLinks</Button>
      </CardActions>
    </Card>
    </div>
  );
}