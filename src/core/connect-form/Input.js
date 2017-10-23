import React from 'react';
import PropTypes from 'prop-types';

const Input = props => {
  return (
    <div>
      <label className="connect-form-label" htmlFor={props.htmlId}>
        {props.label}
      </label>
      <input id={props.htmlId} type={props.type} name={props.name} required={props.required} />
    </div>
  );
};

export default Input;

Input.defaultProps = {
  name: '',
  required: false,
};

Input.propTypes = {
  name: PropTypes.string,
  required: PropTypes.bool,
  htmlId: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
