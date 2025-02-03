import { useState } from "react"

function Counter(){

    //     [variableName, updaterFunction] = useState(initialValue)
    const [count, setCount] = useState(0)

    let countVariable = 0
   

    function increaseCount(){
        console.log("Count increase")
        // WE NEVER CHANGE THE STATE DIRECTLY
        // ALWAYS USE THE UPDATER FUNCTION
        setCount(count+1)
        // countVariable+=1
    }

    function decreaseCount(){
        if(count >0){
            setCount(count-1)
        }
        // countVariable+=1
    }
    return(
        <div>
            <h2>{count}</h2>
            <button onClick={increaseCount}>+</button>
            <button onClick={decreaseCount}>-</button>
        </div>
    )
}

export default Counter