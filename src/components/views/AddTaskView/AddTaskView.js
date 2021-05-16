import React, { useState } from 'react';
import { todoState } from '../../../App';
import { useSetRecoilState } from 'recoil';

const AddTaskView = () => {

  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: getId(),
        title: inputValue,
        completed: false,
      },
    ]);
    setInputValue('');

  }

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  // utility for creating unique Id
  let id = 0;
  const getId = () => {
    return id++;
  }

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default AddTaskView;