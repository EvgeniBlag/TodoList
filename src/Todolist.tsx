import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
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

  const onNewTitleChangeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
      setNewTaskTitle(e.currentTarget.value)
  }
  const onKeyPrressHandler = (e:KeyboardEvent<HTMLInputElement>) =>{
      if (e.charCode ===13){
          props.addTask(newTaskTitle)
          setNewTaskTitle("")
      }
  }
   const addTask = () =>{
    
        props.addTask(newTaskTitle)
        setNewTaskTitle("") 
   }
   const onAllClickHandler = () => props.changeFilter("All")
   const onActiveClickHandler = () => props.changeFilter("Active")
   const onCompletedClickHandler = () => props.changeFilter("Completed")

    return (

        <div>
            <h3>{props.title}</h3>
            <div>
            <input
             value={newTaskTitle}
             onChange={onNewTitleChangeHandler}
             onKeyPress={onKeyPrressHandler}
              />
            <button onClick={addTask}>Add</button>
            </div>
          
            <ul>
                {props.tasks.map((el)=>{

                    const remove = () =>{
                          props.removeTask(el.id)
                    }
                    
                 return(
                        <li key={el.id}>

                        <input type="checkbox" checked={el.isDone} />
                         <span>{el.title}</span>
                         <button onClick={remove}>Quit</button>

                        </li>
                 )
                })}

               
            </ul>
            <div>
                <button onClick={onAllClickHandler}>All</button>
                <button onClick={onActiveClickHandler}>Active</button>
                <button onClick={onCompletedClickHandler}>Completed</button>
            </div>

        </div>
    )
}
