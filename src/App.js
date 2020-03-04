import React from 'react';
import Container from '@material-ui/core/Container';

import './App.css';
import SubjectList from './components/SubjectList';

export default function App() {
  return (
    <Container>
      <SubjectList />
    </Container>
  );
}