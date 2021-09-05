import PropTypes from 'prop-types';
import React from 'react';

const FakeSelect = ({name, options, label, placeholder, onChange, register, validations}) => {

  const change = () => {

  }

  return (<div id='fake-select'>
    {register && <input type='hidden' {...register(name)} />}
    {!!options.length && <ul>
      {options.map((option, optionIndex) => <li key={optionIndex}>{options.label || option}</li>)}
      </ul>}
  </div>);
};

FakeSelect.propTypes = {
  name: PropTypes.string.required,
}

export default FakeSelect;
