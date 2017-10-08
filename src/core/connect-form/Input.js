import React from 'react';

const Input = props => {
  return (
    <div>
      <label className="connect-form-label" htmlFor={props.htmlId}>
        {props.label}
      </label>
      <input id={props.htmlId} type={props.type} />
    </div>
  );
};

export default Input;
