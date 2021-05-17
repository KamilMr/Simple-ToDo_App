import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { todoState } from '../../../App';
import { useRecoilState } from 'recoil';

const TaskItem = ({ item }) => {
  const [todoList, setTodoList] = useRecoilState(todoState);
  const index = todoList.findIndex((listItem) => listItem === item);

  const editItemText = ({ target: { value } }) => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      title: value,
    });

    setTodoList(newList);
  };

  const toggleItemCompletion = () => {
    const newList = replaceItemAtIndex(todoList, index, {
      ...item,
      completed: !item.completed,
    });

    setTodoList(newList);
  };

  const deleteItem = () => {
    const newList = removeItemAtIndex(todoList, index);

    setTodoList(newList);
  };


  return (
    <div>
      <input type="text" value={item.title} onChange={editItemText} />
      <input
        type="checkbox"
        checked={item.completed}
        onChange={toggleItemCompletion}
      />
      <button onClick={deleteItem}>X</button>
      <Link to={`/task/${item.id}`}>
        <button>Go</button>
      </Link>
    </div>
  );
}

function replaceItemAtIndex(arr, index, newValue) {
  return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
}

function removeItemAtIndex(arr, index) {
  return [...arr.slice(0, index), ...arr.slice(index + 1)];
}

TaskItem.propTypes = {
  item: PropTypes.object,
}

export default TaskItem;