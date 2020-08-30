import React, { useState } from 'react';
import propTypes from 'prop-types';
import { useInterval } from 'react-use';

function DynamicNumber(props) {

  const { score } = props;

  const [value, setValue] = useState(0);

  // initial first time
  if (value === 0) setValue(score);

  useInterval(
    () => setValue(value + 1),
    value < score ? 0.5 : null
  );

  return <>{value}</>;
}

DynamicNumber.propTypes = {
  score: propTypes.number.isRequired,
}

export default DynamicNumber;
