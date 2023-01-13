import React, { useEffect, useState } from 'react';
import "../global.css"
import knight from "../—Pngtree—black chess knight horse stallion_8864303.png"

interface Postion {
    position: number,
    places: Array<number>
}

const ChessBoard : React.FC<Postion> = ({position, places} : Postion) : JSX.Element => {
  const [chessBoard, setChessBoard] = useState<Array<number>>([1])
  
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
        return <div className={(index + offset) % 2 ? 'whiteCell' : "blackCell"} id={places.includes(index + 1) ? "validPlace": ""} key={index}>
          <p className='cellPara'>{cell}</p>
          {index === position - 1 ? <img src={knight} width="100px" className="knightImage" /> : null }</div>
      })
    }
    </div>
  );
}

export default ChessBoard;
