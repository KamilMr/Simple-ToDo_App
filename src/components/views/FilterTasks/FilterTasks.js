import React, {useState} from 'react';
import { todoState, todoListFilterState } from '../../../App';
import { atom, selector, useRecoilState } from 'recoil';
import { Button } from '@theme-ui/components';


const FilterTasks = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const [isTrue, setIsTrue] = useState('false')
  
  const updateFilter = () => {
    setIsTrue(!isTrue)
    isTrue ? setFilter('Show Uncompleted') : setFilter('Show All')
  }
  return (
    <>
      <Button sx={{
        bg: 'secondary'
      }} onClick={updateFilter}>{isTrue ? 'Show Uncompleted' : 'Show All'}</Button>
    </>
  );
}

export default FilterTasks;