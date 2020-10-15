import React from 'react';
import Class from 'classnames';
import {MdCheckBoxOutlineBlank,MdCheckBox,MdClear} from "react-icons/md";
import './ToDoListItem.css';

function ToDoListItem({todo,onRemove,onToggle}){
    const {id,text,checked} = todo;
    return(
        <div className="ToDoListItem">
            <div className={Class('checkbox',{checked})} onClick={()=>onToggle(id)}>
                { checked ? <MdCheckBox/> : <MdCheckBoxOutlineBlank/>}
            </div>
            <div className={Class('text',{checked})}>{text}</div>
            <div className="remove" onClick={()=>onRemove(id)}>
                <MdClear/>
            </div>
        </div>

    );
}

export default ToDoListItem;