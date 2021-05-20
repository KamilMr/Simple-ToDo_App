import React from 'react';
import PropTypes from 'prop-types';
import { Text } from '@theme-ui/components';


const StatsView = ({number, type}) => {

  return (
    <>
        <Text sx={{p:2, display: 'inline-block'}}>{number} {type} </Text>
    
    </>
  );
}
StatsView.propTypes = {
  number: PropTypes.number,
  type: PropTypes.string,
}

export default StatsView;