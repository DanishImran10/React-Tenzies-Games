import { useState } from "react"
import Confetti from "react-confetti"

export default function PlayArea() {

    function generateDie() {
        const generatedDie = []
        for (let i = 0; i < 10; i++)
        {
            generatedDie.push (
            {
                id: i,
                value: Math.ceil(Math.random() * 6), 
                clicked: false 
            })
        }
        return generatedDie
    }

    function handleDiceClick(id) {
        setDiceArray(prevDiceArray => prevDiceArray.map(dice => 
            dice.id === id ? 
            {...dice, clicked: !dice.clicked} : dice))
    }

    function handleButtonClick() {
        if (!hasGameCompleted)
        {
            setDiceArray(prevDiceArray => {
                return prevDiceArray.map(dice => 
                    dice.clicked ? 
                    dice : { ...dice, value: Math.floor(Math.random() * 10) })
            })
        }
        else
            setDiceArray(generateDie())
    }


    const [diceArray, setDiceArray] = useState( () => generateDie() )           //lazy state initialization

    const firstValue = diceArray[0].value
    const hasGameCompleted = diceArray.every(dice => dice.clicked && dice.value === firstValue)

    const diceElements = diceArray.map(dice => {
        return (
            <div
                key={dice.id}
                className={dice.clicked ? "dice-clicked" : "dice"}
                onClick={ () => handleDiceClick(dice.id) }
            >
                {dice.value}
            </div>
        )
    })

    
    return (
        <div className="playarea--maindiv">
            {hasGameCompleted && <Confetti width={320} />}

            <div className="dice-grid">
                {diceElements}
            </div>
            
            <button
                className="roll-button"
                onClick={handleButtonClick}
            >
                {hasGameCompleted ? "New Game" : "Roll"}
            </button>
        </div>
    )
}