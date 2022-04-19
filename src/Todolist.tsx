import React from 'react';
import { Button } from './Button/Button';
import { Footer } from './Footer/Footer';
import { Header } from './Header/Header';

type TaskType = {
    id: number
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
}

export function Todolist(props: PropsType) {
    return (
        <div>
            <Header  />
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone} /> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone} /> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone} /> <span>{props.tasks[2].title}</span></li>

               <Button text={"YOO!!!!!"} />

            </ul>


        </div>
    )
}
