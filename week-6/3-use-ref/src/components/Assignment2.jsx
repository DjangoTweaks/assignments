import React, { useState, useRef } from 'react';
import { useEffect } from 'react';

// Create a component that tracks and displays the number of times it has been rendered. Use useRef to create a variable that persists across renders without causing additional renders when it changes.

export function Assignment2() {
    const totalTimesRendered = useRef(0);
    const [n, forceRender] = useState(0);




    useEffect(()=>{
        totalTimesRendered.current = totalTimesRendered.current+ 1;
    }, [n])

     




    const handleReRender = () => {
        // Update state to force re-render
        forceRender(n+1);
    };

    return (
        <div>
            <p>This component has rendered {totalTimesRendered.current} times.</p>
            <button onClick={handleReRender}>Force Re-render</button>
        </div>
    );
};