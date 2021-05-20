import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useSetRecoilState } from 'recoil';
import { todoState } from '../../../App';
import { Container, Input, IconButton } from '@theme-ui/components';

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
        created_at: setDate(),
        updated_at: '',
      },
    ]);
    setInputValue('');

  }

  const setDate = () => {
    const date = new Date();
    return date
  }

  const onChange = ({ target: { value } }) => {
    setInputValue(value);
  };
  
  return (
    <Container sx={{display:'flex', justifyContent:'space-evenly', alignItems:'center', maxWidth:['auto', null, 800], pb:[0 ,2]}}>
 
      <Input type="text" placeholder='Type new task' value={inputValue} onChange={onChange} />

      <IconButton as='button' sx={{
        mr: [1, 3, 4], ml: [1, 3, 4], border: 'none', color: '#0a5b71', ":focus,:hover": {
          backgroundColor: 'sunken'
        }, fontSize:3,
      }} onClick={addItem}>+</IconButton>
    </Container>
  )
}

export default AddTaskView;