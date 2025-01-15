// import React from 'react'
import Card from "./Card";  
import list from "../../../public/list.json"
import { Link } from "react-router-dom";

console.log(list);

export default function Course() {
  return (
  <>
   
  <div className="max-w-screen 2*1 container mx-auto md:px-20 px-4" >
  <div className="mt-28 items-center justify-center text-center"><h1 className="text-2xl  md:text-4xl">We delighted to have you <span className="text-pink-500">here</span> </h1>
  <p className="mt-10">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum repudiandae tenetur consectetur nihil, et ea enim! Officia dolor reprehenderit enim fuga in, nisi inventore laudantium adipisci perspiciatis, fugiat ipsam neque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem repellat aperiam laborum totam suscipit dolorum accusantium, id assumenda, et consectetur dolores asperiores sunt, modi provident. Quae aliquam nemo quod. Tempora.</p>
  <Link to="/">
  <button className="mt-10 hover:bg-pink-500  hover:text-white duration-200 px-3 py-4 rounded-md">BACK TO MAIN PAGE</button>
  </Link></div>
  <div className="mt-10  grid grid-cols-1 md:grid-cols-4 ">
    {
  list.map((item)=>(
    <Card key = {item.id } item={item} />  
  ))
 
}
  </div>
  </div>
 
</>
   
  );
}
