import { useEffect } from "react"

const Pomodoro = (props) => {
    const {PomodoroTime, setPomodoroTime, isCounting, setIsCounting} = props
    const getTime = (PomodoroTime) => PomodoroTime.toString().padStart(2, '0')
    const minutes = getTime(Math.floor(PomodoroTime / 60))
    const seconds = getTime(PomodoroTime - minutes * 60)

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting && 
            setPomodoroTime((PomodoroTime) => (PomodoroTime >= 1 ? PomodoroTime - 1 : 0))
        }, 1000)
        if(PomodoroTime === 0) setIsCounting(false)
        return () => clearInterval(interval)
    }, [PomodoroTime, isCounting, setPomodoroTime, setIsCounting])

    return(
        <div className="text-8xl sm:text-9xl font-bold text-white py-10">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>
    )
}

export default Pomodoro