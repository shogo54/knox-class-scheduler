import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';

import CourseListItem from './CourseListItem';

export default function SubjectListItem(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  const renderCources = () => {
    return props.courses.map(el => {
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
          isCurrCourse={false}
          added={el.added}
        />
      );
    });
  }

  return (
    <div>
      <ListItem 
        button 
        onClick={handleClick}
        divider
        autoFocus
      >
        <ListItemText primary={props.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {renderCources()}
        </List>
      </Collapse>
    </div>
  );
}