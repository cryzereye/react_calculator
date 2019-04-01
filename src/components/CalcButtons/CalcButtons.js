import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CalcButton from './CalcButton/CalcButton';

const calcbuttons = () => {
  return (
    <Col>
      <Row>
        <ButtonGroup>
          <CalcButton value='7'/>
          <CalcButton value='8'/>
          <CalcButton value='9'/>
          <CalcButton value='/'/>
          <CalcButton value='del'/>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup>
          <CalcButton value='4'/>
          <CalcButton value='5'/>
          <CalcButton value='6'/>
          <CalcButton value='x'/>
          <CalcButton value=' '/>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup>
          <CalcButton value='1'/>
          <CalcButton value='2'/>
          <CalcButton value='3'/>
          <CalcButton value='-'/>
          <CalcButton value=' '/>
        </ButtonGroup>
      </Row>
      <Row>
        <ButtonGroup>
          <CalcButton value='.'/>
          <CalcButton value='0'/>
          <CalcButton value=' '/>
          <CalcButton value='+'/>
          <CalcButton value='='/>
        </ButtonGroup>
      </Row>
    </Col>
  );
}

export default calcbuttons;