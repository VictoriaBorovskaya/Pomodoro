import Header from 'components/Header';
import Timer from 'components/Timer';
import Information from 'components/Information';
import './App.css';
import { useState } from "react"


function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <Header isOpen={isOpen} setIsOpen={setIsOpen} />
      <Information isOpen={isOpen} setIsOpen={setIsOpen} />
      <Timer/>
    </div>
  );
}

export default App;
