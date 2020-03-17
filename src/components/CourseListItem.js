import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

import * as actionTypes from '../store/actions';

const useStyles = makeStyles(theme => ({
  nested: {
    paddingLeft: theme.spacing(2),
  },
  added: {
    background: '#f0f8ff',
    '&:hover': {
      backgroundColor: '#E3F2FF',
    },
  },
}));

export default function CourseListItem(props) {
  const classes = useStyles();

  const dispatch = useDispatch();

  let deleteButton = null;
  let courseName = "";

  if(props.isCurrCourse){
    deleteButton = (
      <IconButton 
        edge="end" 
        aria-label="delete"
        onClick={()=>props.onRemove(props.code)}
      >
        <DeleteIcon />
      </IconButton>
    );

    courseName = props.code + " (" + props.credit + ")";

  }else{
    courseName = props.code + " --- " + props.name + " (" + props.credit + ")";
  }

  return (
    <ListItem
      key={props.key}
      divider
    >
      <ListItem 
        button 
        onClick={() => dispatch({type: actionTypes.ADD_COURSE, courseCode: props.code})}
        className={classes.nested, (props.added)? classes.added: null}
      >
        <ListItemAvatar>
          <Avatar alt={props.faculty} src={props.img}/>
        </ListItemAvatar>
        <ListItemText 
          primary={courseName} 
          secondary={"by " + props.faculty}
        />
        <Typography>
          {props.days + " " + props.period}
        </Typography>
      </ListItem>
      {deleteButton}
    </ListItem>
  );
}