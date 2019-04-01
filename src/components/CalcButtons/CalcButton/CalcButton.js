import React from 'react';
import Button from 'react-bootstrap/Button';

const calcbutton = (props) => {
  let variant = '';
  
  switch (props.value){
    case '=':
      variant = 'danger';
      break;
    case 'del':
      variant = 'primary';
      break;
    case '+':
    case '-':
    case 'x':
    case '/':
      variant = 'info';
      break;
    default:
      variant = 'outline-dark';
      break;
  }

  return (
    <Button variant={variant}>
      {props.value}
    </Button>
  );
}

export default calcbutton;