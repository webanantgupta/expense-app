import React, { useState } from 'react'
import GetText from './GetText';

const Counter = (props) => {
console.log(props);
const [x,setx] = useState(0)


// arrow function
let handleIncrement = () => {
       setx(x+1);
}
let handleDecrement = () => {
    setx(x-1);
}

const [y,sety] = useState(1)
let handlemultiply = () => {
    sety(y*2)
}
let handleDivide = () => {
    sety(y/2)
}
  return (

    
    <div>

      {/* <span>{props.arr1}</span> */}
      
      
        <h1>This is counter aplication</h1>
        <button onClick={handleIncrement}>Increment</button>
        <span>{x}</span>
        <button onClick={handleDecrement}>Decrement</button>
 <br />
 <br />
        <button onClick={handlemultiply}>Multiply</button>
        <span>{y}</span>

        <button onClick={handleDivide}>Divide</button>
        {/* {props.arr1.map((ele) =>{
          return <p>{ele}</p>
         })} */}

         {props.s.map((ele) => {
          return <p>{ele}</p>
         })}

         {props.arr1.map((ele) => {
          return <p>{ele}</p>
         })}

         <span> {props.a1}</span>
        

         {/* {props.obj1.map((ele) => {
          return <p>{ele}</p>
         })} */}

         <GetText text="I am from counter"/>
    </div>
  )
}

export default Counter