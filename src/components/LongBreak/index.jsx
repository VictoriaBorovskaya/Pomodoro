import { useEffect } from "react"

const LongBreak = (props) => {
    const {longBreakTime, setLongBreakTime,isCounting, setIsCounting } = props
    const getTime = (longBreakTime) => longBreakTime.toString().padStart(2, '0')
    const minutes = getTime(Math.floor(longBreakTime / 60))
    const seconds = getTime(longBreakTime - minutes * 60)

    useEffect(() => {
        const interval = setInterval(() => {
            isCounting && 
            setLongBreakTime((longBreakTime) => (longBreakTime >= 1 ? longBreakTime - 1 : 0))
        }, 1000)
        if(longBreakTime === 0) setIsCounting(false)
        return () => clearInterval(interval)
    }, [longBreakTime, isCounting, setLongBreakTime, setIsCounting])

    return(
        <div className="text-9xl font-bold text-white py-10">
            <span>{minutes}</span>
            <span>:</span>
            <span>{seconds}</span>
        </div>      
    )
}

export default LongBreak