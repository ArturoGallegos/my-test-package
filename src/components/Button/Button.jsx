import React from 'react';

export const Button = ({label, onClick}) => {
  return (<button id='button' onClick={onClick}>
    {label} ---&raquo; este boton
  </button>);
};
