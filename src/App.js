import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import TodoTasksView from './components/views/TodoTasksView/TodoTasksView'
import TaskView from './components/views/TaskView/TaskView'


function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={TodoTasksView}/>
        <Route path='/task' component={TaskView}/>
      </Switch>
    </Router>
  );
}

export default App;
