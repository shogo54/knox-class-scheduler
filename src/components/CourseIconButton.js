import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AddCircleIcon from '@material-ui/icons/AddCircle';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles(theme => ({
  closeButton: {
    float: 'right',
    color: theme.palette.grey[500],
  },
}));

export default function CourseIconButton (props){
  const classes = useStyles();

  let iconButton = null;

  if(props.type === "add"){
    iconButton = (
      <IconButton 
        edge="end" 
        aria-label="add"
        color="primary"
        onClick={props.onClick}
      >
        <AddCircleIcon />
      </IconButton>
    );
  }else if(props.type === "remove"){
    iconButton = (
      <IconButton 
        edge="end"
        aria-label="remove"
        color="secondary"
        onClick={props.onClick}
      >
        <DeleteIcon />
      </IconButton>
    );
  }else if(props.type === "close"){
    iconButton = (
      <IconButton 
        aria-label="close"
        className={classes.closeButton}
        onClick={props.onClick}
      >
        <CloseIcon />
      </IconButton>
    );
  }
  
  return iconButton;
}

CourseIconButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}