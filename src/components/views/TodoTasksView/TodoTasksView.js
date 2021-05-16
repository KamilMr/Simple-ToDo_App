import React from 'react';
import {Link} from 'react-router-dom'


  
  const TodoTasksView = () => {

  

    return ( 
        <>
        <Link to='/task'>Task</Link>
        <h2>This is Tasks View</h2>
        </>
     );
}
 
export default TodoTasksView;