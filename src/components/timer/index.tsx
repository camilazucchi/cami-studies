import { timeToSeconds } from '../../common/utils/date'
import Button from '../button'
import Clock from './clock'
import style from './Timer.module.scss'

export default function Timer() {
    console.log('conversão: ', timeToSeconds('01:01:01'))
    return (
        <div className={style.timer}>
            <p className={style.title}>Escolha um card e inicie o cronômetro</p>
            <div className={style.clockWrapper}>
                <Clock />
            </div>
            <Button>
                Começar!
            </Button>
        </div>
    )
}