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
    height: '34%',
    background: '#3567CC',
    marginTop: 15,
    marginBottom: 15,
    marginRigth: 15,
    padding: 10,
  },
}));

export default function CurrentSchedule (){
  const classes = useStyles();

  return(
    <Box className={classes.root}>
      <Title>
        Current Schedule
      </Title>
    </Box>
  );
}