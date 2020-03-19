import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
  title: {
    textAlign: 'center',
    background: '#3567CC',
    color: 'white',
    padding: 5,
  }
}));

export default function Title(props) {
  const classes = useStyles();

  return (
    <Box className={classes.title}>
      <Typography variant='h5'>
        {props.children}
      </Typography>
      <Typography variant='h6'>
        {props.subTitle}
      </Typography>
    </Box>
  );
}

Title.propTypes = {
  children: PropTypes.node,
  subTitle: PropTypes.string,
};