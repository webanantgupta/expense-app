import React, { useEffect, useState } from 'react'

const About = (props) => {
const [x,setX] = useState(false);
console.log(props);
console.log(props.value(600));

    const handleSwap = () => {
    
        if(x===false){
            setX(true)
    } else {
        setX(false)
    }
    }

 let info = {
  name: "anant",
  lastname: "gupta"
 }

 useEffect(() => {
   
 }, [])

  return (
    <div>About

       {x ? <h1>this is heading 1</h1> : <h2>this is heading 2</h2>} 
        
       {props.xyz}
        <button onClick={handleSwap}>Swap</button>
    </div>
  )

}

export default About