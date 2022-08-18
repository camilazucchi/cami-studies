import React, { useState } from 'react';
import tasksInterface from '../../types/tasks';
import Button from '../button';
import style from './Form.module.scss';
import { v4 as uuidv4} from 'uuid';

interface Props {
        setTasks: React.Dispatch<React.SetStateAction<tasksInterface[]>>;
}

function Form({ setTasks }: Props) {
    const [task, setTask] = useState("");
    const [ time, setTime] = useState("00:00");
    function addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setTasks(oldTasks =>
            [
                ...oldTasks,
                {
                    task,
                    time,
                    selected: false,
                    completed: false,
                    id: uuidv4()
                }
            ]
        );
        setTask("");
        setTime("00:00");
    }

    return (
        <form className={style.newTask} onSubmit={addTask}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Adicione um novo estudo.
                    </label>
                    <input 
                    type="text"
                    name="task"
                    id="task"
                    value={task}
                    onChange={event => setTask(event.target.value)}
                    placeholder="O que você vai estudar hoje?"
                    required
                    />
                </div>

                <div className={style.inputContainer}>
                    <label htmlFor="time">
                        Tempo de estudo.
                    </label>
                    <input
                    type="time"
                    step="1"
                    name="time"
                    value={time}
                    onChange={event => setTimeout(event.target.value)}
                    id="time"
                    min="00:00:00"
                    max="01:30:00"
                    required
                    />
                </div>
                <Button type="submit">
                    Adicionar
                </Button>
            </form>
        )
    }

export default Form;