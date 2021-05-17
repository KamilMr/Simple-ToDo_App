import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { todoState, todoListFilterState } from '../../../App';
import { useRecoilValue, atom, selector, useRecoilState } from 'recoil';
import AddTaskView from '../AddTaskView/AddTaskView';
import TaskView from '../TaskView/TaskView';
import FilterTasks from '../FilterTasks/FilterTasks';
import StatsView from '../StatsView/StatsView';
import SearchView from '../SearchView/SearchView';


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

const filterPosts = (posts, query) => {
  if (!query) {
      return posts;
  }
  
  return posts.filter((post) => {
      const postName = post.title.toLowerCase();
      return postName.includes(query);
  });
};

const TodoTasksView = () => {
  const tasks = useRecoilValue(filteredTodoListState)
  const [searchQuery, setSearchQuery] = useState('');
  const filteredPosts = filterPosts(tasks, searchQuery);

  return (
    <>
      <Link to='/task'>Task</Link>
      <SearchView 
      searchQuery={searchQuery}
      setSearchQuery={setSearchQuery}
      />
      <AddTaskView />
      <StatsView />
      <FilterTasks filteredTodoListState={filteredTodoListState} />
      {filteredPosts.map((task) =>
        <TaskView key={task.id} item={task} />)}
    </>
  );
}


export default TodoTasksView;