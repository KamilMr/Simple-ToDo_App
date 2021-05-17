import React from 'react';
import { Link, useParams } from 'react-router-dom'
import PropTypes from 'prop-types';
import { todoState } from '../../../App';
import { useRecoilState } from "recoil";

const TaskView = () => {
    const [todoList, setTodoList] = useRecoilState(todoState);
    const { id } = useParams()
    let index = todoList.findIndex((listItem) => listItem.id == id);
    let item = todoList.filter((listItem) => listItem.id == id)[0];
    console.log(item);

    const editItemText = ({ target: { value } }) => {
        const newList = replaceItemAtIndex(todoList, index, {
          ...item,
          title: value,
        });
    
        setTodoList(newList);
      };

    const formatDate = (dateToBeFormated) => {
        const date = new Date(dateToBeFormated)
        const dateFormated = date.getDay() + '/' + date.getMonth() + '/' + date.getFullYear()
        
        return dateFormated 
    }
    
      
    return (
        <>
            <Link to='/'><h2>Go back</h2></Link>
            <ul>
                <li>created: {formatDate(item.created_at)}</li>
                <li>updated: {formatDate(item.updated_at)}</li>
            </ul>
                <input 
                value={item.title}
                onChange={editItemText}/>
        </>
    );
}

function replaceItemAtIndex(arr, index, newValue) {
    return [...arr.slice(0, index), newValue, ...arr.slice(index + 1)];
  }
  

TaskView.propTypes = {
    state: PropTypes.array,
  }
export default TaskView;