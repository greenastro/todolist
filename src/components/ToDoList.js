import React from 'react';
import ToDoListItem from './ToDoListItem';





function ToDoList({todos,onRemove,onToggle}) {
    return(
    <div className="ToDoList">
        {
            todos.map(todo=>(
                <ToDoListItem key={todo.id}  todo={todo} onRemove={onRemove} onToggle={onToggle}/>
        
            ))
        }
    </div>
        
    );
}

export default ToDoList;