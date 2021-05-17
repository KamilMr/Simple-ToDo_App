import React from 'react';
import { todoState } from '../../../App';
import {selector, useRecoilValue} from 'recoil';

const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
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
      <ul>
        <li>Items completed: {totalCompletedNum}</li>
        <li>Items not completed: {totalUncompletedNum}</li>
      </ul>
    );
  }

  export default StatsView;