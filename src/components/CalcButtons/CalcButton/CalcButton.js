import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';

const calcbutton = (props) => {
  return (
      <Col>
        <button value={props.value}>
            <h1>{props.value}</h1>
        </button>
      </Col>
  );
}

export default calcbutton;