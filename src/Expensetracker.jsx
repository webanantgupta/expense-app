import React, { useRef, useState } from 'react'
import { RxCross1 } from "react-icons/rx";
import GetText from './GetText';

const Expensetracker = (props) => {
let updatePriceRef = useRef()
let updatePlaceRef = useRef()

const [upObj, setObj] = useState("");
  const [click,setclick] = useState(false);
  // let arr=
   const [arr,setarr] = useState([
    {
        sno:1,
        place:"lko",
        price:123
    },
    {
        sno:2,
        place:"kanpur",
        price:1200
    },
    {
        sno:3,
        place:"Mall",
        price:1000
    },
    {
        sno:4,
        place:"Delhi",
        price:1003
    }
  ])


    let snoRef = useRef();
    let placeRef = useRef();
    let priceRef = useRef();

   const handleSubmit = (e) => {
     e.preventDefault();
    //  console.log("wefw");

     let obj = {
        sno:snoRef.current.value,
        price:priceRef.current.value,
        place:placeRef.current.value
     }
     if( obj.price && obj.place){
      setarr([...arr,obj]);
      // sno.current.value = "",
      // price.current.value = "",
      // place.current.value = ""
     }
     
   }
  
   const deleteFun = (ans,index) => {
      // console.log("delete");
      // method 1 using splice method
        // console.log(index,ans);
        // let copyArr = [...arr];
        // copyArr.splice(index,1);
        // setarr(copyArr);
        // console.log(setarr);


        //method 2 using filter method
        let ansArr = arr.filter((x) => 
          x.sno !== ans.sno
        )
        console.log(ansArr);
        setarr(ansArr);
   }

   const handleUpdate = (ans,index) => {
         console.log(ans,index);
         setclick(true);
         console.log(click);
   }

   const handleChange = (e) => {
    // e.preventDefault();
    let obj = {
      place:updatePlaceRef,
      price:updatePriceRef
    }
    console.log(obj);
   

  //  let place=updatePlaceRef.current.value;
  //  let price=updatePriceRef.current.value;
   console.log(upObj);
   let index = arr.findIndex((ele) => ele.sno===upObj.sno)
   console.log(index);

   let upObj ={}
   if(obj.place){
    upObj.place=obj.place;
   }else{
     
   }

   let copyArr = [...arr];
   copyArr[index] = obj;
   setObj(copyArr);
   setclick(false);
  }
  return (
    <div>Expensetracker

        <h3 className='fs-3 text-center mt-3 bg-warning'>This is Expense Tracker App</h3>
        <form  style={{width:"max-content"}} className='bg-dark p-3 m-auto mt-3'>
            <input type="number" placeholder='Sno' ref={snoRef} />
            <input type="text" placeholder='place' ref={placeRef}/>
            <input type="number" placeholder='price' ref={priceRef}/>
            <button  onClick={handleSubmit}>Submit</button>
            
        </form>
        

       {!arr.length && <h3 className='text-center'>Add text here</h3>}


        {/* {arr.map((ele) => {
          return <div>
            <span>{ele.sno}</span>
            <span>{ele.place}</span>
            <span>{ele.price}</span>
          </div>
        }) } */}
     { arr.length>=1 &&  <table className="table ">
  <thead>
    <tr>
      <th scope="col">SNO</th>
      <th scope="col">Place</th>
      <th scope="col">Price</th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
   
   {
    arr.map((ele, index) => {
      return  <tr key={ele.sno}>
      <th scope="row">{index+1}</th>
      <td>{ele.place}</td>
      <td>{ele.price}</td>
      <button onClick={() =>deleteFun(ele,index)} className="btn btn-danger">delete</button>
      <button onClick={() =>{handleUpdate(ele,index)}} className='btn btn-success'>Update</button>
    </tr>
    })
   }
  </tbody>
</table>}

{click && <form action="">
  <RxCross1 onClick={() => setclick(false)} />
  <label htmlFor="">Sno</label>
  <input type="number" placeholder='sno' ref={snoRef} />
  <label htmlFor="">Price</label>
  <input type="number" placeholder='place' ref={placeRef} />
  <label htmlFor="">Place</label>
  <input type="text" placeholder='price' ref={priceRef} />
  <button onClick={() => handleChange()} className='btn btn-primary'>Submit Update</button>
</form>}

<GetText text="i am expense"/>
    </div>
  )
}

export default Expensetracker