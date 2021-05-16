import React, { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TodoTasksView from './components/views/TodoTasksView/TodoTasksView';
import TaskView from './components/views/TaskView/TaskView';
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useSetRecoilState,
  useRecoilValue,
} from 'recoil';


const urlList = 'https://gorest.co.in/public-api/todos';

const todoState = atom({
  key: 'todoState',
  default: [],
});




const App = () => {
  const [todoList, setList] = useRecoilState(todoState);

  useEffect(() => {
    fetch(urlList)
      .then((response) => response.json())
      .then((data) => setList(data.data))
  },[])

  console.log(todoList);
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={TodoTasksView} />
        <Route path='/task' component={TaskView} />
      </Switch>
    </Router>
  );
}

export default App;
