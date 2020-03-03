import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';

import SubjectListItem from './SubjectListItem';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 600,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SubjectList() {
  const classes = useStyles();

  const subjects = [
    {
      subject: "Africana Studies",
      courses: [],
    },
    {
      subject: "American Studies",
      courses: [],
    },
    {
      subject: "Anthoropology & Sociology",
      courses: [],
    },
    {
      subject: "Art and Art History",
      courses: [],
    },
    {
      subject: "Arts Administration",
      courses: [],
    },
    {
      subject: "Asian Studies",
      courses: [],
    },
    {
      subject: "Biochemistry",
      courses: [],
    },
    {
      subject: "Biology",
      courses: [],
    },
    {
      subject: "Business and Management",
      courses: [],
    },
    {
      subject: "Chemistry",
      courses: [],
    },
    {
      subject: "Chinese",
      courses: [],
    },
    {
      subject: "Classics",
      courses: [],
    },
    {
      subject: "Computer Science",
      courses: [
        {
          name: "Program Design & Methodology",
          code: "CS 142",
          img: "images/avatars/dbunde.jpg",
          faculty: "David Bunde",
          period: "2",
          days: "MWF",
        },
        {
          name: "Applied Data Structures",
          code: "CS 220",
          img: "images/avatars/jspacco.jpg",
          faculty: "Jaime Spacco",
          period: "6",
          days: "MWTF",
        },
        {
          name: "Software Engineering",
          code: "CS 322",
          img: "images/avatars/mmcgill.jpg",
          faculty: "Monica McGill",
          period: "5s",
          days: "TT",
        },
        {
          name: "Cryptography & Computer Security",
          code: "CS 330",
          img: "images/avatars/dbunde.jpg",
          faculty: "David Bunde",
          period: "3",
          days: "MWF",
        },
        {
          name: "Interactive Design",
          code: "CS 335",
          img: "images/avatars/jspacco.jpg",
          faculty: "Jaime Spacco & Tim Stedman",
          period: "3,4",
          days: "MW",
        },
        {
          name: "Full-stack Web Dev Practicum",
          code: "CS 395E",
          img: "",
          faculty: "Staff",
          period: "2:40-5pm",
          days: "TT",
        },
      ],
    },
    {
      subject: "Center for Teaching and Learning",
      courses: [],
    },
    {
      subject: "Dance",
      courses: [],
    },
    {
      subject: "Economics",
      courses: [],
    },

  ];

  const renderSubjects = () => {
    return subjects.map(el => {
      return (
        <SubjectListItem 
          key={el.id} 
          name={el.subject} 
          courses={el.courses}
        />
      );
    });
  }

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Class Schecule for Spring 2020
        </ListSubheader>
      }
      className={classes.root}
    >
      {renderSubjects()}
    </List> 
  );
}