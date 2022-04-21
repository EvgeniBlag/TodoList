import React, { useState } from 'react';
import './App.css';
import { Header } from './Components/Header/Header';
import {Todolist} from './Todolist';

function App() {

   

    let[tasks1,setTasks1]=useState(
        [
            { id: 1, title: "HTML&CSS", isDone: true },
            { id: 2, title: "JS", isDone: true },
            { id: 3, title: "ReactJS", isDone: false }
        ]
    )
   
    const removeTask=(id:number)=>{
       
      tasks1=tasks1.filter((el)=>el.id !== id)
      setTasks1(tasks1)
        
    }

    return (
        <div className="App">
            
            <Todolist title="What to learn" tasks={tasks1} removeTask={removeTask} />
      
            
        </div>
    );
}

export default App;
