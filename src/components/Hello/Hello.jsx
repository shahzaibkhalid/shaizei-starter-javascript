import React from 'react';
import PropTypes from 'prop-types';

const Hello = (props) => {
  const { name } = props;
  return (
    <div>
      <h1 style={{ color: '#f66e90' }}>Hello from {name}!</h1>
    </div>
  );
};

Hello.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Hello;
