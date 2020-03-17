import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';

import './App.css';
import SubjectList from './components/SubjectList';
import CurrentCourseList from './components/CurrentCourseList';
import MenuAppBar from './components/MenuAppBar';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#8FB4FF',
  }
}));

export default function App() {

  const classes = useStyles();

  return (
    <Box className={classes.root} >
      <MenuAppBar />
      <Grid container justify='center'>
        <SubjectList />
        <CurrentCourseList />
      </Grid>
    </Box>
  );
}