import Header from 'components/Header';
import Timer from 'components/Timer';
import Information from 'components/Information';
import './App.css';
import { useState } from "react"

function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [isActive, setIsActive] = useState(false)

  // переменные для таймеров
  let startTime = 25 * 60
  let shortTime = 5 * 60
  let longTime = 15 * 60

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} isActive={isActive} setIsActive={setIsActive} />
      <Information isOpen={isOpen} setIsOpen={setIsOpen} />
      <Timer startTime={startTime} shortTime={shortTime} longTime={longTime}/>
    </div>
  );
}

export default App;
