import React, { useState } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import {Todolist} from './Todolist';

function App() {

   

   const[tasks1,setTasks1]=useState(
        [
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true },
            { id: 3, title: "ReactJS", isDone: false }
        ]
    )
    const removeTask=(id:number)=>{
      setTasks1(tasks1.filter((el)=>el.id !== id))
    }

    const[filter,setFilter]=useState("All")

   let filteredTask = tasks1

   if(filter==="Active"){
       filteredTask=tasks1.filter((el)=>!el.isDone)
   }

   if(filter==="Completed"){
    filteredTask=tasks1.filter((el)=>el.isDone)
}

   const changeFilter=(filterValue:string)=>{
       setFilter(filter)
   }


    return (
        <div className="App">
            
            <Todolist title="What to learn" tasks={filteredTask} removeTask={removeTask}  changeFilter={changeFilter} />
      
            
        </div>
    );
}

export default App;
