import React from 'react';
import { todoState } from '../../../App';
import {atom, selector, useRecoilState} from 'recoil';


const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});

const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.completed);
      case 'Show Uncompleted':
        return list.filter((item) => !item.completed);
      default:
        return list;
    }
  },
});

const FilterTasks = () => {

  return ( 
    function TodoListFilters() {
      const [filter, setFilter] = useRecoilState(todoListFilterState);
    
      const updateFilter = ({target: {value}}) => {
        setFilter(value);
      };
    
      return (
        <>
          Filter:
          <select value={filter} onChange={updateFilter}>
            <option value="Show All">All</option>
            <option value="Show Completed">Completed</option>
            <option value="Show Uncompleted">Uncompleted</option>
          </select>
        </>
      );
    }
   );
}
 
export default FilterTasks;