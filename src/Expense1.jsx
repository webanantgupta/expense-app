import React, { useState } from 'react'

const Expense1 = () => {

   const [arr,setarr] = useState([
    {
        sno:1,
        place:"lko",
        price:1000
    },
    {
        sno:2,
        place:"goa",
        price:2000
    },
    {
        sno:3,
        place:"kashmir",
        price:5000
    },
    {
        sno:4,
        place:"Russia",
        price:4562
    }
])
  return (
    <div>
        <h1>This is Expense1</h1>
        <form action="">
            <input type="number" placeholder='sno' />
            <input type="text" placeholder='place' />
            <input type="number" placeholder='price' />
            <button>ADD</button>
        </form>

        {/* {arr.map((ele) => {
           return <div>
            <span>{ele.sno}</span>
            <span>{ele.place}</span>
            <span>{ele.price}</span>
           </div>
        })} */}

<table class="table">
  <thead>
    <tr>
      <th scope="col">Sno</th>
      <th scope="col">Place</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
    
   {arr.map((ele,index) => {
    return <tr key={ele.sno}>
         <th scope="row">{index+1}</th>
         <td>{ele.place}</td>
         <td>{ele.price}</td>
         <button>Update</button>
       </tr>
      
   })}
    
  </tbody>
</table>
    </div>
  )
}

export default Expense1