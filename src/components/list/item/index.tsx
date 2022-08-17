import tasksInterface from '../../../types/tasks';
import style from '../item/Item.module.scss';

interface Props extends tasksInterface {
    selectTask: (selectedTask: tasksInterface) => void
}

export default function Item(
    {
        task,
        time,
        selected,
        completed,
        id,
        selectTask
    }: Props) {
    return (
        <li
            className={`${style.item} ${selected ? style.selectedItem : ''}`}
            onClick={() => selectTask(
            {
                    task,
                    time,
                    selected,
                    completed,
                    id
            }
        )}
        >
                        <h3>
                            {task}
                        </h3>
                        <span>
                            {time}
                        </span>
                    </li>
    )
}