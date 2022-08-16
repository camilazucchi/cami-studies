import React, { useState } from 'react';
import Item from './item';
import style from './List.module.scss';

function List() {
    const [tasks, setTasks] = useState([{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'JavaScript',
        time: '01:00:00'
    }, {
        task: 'TypeScript',
        time: '03:00:00'
    }]);
    return (
        <aside className={style.taskList}>
            <h2 onClick={() => {
                setTasks([...tasks, { task: "Estudar estado", time: "01:00:00"}])
            }}>Estudos do dia</h2>
            <ul>
                {tasks.map((item, index) => (
                    <Item 
                        key={index}    
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;