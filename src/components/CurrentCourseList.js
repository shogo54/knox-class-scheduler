import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import * as actionTypes from '../store/actions';
import CourseListItem from './CourseListItem';
import CourseButton from './CourseButton';
import Title from './Title';

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
      {(currCourses.length > 0)? 
        <CourseButton type="remove-all" onClick={() => dispatch({type: actionTypes.REMOVE_ALL_COURSES})}/>
        :null
      }
    </Box>
  );
}