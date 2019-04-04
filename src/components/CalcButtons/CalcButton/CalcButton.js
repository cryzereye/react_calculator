import React from 'react';
import Button from 'react-bootstrap/Button';

const calcbutton = (props) => {
  let variant = '';
  let blank = false;
  switch (props.symbol){
    case '&nbsp;':
      blank = true;
      break;
    case '=':
      variant = 'danger';
      break;
    case 'del':
      variant = 'primary';
      break;
    case '+':
    case '-':
    case '*':
    case '/':
      variant = 'info';
      break;
    default:
      variant = 'outline-dark';
      break;
  }

  
  if( blank ){
    return (
      <Button variant={variant} onClick={() => props.clicked(props.symbol)} disabled>
        {props.symbol}
      </Button>
    );
  }

  return (
    <Button variant={variant} onClick={() => props.clicked(props.symbol)} >
      {props.symbol}
    </Button>
  );
}

export default calcbutton;