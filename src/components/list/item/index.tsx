import tasksInterface from '../../../types/tasks';
import style from '../List.module.scss';

export default function Item({task, time, selected, completed, id}: tasksInterface) {
    return (
        <li className={style.item}>
                        <h3>
                            {task}
                        </h3>
                        <span>
                            {time}
                        </span>
                    </li>
    )
}