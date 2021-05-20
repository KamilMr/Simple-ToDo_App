import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { todoState, todoListFilterState } from '../../../App';
import { useRecoilValue, atom, selector } from 'recoil';
import AddTaskView from '../AddTaskView/AddTaskView';
import TaskItem from '../TaskItem/TaskItem';
import FilterTasks from '../FilterTasks/FilterTasks';
import StatsView from '../StatsView/StatsView';
import SearchView from '../SearchView/SearchView';
import { Card, Container, Heading } from '@theme-ui/components';


const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
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

const filterTasks = (tasks, query) => {
  if (!query) {
    return tasks;
  }

  return tasks.filter((post) => {
    const tasksName = post.title.toLowerCase();
    return tasksName.includes(query);
  });
};

const TodoTasksView = () => {
  const tasks = useRecoilValue(filteredTodoListState)
  const [searchQuery, setSearchQuery] = useState('');
  const filteredTasks = filterTasks(tasks, searchQuery);
  console.log(tasks);
  return (
    <Card>
      <Container sx={{
        display: 'flex',
        maxWidth: 'container',
        textAlign: 'center',
        py: [3, 4],
        px: 3
      }}>
        <SearchView searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <FilterTasks />
      </Container>
      <AddTaskView />
      {filteredTasks.map((task) =>
        <TaskItem key={task.id} item={task} />)}
    </Card>
  );
}


export default TodoTasksView;