import React, { useState } from 'react';
import { v1 } from 'uuid';
import './App.css';
import { Header } from './Components/Header/Header';
import {Todolist} from './Todolist';

function App() {

   

   const[tasks1,setTasks1]=useState(
        [
            { id: v1(), title: "HTML&CSS", isDone: true },
            { id: v1(), title: "JS", isDone: true },
            { id: v1(), title: "ReactJS", isDone: false }
        ]
    )
    const removeTask=(id:string)=>{
      setTasks1(tasks1.filter((el)=>el.id !== id))
    }

    const addTask = (newTitle:string) =>{
        let newTask = { id: v1(), title:newTitle, isDone:false};
        let newTasks = [newTask, ...tasks1];
        setTasks1(newTasks);
    }

    const [filter,setFilter]=useState("All")

    let filteredTask = tasks1

    if(filter==="Active"){
        filteredTask=tasks1.filter((el)=>!el.isDone)
    }
    if(filter==="Completed"){
        filteredTask=tasks1.filter((el)=>el.isDone)
    }



  const changeFilter = (filterValue:string) =>{
      setFilter(filterValue)
  }


    return (
        <div className="App">
            <Todolist title="What to learn"
                tasks={filteredTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
                addTask={addTask} />
        </div>
    );
}

export default App
