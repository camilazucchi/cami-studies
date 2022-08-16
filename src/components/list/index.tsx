import React from 'react';
import Item from './item';
import style from './List.module.scss';

function List() {
    const tasks = [{
        task: 'React',
        time: '02:00:00'
    }, {
        task: 'JavaScript',
        time: '01:00:00'
    }, {
        task: 'TypeScript',
        time: '03:00:00'
    }]
    return (
        <aside className={style.taskList}>
            <h2>Estudos do dia</h2>
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