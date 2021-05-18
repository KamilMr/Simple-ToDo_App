import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoTasksView from './components/views/TodoTasksView/TodoTasksView';
import TaskView from './components/views/TaskView/TaskView';
import AddTaskView from './components/views/AddTaskView/AddTaskView';
import { atom, useRecoilState, } from 'recoil';
import MainLayout from './components/layout/MainLayout/MainLayout';


const urlList = 'https://gorest.co.in/public-api/todos';

export const todoState = atom({
  key: 'todoState',
  default: [],
});

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});


const App = () => {
  const [todoList, setList] = useRecoilState(todoState);

  useEffect(() => {
    fetch(urlList)
      .then((response) => response.json())
      .then((data) => setList(data.data))
  }, [])


  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path='/'> <TodoTasksView /></Route>
          <Route path='/task/:id'><TaskView /></Route>
        </Switch>
      </MainLayout>
    </Router>
  );
}

export default App;
