import React,{Fragment} from 'react';

interface Iprops{
    count:number,
    increment:()=>void,
    decrement:()=>void,
}
const Count = ({ increment,decrement,count }:Iprops) => {
    return (
        <Fragment>
            <h1>{count}</h1>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
        </Fragment>
    )
}

export default Count;