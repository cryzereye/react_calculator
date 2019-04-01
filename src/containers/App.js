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
            <h1>{this.state.expression}</h1>
            <h2>{this.state.answer}</h2>
          </Row>
          <Row className="justify-content-md-center">
            <CalcButtons/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
