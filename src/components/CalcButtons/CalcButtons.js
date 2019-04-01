import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CalcButton from './CalcButton/CalcButton';

const calcbuttons = (props) => {
  return (
    <Col
      lg={{span: 6, offset: 3}}
      md={{span: 6, offset: 3}}>
        <ButtonGroup vertical size='lg'>
          <CalcButton value='7'/>
          <CalcButton value='4'/>
          <CalcButton value='1'/>
          <CalcButton value='.'/>
        </ButtonGroup>
        <ButtonGroup vertical size='lg'>
          <CalcButton value='8'/>
          <CalcButton value='5'/>
          <CalcButton value='2'/>
          <CalcButton value='0'/>
        </ButtonGroup>
        <ButtonGroup vertical size='lg'>
          <CalcButton value='9'/>
          <CalcButton value='6'/>
          <CalcButton value='3'/>
          <CalcButton value='&nbsp;'/>
        </ButtonGroup>
        <ButtonGroup vertical size='lg'>
          <CalcButton value='/'/>
          <CalcButton value='x'/>
          <CalcButton value='-'/>
          <CalcButton value='+'/>
        </ButtonGroup>
        <ButtonGroup vertical size='lg'>
          <CalcButton value='<'/>
          <CalcButton value='&nbsp;'/>
          <CalcButton value='&nbsp;'/>
          <CalcButton value='='/>
        </ButtonGroup>
    </Col>
  );
}

export default calcbuttons;