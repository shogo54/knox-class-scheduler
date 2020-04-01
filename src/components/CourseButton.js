import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';

export default function CourseButton (props){
  let button = null;

  if(props.type === "add"){
    button = (
      <Button
        variant="contained"
        aria-label="add"
        color="primary"
        onClick={props.onClick}
        startIcon={<AddIcon />}
      >
        Add to My Course
      </Button>
    );
  }else if(props.type === "remove"){
    button = (
      <Button
        variant="contained"
        aria-label="remove"
        color="secondary"
        onClick={props.onClick}
        startIcon={<DeleteIcon />}
      >
        Remove from My Course
      </Button>
    );
  }else if(props.type === "remove-all"){
    button = (
      <Button
        variant="contained"
        aria-label="remove-all"
        color="secondary"
        onClick={props.onClick}
        startIcon={<ClearIcon />}
      >
        Remove All Courses
      </Button>
    );
  }
  
  return (<Box display="flex" justifyContent="flex-end">{button}</Box>);
}

CourseButton.propTypes = {
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
}