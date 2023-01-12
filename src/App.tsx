import React, { useState } from 'react';
import ChessBoard from './Components/ChessBoard';
import PositionController from './Components/PositionController';

function App() {
  const [position, setPosition] = useState<number>(1);
  const [places, setPlaces] = useState<Array<number>>([])

  const changePosition : Function = (position: number) : void => {
      setPosition(position)
  }
  const calculatePlaces : Function = () : void => {
    const validPositions : Array<number> = []
    const row = position % 8
    const column = Math.floor(position / 8) 
    if(row > 2){
      if(position - 2 + 8 < 65){
        validPositions.push(position - 2 + 8)
      }
      if(position - 2 - 8 > 0){
        validPositions.push(position - 2 - 8)
      }
      
    }
    if(row < 7){
      if(position + 2 + 8 < 65){
        validPositions.push(position + 2 + 8)
      }
      if(position + 2 - 8 > 0){
        validPositions.push(position + 2 - 8)
      }
      
    }
    if(column > 1){
      if((position - 16) % 8 > 0){
        validPositions.push(position - 16 + 1)
      }
      
      if((position - 16) % 8 > 1){
        validPositions.push(position - 16 - 1)
      }
      
    }
    if(column < 6){
      if((position + 16) % 8 > 0){
        validPositions.push(position + 16 + 1)
      }
      if((position + 16) % 8 > 1){
        validPositions.push(position + 16 - 1)
      }
      
    }

    setPlaces(validPositions)
    
  }
  const resetPlaces : Function = () : void => {
    setPlaces([])
  }
  return (
    <section className='chessBoardContainer'>
    <ChessBoard position={position} places={places} />
    <PositionController changePosition={changePosition} calculatePlaces={calculatePlaces} resetPlaces={resetPlaces} />
    </section>
  );
}

export default App;
