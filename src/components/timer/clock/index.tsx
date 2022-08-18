import React from 'react';
import style from './Clock.module.scss';

interface Props {
    time: number | undefined;
}

export default function Clock({ time = 0 }: Props) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    const [tenMinutes, unityMinutes] = String(minutes).padStart(2, '0');
    const [tenSeconds, unitySeconds] = String(seconds).padStart(2, '0');

    return (
        <>
            <span className={style.clockNumber}>{tenMinutes}</span>
            <span className={style.clockNumber}>{unityMinutes}</span>
            <span className={style.clockDiv}>:</span>
            <span className={style.clockNumber}>{tenSeconds}</span>
            <span className={style.clockNumber}>{unitySeconds}</span>
        </>
    )
}