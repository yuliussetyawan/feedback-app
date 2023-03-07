import React from 'react'
import PropTypes from 'prop-types';

function Button({children, version, type, isDisabled}) {
  return (
    <button className={`btn btn-${version}`} type={type} disabled={isDisabled}>
    {children}
    </button>
  )
}

Button.defaultProps = {
  version: 'primary',
  type: 'button',
  isDisabled: false
};


Button.propTypes = {
  children:  PropTypes.node.isRequired,
  version: PropTypes.string,
  isDisabled: PropTypes.bool,
  type: PropTypes.string
}


export default Button
