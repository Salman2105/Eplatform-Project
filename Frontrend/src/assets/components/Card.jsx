// import React from "react"

export default function Card({ item })
 {
  console.log(item);
  
  return (
    <>
    <div className="mt-4  ">
    <div className="card bg-base-100 w-92 shadow-xl border  hover:scale-105 duration-200  dark:bg-slate-900 dark:text-white dark:border" >
  <figure>
    <img
      src={item.image}
      alt={item.author} />
  </figure>
  <div className="card-body">
    <h2 className="card-title">
{item.author}     
 <div className="badge badge-secondary">{item.category}</div>
    </h2>
    <p>{item.title}</p>
    <div className="card-actions   justify-between">
      <div className="badge badge-outline hover:bg-pink-500  hover:text-white duration-200  ">{item.price}</div>
      <div className="badge badge-outline px-4 py-4 rounded-lg hover:bg-pink-500 hover:text-white duration-200  ">Buy Now</div>
    </div>
  </div>
</div>
    </div>
    </>
  )
}
