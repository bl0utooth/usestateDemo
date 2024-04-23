import React, { useState } from 'react';

function SimpleCounter() {
    const [num, setNum] = useState(0);

    const countUp = () => {
        setNum(num + 1)
    }
    const countUpByTwo = () => {
        setNum(n => n + 1)
        setNum(n => n + 1)
    }
    const countUpByFive = () => {
        setNum(num + 5)
    }
    const countUpByHundred = () => {
        setNum(num + 100)
    }
    const minusUpByHundred = () => {
        setNum(num - 100)
    }

    return (
        <div>
            <h3>Count: {num}</h3>
            <button onClick={countUp}>Up by 1</button>
            <button onClick={countUpByTwo}>Up by 2</button>
            <button onClick={countUpByFive}>Up by 5</button>
            <button onClick={countUpByHundred}>Up by 100</button>
            <button onClick={minusUpByHundred}>Down by 100</button>
        </div>
    );
}

export default SimpleCounter;