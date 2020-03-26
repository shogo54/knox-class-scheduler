import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';

import * as actionTypes from '../store/actions';
import { Button } from '@material-ui/core';

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
  coursePeriod: {
    textAlign: 'right',
    paddingRight: theme.spacing(2),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    width: 700,
  },
}));

export default function CourseListItem(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();

  let deleteButton = null;
  let courseName = "";
  let modalButton = null;

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

  const handleAddOrRemove = () => {
    if(props.added){
      dispatch({type: actionTypes.REMOVE_COURSE, courseCode: props.code});
    }else{
      dispatch({type: actionTypes.ADD_COURSE, courseCode: props.code});
    }
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if(props.added){
    modalButton = (
      <Button
        variant="contained"
        color="secondary"
        onClick={handleAddOrRemove}
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Remove from My Course
      </Button>
    );
  }else{
    modalButton = (
      <Button
        variant="contained"
        color="primary"
        onClick={handleAddOrRemove}
        className={classes.button}
        startIcon={<AddIcon />}
      >
        Add to My Course
      </Button>
    );
  }

  return (
    <Box className={(props.isCurrCourse)? null: classes.nested}>
      <ListItem 
        key={props.key}
        button 
        divider
        onClick={handleOpen}
        className={(props.added && !props.isCurrCourse)? classes.added: null}
      >
        <ListItemAvatar>
          <Avatar alt={props.faculty} src={props.img}/>
        </ListItemAvatar>
        <ListItemText 
          primary={courseName} 
          secondary={"by " + props.faculty}
        />
        <ListItemText className={classes.coursePeriod}>
          {props.days + " " + props.period}
        </ListItemText>
        {deleteButton}
      </ListItem>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box className={classes.paper}>
            <h2 id="transition-modal-title">{courseName}</h2>
            <h3 id="">by {props.faculty}</h3>
            <p id="transition-modal-description">{props.description}</p>
            <Box display="flex" justifyContent="flex-end">
              {modalButton}
            </Box>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}