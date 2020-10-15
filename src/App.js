import React,{useState,useRef,useCallback} from 'react';
import ToDoInsert from './components/ToDoInsert';
import ToDoTemp from './components/ToDoTemp';
import ToDoList from './components/ToDoList';



function App() {
  const [todos,setToDos]= useState([
    {
    id:1,
    text:'할일 목록 1',
    checked : false
  },
  { 
    id:2,
    text:'할일 목록 2',
    checked : true

  }

  ]);

  const nextID = useRef(3);
  const onInsert= useCallback(text=>{
    const next = {
      id : nextID.current,
      text : text,
      checked : false
    }
    setToDos( todos. concat(next) );
    nextID.current += 1;
  },[todos]);

  const onRemove = useCallback( id =>{
  setToDos( todos.filter( data => data.id !== id));
  },[todos]);

  const onToggle = useCallback( id => {
    setToDos(todos.map( data => {
      return data.id === id ? {...data,checked:!data.checked} : data  
      }));

  },[todos]);

  return (
  <ToDoTemp>
    <ToDoInsert onInsert={onInsert}/>
    <ToDoList todos={todos} onRemove={onRemove} onToggle={onToggle}/>
  </ToDoTemp>
    );
}

export default App;
