import { type } from "os";
import React, {useState,ChangeEvent,KeyboardEvent} from "react";

type FullInputPropsType = {
   
    addTask:(newTaskTitle:string)=>void
    

}

export const FullInput = (props:FullInputPropsType) => {

    const [newTaskTitle,setNewTaskTitle]=useState("")
    const [error,setError]= useState <string | null> (null)

    const onNewTitleChangeHandler =(e:ChangeEvent<HTMLInputElement>)=>{
        setNewTaskTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>) =>{
        setError(null);
        if (e.key ==="Enter"){
          addTaskHandler()
        }
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

   

    return (
        <div>
            <input
                value={newTaskTitle}
                onChange={onNewTitleChangeHandler}
                onKeyPress={onKeyPressHandler}
                className={error ? "error" : ""}
            />
            <button onClick={addTaskHandler}>Add</button>
            {error && <div className='error-message'>{error}</div>}
        </div>
    )
}