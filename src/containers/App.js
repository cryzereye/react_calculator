import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
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
        <header>
          <link
            rel="stylesheet"
            href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
            crossorigin="anonymous"
          />
        </header>
        <Container>
          <Row>
            <h1>{this.state.expression}</h1>
            <h2>{this.state.answer}</h2>
          </Row>
          <Row>
            <CalcButtons/>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
