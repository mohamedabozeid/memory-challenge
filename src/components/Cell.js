import React from 'react';

const Cell = ({status, onClick, id})=>{
    return (
      <div className={`cell 
                    ${status==='target'?'target-cell':''} 
                    ${status==='active'?'active':''} 
                    ${status==='correct'?'correct':''} 
                    ${status==='wrong'?'wrong':''}`} 
                    onClick={(evt)=>onClick(id)}>
        
      </div>);
  }

  export default Cell;