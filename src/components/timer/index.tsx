import { timeToSeconds } from '../../common/utils/time'
import { useEffect, useState } from 'react'
import tasksInterface from '../../types/tasks'
import Button from '../button'
import Clock from './clock'
import style from './Timer.module.scss'

interface Props {
    selected: tasksInterface | undefined,
    endTask: () => void
}

export default function Timer({ selected, endTask }:
    Props) {
        const [time, setTime] = useState<number>();
        useEffect(() => {
            if(selected?.time) {
                setTime(timeToSeconds(selected?.time));
            }
        }, [selected]);

        function regressive(counter: number = 0) {
            setTimeout(() => {
                if(counter > 0) {
                    setTime(counter - 1);
                    return regressive(counter - 1);
                }
                endTask();
            }, 1000)
        }

    return (
        <div className={style.timer}>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>
                Começar
            </Button>
        </div>
    )
}