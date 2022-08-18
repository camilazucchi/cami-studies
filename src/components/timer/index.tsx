import { timeToSeconds } from '../../common/utils/time'
import { useEffect, useState } from 'react'
import tasksInterface from '../../types/tasks'
import Button from '../button'
import Clock from './clock'
import style from './Timer.module.scss'

interface Props {
    selected: tasksInterface | undefined
}

export default function Timer({ selected }:
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
            }, 1000)
        }

    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock time={time}/>
            </div>
            <Button onClick={() => regressive(time)}>
                Começar!
            </Button>
        </div>
    )
}