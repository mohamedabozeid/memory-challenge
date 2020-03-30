import React from 'react';
import Cell from './Cell';
import GameStatus from './GameStatus';
import useGameState from './UseGameState';
import Utils from '../Utils';

const Game = (props)=>{ 
    const allCells = Utils.range(Math.pow(props.rowCellsCount,2));
        
    const startGame = ()=>{
      startPreview();
    }  
   const onTimerTimeout =()=>{
      if(status==='preview'){
       startPlay();
     }else if(status==='play'){
       gameOver();
     }
   }
   
   const {status, targetCells, correctClicks, wrongClicks, timer, setGameStatus, setCorrectClicks, setWrongClicks}  = useGameState(props.rowCellsCount, onTimerTimeout);
    const startPreview=()=>{
      setGameStatus('preview', 3);     
    }
    const startPlay = ()=>{
      setGameStatus('play', 7);   
    }
    const gameOver = ()=>{
      setGameStatus('gameover');  
    }
    const gameOwn= ()=>{
      setGameStatus('own');
    }  
    const cellStatus = (cellId)=>{
        if(status==='preview' && targetCells.includes(cellId)) return 'target';
        else if(correctClicks.includes(cellId)) return 'correct';
        else if(wrongClicks.includes(cellId)) return 'wrong';
        else if(status === 'play') return 'active';
        return 'default';
    }
    const onCellClick = (cellId)=>{
      if(status !== 'play') return;
      if(targetCells.includes(cellId)){
        setCorrectClicks([cellId, ...correctClicks]);
        if(correctClicks.length + 1 === props.rowCellsCount) gameOwn();
      }else{
        setWrongClicks([cellId, ...wrongClicks]);
        if(wrongClicks.length +1 === 3) gameOver();
      }
    }
    return (
      <div class="game">
        {allCells.map((cell, i)=> (
          <>
            <Cell key={i} status={cellStatus(i)} onClick={onCellClick} id={i}/>
          </>
        ))}
        <GameStatus status={status} start={startGame} timer={timer} reset={props.resetGame}/>
      </div>
    );
  }

  export default Game;