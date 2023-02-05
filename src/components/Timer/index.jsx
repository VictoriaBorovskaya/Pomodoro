import { useState} from "react"
import useSound from 'use-sound'
import AlarmClock from "./AlarmClock.mp3"
import Pomodoro from "components/Pomodoro"
import ShortBreak from "components/ShortBreak"
import LongBreak from "components/LongBreak"
import "./Styles.css"

const Timer = (props) => {
    // переменные для таймеров
    const {startTime, shortTime, longTime} = props

    // перерменные с useState
    const [PomodoroTime, setPomodoroTime] = useState(startTime) // state для Pomodoro
    const [shortBreakTime, setShortBreakTime] = useState(shortTime) // state для короткого переррыва
    const [longBreakTime, setLongBreakTime] = useState(longTime) // state для долгого перерыва
    const [isCounting, setIsCounting] = useState(false) // для изменения кнопок старт и пауза 
    const [isPomodoroActive, setIsPomodoroActive] = useState(true) // для переключения между вкладками Pomodoro и перерывами
    const [isActive, setIsActive] = useState(true) // для переключения между вкладками перерывов
    const [play] = useSound(AlarmClock)

    // функции onClick для кнопок
    const handleStart = () => {
        if(PomodoroTime === 0) setPomodoroTime(startTime)
        if(shortBreakTime === 0) setShortBreakTime(shortTime)
        if(longBreakTime === 0) setLongBreakTime(longTime)
        setIsCounting(true)
    }

    const handlePause = () => {
        setIsCounting(false)
    }

    // вот это надо для всех ситуаций подделать
    const handleReset = () => {
        setIsCounting(false)
        isPomodoroActive & isActive && setPomodoroTime(startTime)
        !isPomodoroActive & isActive  && setShortBreakTime(shortTime)
        !isPomodoroActive & !isActive && setLongBreakTime(longTime)
    }

    const handlePomodoro = () => {
        setIsPomodoroActive(true)
        setIsActive(true)
        setIsCounting(false)
    }

    const handleShortBreak = () => {
        setIsPomodoroActive(false)
        setIsActive(true)
        setIsCounting(false)
    }

    const handleLongBreak = () => {
        setIsPomodoroActive(false)
        setIsActive(false)
        setIsCounting(false)
    }

    return(
        <div className="max-w-3xl m-auto px-5 py-10 sm:py-20 sm:px-16">
            <div className="bg-red-300 rounded-md flex flex-col items-center">
                <div className="flex justify-between items-center w-full px-3 sm:px-10 py-8 gap-2 sm:gap-0">
                    <button className={isPomodoroActive & isActive ? "btn-timer-active" : "btn-timer"} onClick={handlePomodoro}>Pomodoro</button>
                    <button className={!isPomodoroActive & isActive ?  "btn-timer-active" : "btn-timer"} onClick={handleShortBreak}>Короткий перерыв</button>
                    <button className={!isPomodoroActive & !isActive ?  "btn-timer-active" : "btn-timer"} onClick={handleLongBreak}> Долгий перерыв</button>
                </div>
                <div>
                    { isPomodoroActive & isActive 
                    ? (<Pomodoro PomodoroTime={PomodoroTime} setPomodoroTime={setPomodoroTime} isCounting={isCounting} setIsCounting={setIsCounting}></Pomodoro>) 
                    : (!isPomodoroActive & isActive  ? <ShortBreak shortBreakTime={shortBreakTime} setShortBreakTime={setShortBreakTime} isCounting={isCounting} setIsCounting={setIsCounting}></ShortBreak> 
                    : (!isPomodoroActive & !isActive && <LongBreak longBreakTime={longBreakTime} setLongBreakTime={setLongBreakTime} isCounting={isCounting} setIsCounting={setIsCounting}></LongBreak>))}
                </div>
                <div className="flex justify-center gap-5">
                    {isCounting && (<button onClick={handlePause} className="btn-state">ПАУЗА</button>)}
                    {!isCounting && (<button onClick={handleStart} className="btn-state">СТАРТ</button>)}
                    <button onClick={handleReset} className="btn-state">СБРОС</button>
                </div>
            </div>
            { ((PomodoroTime=== 0) || (shortBreakTime === 0) || (longBreakTime === 0)) && (<audio onCanPlay={play}>
                <source src={AlarmClock} type="audio/mp3"></source>
            </audio>)}
            { (isPomodoroActive & isActive & PomodoroTime > 0) || (shortBreakTime === 0) || (longBreakTime === 0) ? (<p className="text-center font-medium text-2xl text-white py-5" >Время сосредоточиться!</p>) 
            : (((PomodoroTime === 0) || (!isPomodoroActive & !isActive) || (!isPomodoroActive & isActive)) && (<p className="text-center font-medium text-2xl text-white py-5" >Время отдохнуть!</p>))
            }
        </div>
    )
}

export default Timer