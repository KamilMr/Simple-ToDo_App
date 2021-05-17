import React, {useState} from 'react';
import { todoState, todoListFilterState } from '../../../App';
import { atom, selector, useRecoilState } from 'recoil';


const FilterTasks = () => {
  const [filter, setFilter] = useRecoilState(todoListFilterState);
  const [isTrue, setIsTrue] = useState('false')
  
  const updateFilter = () => {
    setIsTrue(!isTrue)
    isTrue ? setFilter('Show Uncompleted') : setFilter('Show All')
  }
  return (
    <>
      <button onClick={updateFilter}>{isTrue ? 'Show Uncompleted' : 'Show All'}</button>
    </>
  );
}

export default FilterTasks;