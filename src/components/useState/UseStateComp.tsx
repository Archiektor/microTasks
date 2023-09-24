import React, {useState} from 'react';

const UseStateComp = () => {
    let [a, setA] = useState(1);

    const onClickHander = () => {
        setA(a + 4);
        console.log()
    }

    const onClickHander2 = () => {
        setA(0);
    }
    return (
        <div>
            <h1>{a}</h1>
            <button onClick={onClickHander}>Add 1</button>
            <button onClick={onClickHander2}>0</button>
        </div>
    )
}

export default UseStateComp;