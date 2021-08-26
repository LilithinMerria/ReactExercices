import React, { useEffect, useState } from 'react';

const MoveMouse = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const MovePosition = e => {
        console.log("move event");
        setX(e.clientX);
        setY(e.clientY);
    }

    useEffect(() => {
        console.log("useEffect called here!");
        window.addEventListener('mousemove', MovePosition);

        return () => {
            console.log("Component Unmounted");
            window.removeEventListener('mousemove', MovePosition);
        }
    }, [])
    return (
        <div>
            <h2>Position X: {x} - Position Y: {y}</h2>
        </div>
    )
}

export default MoveMouse;