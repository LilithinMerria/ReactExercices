import React, { useEffect, useState } from 'react';

const CounterInterval = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCount(prev => prev + 1);
        }, 1000);
        return () => {
            clearInterval(interval);
        }
    })

    return (
        <div>
            {count}
        </div>
    )
}

export default CounterInterval;