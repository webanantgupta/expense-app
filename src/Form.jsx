import React, { useRef } from 'react'
import GetText from './GetText'

const Form = () => {

let nameRef = useRef()
let emailRef = useRef()
let passwordRef = useRef()
let addressRef = useRef()
let maleRef = useRef()
let femaleRef = useRef()

    const submitData = (e) => {
         e.preventDefault()           
        console.log("adcac");

    let male =maleRef.current.checked
    let female=femaleRef.current.checked
    let gender;
    if(male===true){
        gender= "male"
    }
    else {
        gender= "female"
    }
        let obj = {
            name:nameRef.current.value,
            email:emailRef.current.value,
            password:passwordRef.current.value,
            address:addressRef.current.value,
           gender:gender // male === true ? "male" : "female"
        }
        console.log(obj);
    }
  return (
    <div>      <h1>Form</h1>
        <form action=''>
   <label htmlFor="">Name</label><br />
   <input type="text" ref={nameRef}/><br />

   <label htmlFor="">Email</label><br />
   <input type="email" ref={emailRef}/><br />

   <label htmlFor="">Password</label><br />
   <input type="password" ref={passwordRef}/><br />

   <div>
    <label>Gender :</label>
    <label htmlFor="a">Male</label>
    <input type="radio" name='gender' id='a' ref={maleRef}/>
    <label htmlFor="b">Female</label>
    <input type="radio" name='gender' id='b' ref={femaleRef}/>
   </div>

   <label htmlFor="">Address</label><br />
   <textarea name="" id="" ref={addressRef}></textarea><br />

   <button onClick={submitData}>Submit</button>
        </form>
        <GetText text={"i am form"}/>
    </div>
  )
}

export default Form