import React, { useState } from 'react';
import { todoState, todoListFilterState } from '../../../App';
import { atom, selector, useRecoilState, useRecoilValue } from 'recoil';
import { Button, Flex } from '@theme-ui/components';
import StatsView from '../StatsView/StatsView';


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

const FilterTasks = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const [isTrue, setIsTrue] = useState('false');
  
  const {
    totalNum,
    totalCompletedNum,
    totalUncompletedNum,
    percentCompleted,
  } = useRecoilValue(todoListStatsState);

  const updateFilter = () => {
    setIsTrue(!isTrue)
    isTrue ? setFilter('Show Uncompleted') : setFilter('Show All')
  }


  return (
    <>
      <Flex sx={{justifyContent:'space-evenly'}}>
        
        <Button variant='outline' sx={{ p: [1, 2], width: 150, height: 40, border: 'none', color: 'muted', boxShadow:'none' }}
         onClick={updateFilter}>{isTrue ? <StatsView number={totalCompletedNum} type={'Done'} /> : <StatsView number={totalUncompletedNum} type={'Remain'} />}
        </Button>
      </Flex>
    </>
  );
}

export default FilterTasks;