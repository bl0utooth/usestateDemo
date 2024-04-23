import React, { useState } from "react";
import NumberItem from "./NumberItem";

const NumberList = () => {
    const [numbers, setNumbers] = useState([2, 5, 7, 11, 13, 19]);
    const remove = (num) => {
        setNumbers(numbers.filter(n => n !== num))
        console.log("removing:", num);
    }
    return (
        <ul>
            {numbers.map(n => {
                <NumberItem number={n} remove={remove} />
            })}
        </ul>
    )
}

export default NumberList;