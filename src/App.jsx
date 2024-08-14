
import './App.css';
import Counter from './Counter';
import Navbar from './Navbar';
import Trail from './Trail';
import Homepage from './Homepage';
import About from './About';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Contact from './Contact';
import Form from './Form';
import Form1 from './Form1';
import Expensetracker from './Expensetracker';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Expense1 from './Expense1';
import { useState } from 'react';


function App() {
  let s = [2,34,5,6];
  console.log(s);

  let arr = [1,3,2,3,22,44,666];
  let a = 23;
  let obj = {
    name: "anant",
    lastName: "gupta"
  }
 
const [child,setchild] = useState("");

  function xyz (ans) {
    console.log(ans);
    setchild(ans);
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/about' element={<About value={xyz}/>}/>
        <Route path='/counter' element={<Counter obj1={obj} a1={a} arr1={arr} s={s}/>}/>
        <Route path='/trial' element={<Trail arr2={arr} b={a}/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/form' element={<Form/>}/>
        <Route path='/form1' element={<Form1/>}/>
        <Route path='/expense' element={<Expensetracker/>}/>
        <Route path='/expense1' element={<Expense1/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
