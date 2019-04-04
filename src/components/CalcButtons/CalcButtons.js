import React from 'react';
import Col from 'react-bootstrap/Col';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import CalcButton from './CalcButton/CalcButton';

const calcbuttons = (props) => {
  return (
    <Col
      lg={{span: 6, offset: 3}}
      md={{span: 6, offset: 3}}>
        <ButtonGroup vertical size='lg'>
          <CalcButton symbol='7' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='4' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='1' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='.' clicked={(symbol) => props.clicked(symbol)}/>
        </ButtonGroup>
        <ButtonGroup vertical size='lg'>
          <CalcButton symbol='8' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='5' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='2' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='0' clicked={(symbol) => props.clicked(symbol)}/>
        </ButtonGroup>
        <ButtonGroup vertical size='lg'>
          <CalcButton symbol='9' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='6' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='3' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='&nbsp;' clicked={(symbol) => props.clicked(symbol)}/>
        </ButtonGroup>
        <ButtonGroup vertical size='lg'>
          <CalcButton symbol='/' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='*' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='-' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='+' clicked={(symbol) => props.clicked(symbol)}/>
        </ButtonGroup>
        <ButtonGroup vertical size='lg'>
          <CalcButton symbol='<' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='C' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='&nbsp;' clicked={(symbol) => props.clicked(symbol)}/>
          <CalcButton symbol='=' clicked={(symbol) => props.clicked(symbol)}/>
        </ButtonGroup>
    </Col>
  );
}

export default calcbuttons;