import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import Box from '@material-ui/core/Box';

import SubjectListItem from './SubjectListItem';
import Title from './Title';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 700,
    margin: 15,
  },
  list: {
    maxHeight: '85vh',
    overflow: 'auto',
    backgroundColor: theme.palette.background.paper,
    padding: 0,
  },
}));

const subjectsSelector = state => state.subjects;
const coursesSelector = state => state.courses;

export default function SubjectList() {
  const classes = useStyles();

  const subjects = useSelector(subjectsSelector);
  const courses = useSelector(coursesSelector);

  const renderSubjects = () => {
    return subjects.map(el => {
      return (
        <SubjectListItem 
          key={el.id} 
          name={el.subject} 
          courses={courses.filter(course => course.subject === el.subjectCode)}
        />
      );
    });
  }

  return (
    <Box className={classes.root}>
      <Title>
        Class Schecule for Spring 2020
      </Title>
      <List
        component="nav"
        className={classes.list}
      >
        {renderSubjects()}
      </List>
    </Box>
  );
}