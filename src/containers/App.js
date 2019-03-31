import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import CalcButtons from '../components/CalcButtons/CalcButtons';

import './App.css';


class App extends Component {
  state = {
    expression: '',
    answer: 0,
    history: []
  }

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
        
          </Row>
          <CalcButtons/>
        </Container>
      </div>
    );
  }
}

export default App;
