import React from 'react';
import { Link } from 'react-router-dom';
import { todoState } from '../../../App';
import { useRecoilValue, atom, selector, useRecoilState } from 'recoil';
import AddTaskView from '../AddTaskView/AddTaskView';
import TaskView from '../TaskView/TaskView';

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

  

const TodoTasksView = () => {
    const tasks = useRecoilValue(filteredTodoListState)
    console.log(tasks);
    return (
        <>
            <Link to='/task'>Task</Link>
            <AddTaskView />
            <TodoListFilters />
            {tasks.map((task) =>
                <TaskView key={task.id} item={task} />)}
        </>
    );
}

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
export default TodoTasksView;