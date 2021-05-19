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

      <Button variant='outline' sx={{ mr: [2, 3],ml:[3,2], fontSize:3, border:'none', boxShadow: 'none', width: 'auto', height: 'auto', color:'muted' }} onClick={addItem}>+</Button>
    </Container>
  )
}

export default AddTaskView;