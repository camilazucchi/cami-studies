import React from 'react';
import tasksInterface from '../../types/tasks';
import Button from '../button';
import style from './Form.module.scss';

class Form extends React.Component<{
    setTasks: React.Dispatch<React.SetStateAction<tasksInterface[]>>;
}> {
    state = {
        task: "",
        time: "00:00"
    }

    addTask(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        this.props.setTasks(oldTasks => [...oldTasks, {...this.state}]);
    }

    render() {
        return (
            <form className={style.newTask} onSubmit={this.addTask.bind(this)}>
                <div className={style.inputContainer}>
                    <label htmlFor="task">
                        Adicione um novo estudo.
                    </label>
                    <input 
                    type="text"
                    name="task"
                    id="task"
                    value={this.state.task}
                    onChange={event => this.setState({...this.state, task: event.target.value})}
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
                    value={this.state.time}
                    onChange={event => this.setState({...this.state, time: event.target.value})}
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
}

export default Form;