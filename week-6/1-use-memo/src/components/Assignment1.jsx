import { useEffect, useMemo, useState } from "react";

// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input. 
// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.

export function Assignment1() {

const [input, setInput] = useState(0);

    

const expensiveValue = useMemo(() => expensiveCalculation(input), [input]);

    return (
        <div>
            <input 
                type="number" 
                value={input} 
                onChange={(e) => setInput(Number(e.target.value))} 
            />
            <p>Calculated Value: {expensiveValue}</p>
        </div>
    );
}


const expensiveCalculation = (input)=> 
{
    let ans = 1; 

    if(input==0 || input ==1)
    {
        return 1; 
    }
    else
    {

    for(let i = 2; i<=input; i++)
    {
        ans = ans*i; 
    }

    return ans; 

    }
}




