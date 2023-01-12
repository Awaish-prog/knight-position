import React, { useEffect, useState } from 'react';
import "./global.css"
import knight from "./download.png"

function App() {
  const [chessBoard, setChessBoard] = useState<Array<number>>([1])
  const [position, setPosition] = useState<number>(0);
  let offset = 0;
  let offsetHelper = 0;
  useEffect(() => {
    setChessBoard([1])
    for(let i = 1; i < 64; i++){
      setChessBoard((prev) => {
        return [...prev, prev[prev.length - 1] + 1]
      })
    }
  }, [])
  return (
    <div className='chessBoard'>
    {
      chessBoard.map((cell, index) => {
        if(offsetHelper === 8){
          offset++
          offsetHelper = 0
        }
        offsetHelper++
        return <div className={(index + offset) % 2 ? 'whiteCell' : "blackCell"} key={index}>
          <p className='cellPara'>{cell}</p>
          {index === position ? <img src={knight} width="40px" className="knightImage" /> : null }</div>
      })
    }
    </div>
  );
}

export default App;
