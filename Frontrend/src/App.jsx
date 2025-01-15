// import React from 'react'
import Home from './Home/home';
import Courses from './assets/Courses/Courses';
import { Route, Routes } from "react-router-dom";
import Singup from './assets/components/Singup';
import Login from './assets/components/Login';



function App() {
  return (
  <>
  <div  className='dark:bg-slate-900 dark:text-white'>
<Routes>
  <Route path="/" element = {<Home/>} />
  <Route path="/course" element = {<Courses />} />
  <Route path="/Singup" element = {<Singup />} />
  <Route path="/Login" element = {<Login />} />


</Routes>

</div>
  </>
  );
}

export default App;
