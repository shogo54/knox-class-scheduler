import React from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import SchoolIcon from '@material-ui/icons/School';

import * as actionTypes from '../store/actions';
import CourseIconButton from './CourseIconButton';
import CourseButton from './CourseButton';

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
  chips: {
    display: 'flex',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
}));

export default function CourseListItem(props) {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const dispatch = useDispatch();
  let courseName = "";

  if(props.isCurrCourse){
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
        <ListItemSecondaryAction>
          <CourseIconButton type={(props.added)? "remove":"add"} onClick={handleAddOrRemove}/>
        </ListItemSecondaryAction>
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
            <CourseIconButton type="close" onClick={handleClose}/>
            <h2 id="transition-modal-title">{props.code + " --- " + props.name}</h2>
            <h3 id="transition-modal-faculty">by {props.faculty}</h3>
            <Box className={classes.chips}>
              <Chip
                icon={<AccessTimeIcon />}
                label={props.days + " " + props.period}
              />
              <Chip
                icon={<SchoolIcon />}
                label={parseFloat(props.credit).toFixed(1)}             
              />
            </Box>
            <p id="transition-modal-description">{(props.description)? props.description: "No descrption is provided."}</p>
            <CourseButton type={(props.added)? "remove":"add"} onClick={handleAddOrRemove}/>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
}