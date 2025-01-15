// import React from 'react'
import { Link } from "react-router-dom"
// import Singup from "./Singup"
import { useForm } from "react-hook-form"


export default function login() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data);
  return (
   <><div className="items-center justify-center text-center ">
   <dialog id="my_modal_3" className="modal">
  <div className="modal-box">
    <form onSubmit={handleSubmit(onSubmit)} method="dialog">
    <Link 
    to ="/">
      <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
      </Link>
    </form >
   
    <h3 className="font-bold text-lg">Login!</h3>
  <div  className="space-y-3 mt-5">
    <span>EMAIL</span> <br />
    <input type="email"  placeholder="@mail"  className="w-80 px-3 border rounded-md outline-none"
    {...register("email", { required: true })} />
     {errors.email && <span>This field is required</span>}
  </div>
  <div  className="space-y-3 mt-5">
    <span>PASSWORD</span><br />
    <input type="password"  placeholder="********"  className="w-80 px-3 border rounded-md outline-none" 
    {...register("password", { required: true })}/><br />
     {errors.password && <span>This field is required</span>}
       </div  > <div className="mt-1 space-3"><button className="mt-10 hover:bg-pink-500  hover:text-white duration-200 p-2 rounded-md mt-5 ">Login</button>
  <p className="mt-4"> not registered then ?<Link   to ='/Singup' className="underline text-blue-500 cursor pointer"><b>singup</b></Link></p></div>
  
  </div>
</dialog>
 
   </div>
   </>
  )
}
