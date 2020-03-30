import React, {useState, useEffect} from 'react';
import Utils from '../Utils';

const useGameState = (rowCellsCount, onTimerTimedOut)=>{
    const [status, setstatus] = useState('start');
    const [timer, setTimer]=useState(0);
     useEffect(()=>{
      let timerId;
      if(timer > 0){
         timerId = setTimeout(()=>{
          setTimer(timer -1);
          if(timer === 1) onTimerTimedOut();
        }, 1000);
      }
      return ()=>{ clearTimeout(timerId);}
    });
  
    
    const [targetCells] = useState(Utils.randomNumbers(0, Math.pow(rowCellsCount,2)-1, rowCellsCount));
    const [correctClicks, setCorrectClicks]=useState([]);
    const [wrongClicks, setWrongClicks]=useState([]);
    const setGameStatus = (newStatus, timer=0)=>{
        setstatus(newStatus);  
        setTimer(timer);
    }
  
    
    return {status, targetCells, correctClicks, wrongClicks, timer, setGameStatus, setCorrectClicks, setWrongClicks};
  }

  export default useGameState;