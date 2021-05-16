import React, { useState } from 'react';
import { todoState } from '../../../App';
import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';

const AddTaskView = () => {

  const [inputValue, setInputValue] = useState('');
  const setTodoList = useSetRecoilState(todoState);

  const addItem = () => {
    setTodoList((oldTodoList) => [
      ...oldTodoList,
      {
        id: uuidv4(),
        title: inputValue,
        completed: false,
      },
    ]);
    setInputValue('');

  }

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={onChange} />
      <button onClick={addItem}>Add</button>
    </div>
  )
}

export default AddTaskView;