import tasksInterface from '../../types/tasks';
import Item from './item';
import style from './List.module.scss';

function List({ tasks }: { tasks: tasksInterface[] }) {
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