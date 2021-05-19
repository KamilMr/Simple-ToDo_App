import React from 'react';
import { todoState } from '../../../App';
import { selector, useRecoilValue } from 'recoil';
import { Box, Container, Flex } from '@theme-ui/components';

const todoListStatsState = selector({
  key: 'todoListStatsState',
  get: ({ get }) => {
    const todoList = get(todoState);
    const totalNum = todoList.length;
    const totalCompletedNum = todoList.filter((item) => item.completed).length;
    const totalUncompletedNum = totalNum - totalCompletedNum;

    return {

      totalCompletedNum,
      totalUncompletedNum,
    };
  },
});

const StatsView = () => {
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  return (
    <Container>
      <Flex sx={{ fontSize: 12,}}>
        <Box p={2} >Done: ({totalCompletedNum}) </Box>
        <Box p={2}>Uncompleted: ({totalUncompletedNum})</Box>
      </Flex>
    </Container>
  );
}

export default StatsView;