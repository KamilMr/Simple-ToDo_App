import React from 'react';
import PropTypes from 'prop-types';
import { todoState } from '../../../App';
import { selector, useRecoilValue } from 'recoil';
import { Box, Container, Flex, Grid, Text } from '@theme-ui/components';

// const todoListStatsState = selector({
//   key: 'todoListStatsState',
//   get: ({ get }) => {
//     const todoList = get(todoState);
//     const totalNum = todoList.length;
//     const totalCompletedNum = todoList.filter((item) => item.completed).length;
//     const totalUncompletedNum = totalNum - totalCompletedNum;

//     return {

//       totalCompletedNum,
//       totalUncompletedNum,
//     };
//   },
// });

const StatsView = ({number, type}) => {
  // const {
  //   totalNum,
  //   totalCompletedNum,
  //   totalUncompletedNum,
  //   percentCompleted,
  // } = useRecoilValue(todoListStatsState);

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