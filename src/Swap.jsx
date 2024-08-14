import React, { useState } from 'react'

const Swap = () => {
const [x,setX] = useState(0);

const swapfun = () => {
  
}

  return (
    <div>
      {x ? <h1>Thie is head</h1> : <h2>This is body</h2>}
      <button onClick={swapfun}>click me</button>
    </div>
  )
}

export default Swap