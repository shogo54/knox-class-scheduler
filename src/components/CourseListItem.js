import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Box from '@material-ui/core/Box';

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
      <ListItemSecondaryAction>
        <IconButton 
          edge="end" 
          aria-label="delete"
          onClick={()=>dispatch({type: actionTypes.REMOVE_COURSE, courseCode: props.code})}
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    );

    courseName = props.code + " (" + props.credit + ")";

  }else{
    courseName = props.code + " --- " + props.name + " (" + props.credit + ")";
  }

  const addOrRemove = () => {
    if(props.added){
      dispatch({type: actionTypes.REMOVE_COURSE, courseCode: props.code});
    }else{
      dispatch({type: actionTypes.ADD_COURSE, courseCode: props.code});
    }
  };

  return (
    <Box className={(props.isCurrCourse)? null: classes.nested}>
      <ListItem 
        key={props.key}
        button 
        divider
        onClick={addOrRemove}
        className={(props.added)? classes.added: null}
      >
        <ListItemAvatar>
          <Avatar alt={props.faculty} src={props.img}/>
        </ListItemAvatar>
        <ListItemText 
          primary={courseName} 
          secondary={"by " + props.faculty}
        />
        <ListItemText >
          {props.days + " " + props.period}
        </ListItemText>
        
        {deleteButton}
      </ListItem>
    </Box>
  );
}