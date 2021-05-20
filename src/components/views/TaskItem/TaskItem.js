import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'
import { todoState } from '../../../App';
import { useRecoilState } from 'recoil';
import { Button, Checkbox, Container, IconButton, Input, Label } from '@theme-ui/components';
import { BsFillTrashFill } from 'react-icons/bs';


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
    <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', m: 2, borderBottom: '1px solid', p: [1, 2] }}>

      <Label sx={{ maxWidth: 30, variant: 'button.secondary' }}>
        <Checkbox sx={{
          ":focus,:hover": {
            backgroundColor: 'sunken',
          },
          "> path": {
            "fill": "yellow",
            "d": ""
          },
          color: 'muted',
        }}
          checked={item.completed}
          onChange={toggleItemCompletion} />
      </Label>
      <Input sx={{ ml: 3, mr: 3 }} value={item.title} onChange={editItemText} />

      <IconButton as='button' sx={{
        mr: [1, 3, 4], border: 'none', color: 'red', ":focus,:hover": {
          backgroundColor: 'sunken',
        },
      }} onClick={deleteItem}>
        <BsFillTrashFill />
      </IconButton>
      <Link to={`/task/${item.id}`} style={{ textDecoration: 'none' }} >
        <Button variant='outline' sx={{ mr: [2, 3], width: 'auto', height: 'auto', color: 'muted' }}>more</Button>
      </Link>
    </Container>
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