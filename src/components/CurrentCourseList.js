import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import ClearIcon from '@material-ui/icons/Clear';

import CourseListItem from './CourseListItem';
import Title from './Title';
import * as actionTypes from '../store/actions';

const useStyles = makeStyles(theme => ({
  root: {
    width: 450,
    height: 560,
    background: '#3567CC',
    marginTop: 15,
    marginBottom: 15,
    marginRigth: 15,
    padding: 10,
  },
  list: {
    maxHeight: 440,
    background: 'white',
    paddingBottom: 0,
    paddingTop: 0,
    marginBottom: 10,
  },
  subheader: {
    textAlign: 'center',
    background: '#3567CC',
    color: 'white',
    fontSize: 24,
  },
  subText: {
    paddingTop: 23,
    paddingBottom: 23,
    textAlign: 'center',
    fontSize: 18,
  }
}));

const currCoursesSelector = state => state.currCourses;
const currCreditsSelector = state => state.currCredits;

export default function CurrentCourseList() {
  const classes = useStyles();

  const currCourses = useSelector(currCoursesSelector);
  const currCredits = useSelector(currCreditsSelector);

  const dispatch = useDispatch();

  let removeAllButton = null; 

  if(currCourses.length > 0){
    removeAllButton = (
      <Box display="flex" justifyContent="flex-end">
        <Button
          variant="contained"
          color="secondary"
          onClick={() => dispatch({type: actionTypes.REMOVE_ALL_COURSES})}
          startIcon={<ClearIcon />}
        >
          Remove All Courses
        </Button>
      </Box>
    );
  }

  const renderCurrentCources = () => {
    if (currCourses.length === 0){
      return <Typography className={classes.subText}>No classes are added yet.</Typography>
    }else{
      return currCourses.map(el => {
        return (
          <CourseListItem 
            key={el.id} 
            name={el.name} 
            code={el.code}
            img={el.img}
            faculty={el.faculty}
            credit={el.credit}
            period={el.period}
            days={el.days}
            isCurrCourse={true}
            added={el.added}
            description={el.description}
          />
        );
      });
    }
  };

  return(
    <Box className={classes.root}>
      <Title subTitle={'total credit: ' + currCredits}>
        Current Courses
      </Title>
      <List className={classes.list}>
        {renderCurrentCources()}
      </List>
      {removeAllButton}
    </Box>
  );
}