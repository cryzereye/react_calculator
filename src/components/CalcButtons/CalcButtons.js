import React, { Component } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import CalcButton from './CalcButton/CalcButton';

const calcbuttons = () => {
  return (
    <Col className='CalcButtons'>
      <Row>
          <CalcButton lg='2' value='7'/>
          <CalcButton value='8'/>
          <CalcButton value='9'/>
          <CalcButton value='/'/>
          <CalcButton value='del'/>
      </Row>
      <Row>
          <CalcButton value='4'/>
          <CalcButton value='5'/>
          <CalcButton value='6'/>
          <CalcButton value='x'/>
          <CalcButton value=''/>
      </Row>
      <Row>
          <CalcButton value='1'/>
          <CalcButton value='2'/>
          <CalcButton value='3'/>
          <CalcButton value='-'/>
          <CalcButton value=''/>
      </Row>
      <Row>
          <CalcButton value='.'/>
          <CalcButton value='0'/>
          <CalcButton value=''/>
          <CalcButton value='+'/>
          <CalcButton value='='/>
      </Row>
    </Col>
  );
}

export default calcbuttons;