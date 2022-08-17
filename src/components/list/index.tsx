import tasksInterface from '../../types/tasks';
import Item from './item';
import style from './List.module.scss';

interface Props {
    tasks: tasksInterface[],
    selectTask: (selectedTask: tasksInterface) => void
}

function List({ tasks, selectTask }: Props) {
    return (
        <aside className={style.taskList}>
            <h2>Estudos do dia</h2>
            <ul>
                {tasks.map(item => (
                    <Item 
                        selectTask={selectTask}
                        key={item.id}    
                        {...item}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default List;