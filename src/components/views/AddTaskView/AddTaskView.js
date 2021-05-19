import React, { useState } from 'react';
import { todoState } from '../../../App';
import { useSetRecoilState } from 'recoil';
import { v4 as uuidv4 } from 'uuid';
import { Button, Card, Container, Input } from '@theme-ui/components';

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
    <Container sx={{display:'flex', p:[2, 3]}}>
 
      <Input type="text" placeholder='Add a new Task' value={inputValue} onChange={onChange} />

      <Button ml={2} onClick={addItem}>Add</Button>
    </Container>
  )
}

export default AddTaskView;