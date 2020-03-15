import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

export default function CourseListItem(props) {

  const classes = useStyles();

  let deleteButton = null;
  if(props.currentCourse){
    deleteButton = (
      <IconButton edge="end" aria-label="delete">
        <DeleteIcon />
      </IconButton>
    );
  }

  return (
    <ListItem 
      button 
      className={classes.nested}
    >
      <ListItemAvatar>
        <Avatar alt={props.faculty} src={props.img}/>
      </ListItemAvatar>
      <ListItemText 
        primary={props.code + " --- " + props.name + " (" + props.credit + ")"} 
        secondary={"by " + props.faculty}
      />
      <Typography>
        {props.days + " " + props.period}
      </Typography>
      {deleteButton}
    </ListItem>
  );
}