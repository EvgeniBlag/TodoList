import React, { useState } from 'react';
import { Header } from './Components/Header/Header';


type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(id:string)=>void
    changeFilter:(filterValue:string)=>void
    addTask:(title:string)=>void
}



export function Todolist(props: PropsType) {

  const [newTaskTitle,setNewTaskTitle]=useState("");

    return (

        <div>
            <h3>{props.title}</h3>
            <div>

            <input value={newTaskTitle} onChange={(e)=>{ setNewTaskTitle( e.currentTarget.value)}} />

                <button onClick={(e) => {
                    props.addTask(newTaskTitle)
                    setNewTaskTitle("") }}>Add</button>
            </div>
          
            <ul>
                {props.tasks.map((el)=>{
                 return(
                        <li key={el.id}>

                        <input type="checkbox" checked={el.isDone} />
                         <span>{el.title}</span>
                         <button onClick={(e)=>{props.removeTask(el.id)}}>Quit</button>

                        </li>
                 )
                })}

               
            </ul>
            <div>
                <button onClick={(e)=>{props.changeFilter("All")}} >All</button>
                <button onClick={(e)=>{props.changeFilter("Active")}} >Active</button>
                <button onClick={(e)=>{props.changeFilter("Completed")}}  >Completed</button>
            </div>

        </div>
    )
}
