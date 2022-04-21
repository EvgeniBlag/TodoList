import React, { useState } from 'react';
import { Header } from './Components/Header/Header';


type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask:(id:number)=>void
    setFilter:(filterValue:string)=>void

}

export function Todolist(props: PropsType) {

  

    return (

        <div>
            <h3>{props.title}</h3>
            <div>
            <input />
            <button>Add</button>
        </div>
          
            <ul>
                {props.tasks.map((el)=>{
                 return(
                        <li key={el.id}>

                        <input type="checkbox" checked={el.isDone} />
                         <span>{el.title}</span>
                         <button onClick={()=>{props.removeTask(el.id)}}>Quit</button>

                        </li>
                 )
                })}

               
            </ul>
            <div>
                <button onClick={()=>{props.setFilter("All")}}>All</button>

                <button onClick={()=>{props.setFilter("Active")}}>Active</button>
                <button onClick={()=>{props.setFilter("Completed")}}>Completed</button>
            </div>

        </div>
    )
}