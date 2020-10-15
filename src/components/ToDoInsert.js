import React, {useCallback,useState} from 'react';
import './ToDoInsert.css'; 
import {SiAddthis} from "react-icons/si";


function ToDoInsert({onInsert})
{
    const [value,setValue]= useState('');
    // function onChange(e){
    //     setValue(e.target.value);

    // }
    const onChange = useCallback(e=>{
        setValue(e.target.value);
    },[]);

    const onClick = useCallback((e)=>{
        e.preventDefault();
        
        // app.js insert 시켜주는 함수
        onInsert(value);
        //value 값을 공백으로 만들어 주는
    setValue('');
    },[onInsert,value]);


    return(
        <form className="ToDoInsert">
            <input value={value} onChange={onChange} className="InputBox" type="text" placeholder="할 일을 입력하세요"/>
            <button className="Btn" type="submit" onClick={onClick}>
                <SiAddthis/>
            </button>
        </form>
    );
}

export default ToDoInsert;