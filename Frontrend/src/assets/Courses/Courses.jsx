// import React from 'react'
import Navbar from '../components/navbar';
import Course from '../components/course';
import Footer from '../components/Footer';


export default function Courses() {
  return (
    <>
<Navbar/>
<div className='min-h-screen'>
    <Course/>
</div>
<Footer/>
    </>
  )
}
