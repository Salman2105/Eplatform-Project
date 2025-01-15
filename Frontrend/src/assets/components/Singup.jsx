// import React from 'react'
import { Link } from "react-router-dom"
// import Singup from "./Singup"
import Login from "./Login"
import { useForm } from "react-hook-form"



export default function Singup() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);
  return (
   <>
   <div className="flex justify-center  ">
   <div className=" items-center justify-center text-center modal-box border rounded-md">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
      <Link to="/">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>
    </form >
    
    <h3 className="font-bold text-lg">Singup!</h3>

    <div  className="space-y-3 mt-5">
    <span>Name</span> <br />
    <input type="name"  placeholder="Enter your name"  className="w-80 px-3 border rounded-md outline-none"
     {...register("exampleRequired", { required: true })} />
     {errors.exampleRequired && <span>This field is required</span>}
  </div>
  <div  className="space-y-3 mt-5">
    <span>EMAIL</span> <br />
    <input type="email"  placeholder="@mail"  className="w-80 px-3 border rounded-md outline-none" 
     {...register("exampleRequired", { required: true })}/>
     {errors.exampleRequired && <span>This field is required</span>}
  </div>
  <div  className="space-y-3 mt-5">
    <span>PASSWORD</span><br />
    <input type="password"  placeholder="********"  className="w-80 px-3 border rounded-md outline-none"  {...register("exampleRequired", { required: true })}/><br />
    {errors.exampleRequired && <span>This field is required</span>}
    <div  className="space-y-3 mt-10">
    <span> CONFRIM PASSWORD</span><br />
    <input type="password"  placeholder="********"  className="w-80 px-3 border rounded-md outline-none"  {...register("exampleRequired", { required: true })} /><br />
    {errors.exampleRequired && <span>This field is required</span>}</div>
  </div>
  
   <div className="mt-1 space-3"><button className="mt-10 hover:bg-pink-500  hover:text-white duration-200 p-2 rounded-md mt-5 ">
Singup
   </button>
  <p className="mt-4"> Have account then <div   className="underline text-blue-500 cursor pointer" onClick={( )=>document.getElementById("my_modal_3").showModal()}><b>Login</b></div><Login/></p></div>
  </div>
  </div>
   </>
  )
}
