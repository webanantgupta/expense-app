import React, { useState } from 'react'

const Trail = (props) => {
    const [x,setx] = useState(0)



const incrementFun = () => {
    setx(x+1);
    console.log(x);
}

  return (
    <div>
        <button onClick={incrementFun}>click</button>
        <h3>{x}</h3>
        {props.arr2}<br></br>
        {props.b}
    </div>
  )
}

export default Trail