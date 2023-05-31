import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {

  const [ advice, setAdvice ] = useState('');
  const [ adviceNum, setAdviceNum ] = useState('');

  useEffect(() => {
    getAdvice();
  }, [])

  const getAdvice = () => {
    axios
    .get('https://api.adviceslip.com/advice')
    .then((response) => {
      setAdvice(response.data.slip.advice);
      setAdviceNum(response.data.slip.id);
    })
    .catch((err) => {
      console.log(err);
    })
  }

  return (
    <>
      <div id='card'>
        <h4>ADVICE #{adviceNum}</h4>
        <h2>"{advice}"</h2>
        <img src="pattern-divider-desktop.svg" alt="divider" />
        <button onClick={() => getAdvice()}><img src="icon-dice.svg" alt="dice" /></button>
      </div>
    </>
  );
}

export default App;
