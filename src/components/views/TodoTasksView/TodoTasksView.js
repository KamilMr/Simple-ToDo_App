import React from 'react';
import { Link } from 'react-router-dom';
import { todoState, todoListFilterState } from '../../../App';
import { useRecoilValue, atom, selector, useRecoilState } from 'recoil';
import AddTaskView from '../AddTaskView/AddTaskView';
import TaskView from '../TaskView/TaskView';
import FilterTasks from '../FilterTasks/FilterTasks';


  const filteredTodoListState = selector({
    key: 'filteredTodoListState',
    get: ({get}) => {
      const filter = get(todoListFilterState);
      const list = get(todoState);
  
      switch (filter) {
        case 'Show All':
          return list.filter((item) => item);
        case 'Show Uncompleted':
          return list.filter((item) => !item.completed);
        default:
          return list;
      }
    },
  });

  

const TodoTasksView = () => {
    const tasks = useRecoilValue(filteredTodoListState)
    return (
        <>
            <Link to='/task'>Task</Link>
            <AddTaskView />
            <FilterTasks filteredTodoListState={filteredTodoListState} />
            {tasks.map((task) =>
                <TaskView key={task.id} item={task} />)}
        </>
    );
}


export default TodoTasksView;