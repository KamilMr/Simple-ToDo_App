import React from 'react';
import { Link } from 'react-router-dom';
import { todoState } from '../../../App';
import { useRecoilValue } from 'recoil';
import AddTaskView from '../AddTaskView/AddTaskView';
import TaskView from '../TaskView/TaskView';

const TodoTasksView = () => {
    const tasks = useRecoilValue(todoState)
    console.log(tasks);
    return (
        <>
            <Link to='/task'>Task</Link>
            <AddTaskView />
            {tasks.map((task) =>
                <TaskView key={task.id} item={task} />)}
        </>
    );
}

export default TodoTasksView;