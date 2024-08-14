import React, { useState } from 'react'

const Form1 = () => {
  const [name,setName] = useState("");
  const [email,setMail] = useState("");
  const [password,setPassword] = useState("");
  const [male,setMale] = useState("");
  const [female, setFemale] = useState("");
  const [address,setAddress] = useState("");



    const handleChange = (e) => {
    let nameValue = e.target.value;
    console.log(nameValue);
    setName(nameValue);
    }

    const handleEmailChange = (e) => {
        let emailValue = e.target.value;
        console.log(emailValue);
        setMail(emailValue);
        }
    
    const handlePasswordChange = (e) => {
      let passwordValue = e.target.value;
      console.log(passwordValue);
      setPassword(passwordValue);
    }

    const handleMaleChange = (e) => {
      let maleValue = e.target.checked;
      console.log(maleValue);
      setMale(maleValue);
    }

    const handleFemaleChange = (e) => {
      let femaleVlaue = e.target.checked;
      console.log(femaleVlaue);
      setFemale(femaleVlaue);
    }

    const handleAddressChnage = (e) => {
      let addressValue = e.target.value;
      console.log(addressValue);
      setAddress(addressValue);
    }

    const handleSubmit = (e) => {
      e.preventDefault();
      let obj = {
        name:name,
        email:email,
        password:password,
        address:address,
        gender: male === true ? "male" : "female"
      }
      console.log(obj);
    }

  return (
    <div>
        <h1>This is form 1</h1>
    

    <div>      <h1>Form</h1>
        <form action=''>
   <label htmlFor="">Name</label><br />
   <input  onChange={handleChange} type="text" /><br />

   <label htmlFor="">Email</label><br />
   <input  onChange={handleEmailChange}  type="email" /><br />

   <label htmlFor="">Password</label><br />
   <input type="password" onChange={handlePasswordChange}/><br />

   <div>
    <label>Gender :</label>
    <label htmlFor="a">Male</label>
    <input type="radio" name='gender' id='a' onChange={handleMaleChange}/>
    <label htmlFor="b">Female</label>
    <input type="radio" name='gender' id='b' onChange={handleFemaleChange}/>
   </div>

   <label htmlFor="">Address</label><br />
   <textarea name="" id="" onChange={handleAddressChnage}></textarea><br />

   <button onClick={handleSubmit}>Submit</button>
        </form>
    </div>
   


    </div>
  )
}

export default Form1