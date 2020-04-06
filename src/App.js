import React from 'react';
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import { green, red } from '@material-ui/core/colors';

import './App.css';
import SubjectList from './components/SubjectList';
import CurrentCourseList from './components/CurrentCourseList';
import MenuAppBar from './components/MenuAppBar';
import CurrentSchedule from './components/CurrentSchedule';

const useStyles = makeStyles(theme => ({
  root: {
    background: '#8FB4FF',
  }
}));

const theme = createMuiTheme({
  palette:{
    primary: {
      main: green[600],
    },
    secondary: {
      main: red[600],
    },
  },
});

export default function App() {

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Box className={classes.root} >
        <MenuAppBar />
        <Grid container justify='center'>
          <SubjectList />
          <Box>
            <CurrentCourseList />
            <CurrentSchedule />
          </Box>
        </Grid>
      </Box>
    </ThemeProvider>
  );
}