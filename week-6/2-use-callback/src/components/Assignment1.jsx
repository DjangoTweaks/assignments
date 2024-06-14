import { useCallback } from "react";
import { useState } from "react";

// Create a counter component with increment and decrement functions. Pass these functions to a child component which has buttons to perform the increment and decrement actions.
// Use useCallback to ensure that these functions are not recreated on every render.

export function Assignment1() {
    const [count, setCount] = useState(0);

    console.log("parent rerender"); 

    const cachedFnHandleIncrement = useCallback(()=>{ 
        console.log("increment rendering"); 
        setCount(count+1)},[]);
    // const cachedFnHandleDecrement = useCallback(()=>{setCount(count-1)}, []);

    function regDecrementFunction()
     {
        console.log("decrement rendering");
        setCount(count-1);  
     }
    

    return (
        <div>
            <p>Count: {count}</p>
            <CounterButtons onIncrement={cachedFnHandleIncrement} onDecrement={regDecrementFunction} />
        </div>
    );
};

const CounterButtons = ({ onIncrement, onDecrement }) => (
    <div>
        {console.log("child component rerendering")}         
        <button onClick={onIncrement}>Increment</button>
        <button onClick={onDecrement}>Decrement</button>
    </div>
);
