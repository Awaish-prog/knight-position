import React, { useState } from "react";

interface ChangePosition {
    changePosition: Function,
    calculatePlaces: Function,
    resetPlaces: Function
}

const PositionController : React.FC<ChangePosition> = ({changePosition, calculatePlaces, resetPlaces} : ChangePosition) : JSX.Element => {
    const [positionSetter, setPositionSetter] = useState<string>("")

    const changePoistionToNew : Function = () : void => {
        if(Number(positionSetter) > 0 && Number(positionSetter) < 65){
            changePosition(Number(positionSetter))
            resetPlaces()
        }
        setPositionSetter("")
    }

    return (
        <section className="controller">
        <p className="enter">Enter a position from 1 to 64</p>
        <form className="positionForm" onSubmit={(e) => {
            e.preventDefault()
            changePoistionToNew()
        }}>
            <input type="text" value = {positionSetter} onChange={(e) => setPositionSetter(e.target.value)} placeholder = "0" />
            <input className="controlButtons" type="submit" value="Move" />
        </form>
        <button className="controlButtons" onClick={() => {calculatePlaces()}}>Click to see places where knight can go</button>
        <button className="controlButtons" onClick={() => {resetPlaces()}}>Hide Available places</button>
        </section>
    )
}

export default PositionController