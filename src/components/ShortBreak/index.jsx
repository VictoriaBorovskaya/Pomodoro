import { useEffect } from "react"

const ShortBreak = (props) => {
    const {shortBreakTime, setShortBreakTime, isCounting, setIsCounting } = props
    const getTime = (shortBreakTime) => shortBreakTime.toString().padStart(2, '0')
    const minutes = getTime(Math.floor(shortBreakTime / 60))
    const seconds = getTime(shortBreakTime - minutes * 60)

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting && 
            setShortBreakTime((shortBreakTime) => (shortBreakTime >= 1 ? shortBreakTime - 1 : 0))
        }, 1000)
        if(shortBreakTime === 0) setIsCounting(false)
        return () => clearInterval(interval)
    }, [shortBreakTime, isCounting, setShortBreakTime, setIsCounting])

    // для вывода времени в title
    document.title = '(' + minutes + ':' + seconds + ') Pomodoro'

    return(
        <div className="text-8xl sm:text-9xl font-bold text-white py-10">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>
    )
}

export default ShortBreak