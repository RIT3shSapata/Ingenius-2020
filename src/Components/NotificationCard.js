import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 350,
    margin: 30,
    alignSelf: 'flex-start',
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
});

function NotificationCard() {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant='outlined'>
      <CardContent>
        <Typography
          className={classes.title}
          color='textSecondary'
          gutterBottom>
          Notification
        </Typography>
        <Typography className={classes.pos} color='textSecondary'>
          31-10-2020
        </Typography>
        <Typography variant='body2' component='p'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni atque
          nesciunt accusamus magnam obcaecati nostrum eaque reprehenderit
          laborum
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size='small'>Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default NotificationCard;
