import React from 'react';
import Button from 'react-bootstrap/Button';

const calcbutton = (props) => {
  let variant = '';
  
  switch (props.value){
    case '=':
      variant = 'danger';
      break;
    default:
      variant = 'outline-dark';
      break;
  }

  return (
    <Button value={props.value} variant={variant} block>
      {props.value}
    </Button>

  );
}

export default calcbutton;