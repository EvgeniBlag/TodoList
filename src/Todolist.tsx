import React, { ChangeEvent, ChangeEventHandler, KeyboardEvent, useState } from 'react';
import {Button} from './Components/Button/Button';


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
    addTask:(newTaskTitle:string)=>void
    changeStatus:(tasks1Id:string,isDone:boolean)=>void
   
    
}



export function Todolist(props: PropsType) {

  const [newTaskTitle,setNewTaskTitle]=useState("");
  const [error,setError]= useState <string | null> (null)

  const onNewTitleChangeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
      setNewTaskTitle(e.currentTarget.value)
  }
 const   addTaskHandler = () =>{
     if (newTaskTitle.trim() !== "") {
         props.addTask(newTaskTitle.trim());
         setNewTaskTitle("");
     }
     else {
         setError("Title is required")
     }
 }

  
  const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) =>{
      setError(null);
      if (e.key ==="Enter"){
        addTaskHandler()
      }
  }
  const remove = (elId:string) =>{
    props.removeTask(elId)
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
             onKeyPress={onKeyPressHandler}
             className = {error ? "error" : ""}
              />
            <button onClick={addTaskHandler}>Add</button>
           { error && <div className='error-message'>{error}</div>} 
            </div>
          
            <ul>
                {props.tasks.map((el)=>{

                    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) =>{
                      props.changeStatus ( el.id, e.currentTarget.checked )
                    }
                    const removeTask= ()=>{
                        remove(el.id)
                    }

                    const changeFilterHandler =(filterValue: string)=>{
                        props.changeFilter(filterValue)
                    }
                    
                 return(
                        <li key={el.id} className={el.isDone ? "is-done" : ""}>

                         <input
                             type="checkbox"
                             checked={el.isDone}
                             onChange={onChangeHandler}
                         />
                         <span>{el.title}</span>
                         <button onClick={removeTask}>Quit</button>

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
