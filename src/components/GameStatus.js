import React from 'react';

const GameStatus= (props)=>{
    return (
        <div className="center">
          {props.status === 'start'?  (
              <div>You will have few seconds to memorize the colored cells, click start when you are ready. 
            <div><button onClick={props.start}>Start</button></div>
                
             </div>
            ): null}
        {props.status === 'preview'?  (
              <div>please memorize the colored cells, the game will start in {props.timer} second(s).
  
             </div>
            ): null}
        {props.status === 'play'?  (
              <div>please select the cells, seconds left: {props.timer} second(s).
             </div>
            ): null}
        {props.status === 'gameover'?  (
             <div>
              <h1 className="red">Game Over</h1>           
              <button onClick={props.reset}>Play again</button>
             </div>
            ): null}
        {props.status === 'own'?  (
             <div>
              <h1 className="green">You Won!</h1> 
              <button onClick={props.reset}>Play again</button>
             </div>
            ): null}
        </div>
          );
  }

  export default GameStatus;