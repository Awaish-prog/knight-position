import React, { useState } from 'react';
import ChessBoard from './Components/ChessBoard';
import PositionController from './Components/PositionController';

function App() {
  const [position, setPosition] = useState<number>(0);

  const changePosition : Function = (position: number) : void => {
      setPosition(position)
  }
  return (
    <section className='chessBoardContainer'>
    <ChessBoard position={position} />
    <PositionController changePosition={changePosition} />
    </section>
  );
}

export default App;
