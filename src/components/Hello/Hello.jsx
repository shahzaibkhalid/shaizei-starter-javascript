import React from 'react';
import PropTypes from 'prop-types';

const Play = (props) => {
  const { name } = props;
  return (
    <div>
      <h1 style={{ color: '#f66e90' }}>Hello from {name}!</h1>
    </div>
  );
};

Play.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Play;
