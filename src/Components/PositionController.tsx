import React, { useState } from "react";

interface ChangePosition {
    changePosition: Function
}

const PositionController : React.FC<ChangePosition> = ({changePosition} : ChangePosition) : JSX.Element => {
    const [positionSetter, setPositionSetter] = useState<string>("")

    const changePoistionToNew : Function = () : void => {
        if(Number(positionSetter) >= 0 && Number(positionSetter) < 65){
            changePosition(Number(positionSetter) - 1)
        }
        setPositionSetter("")
    }

    return (
        <section>
        <form onSubmit={(e) => {
            e.preventDefault()
            changePoistionToNew()
        }}>
            <input type="text" value = {positionSetter} onChange={(e) => setPositionSetter(e.target.value)} placeholder = "0" />
            <input type="submit" />
        </form>
        <button>Calculate Position</button>
        </section>
    )
}

export default PositionController