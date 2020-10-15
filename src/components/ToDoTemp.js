import React from 'react';
import './ToDoTemp.css'; 

function ToDoTemp({children}){
    return(
        <div className="ToDoTemp">
            <div className="App-Title">일정관리</div>
            <div>{children}</div>
        </div>
    );
}

export default ToDoTemp;