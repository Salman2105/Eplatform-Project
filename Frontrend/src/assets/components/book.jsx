// import react from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import list from "../../../public/list.json";
import Card from "./Card";

export default function Book() {   
 const filterData = list.filter((data) => data.author === "J.K. Rowling");
 console.log(filterData);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <>
    <div  className='max-w-screen 2*1 container mx-auto md px-4 '>
      <h1  className='font-bold text-xl pb-2'> Free Offered Books</h1> 
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis error eum ex fuga veritatis, quidem cum maiores a facilis laudantium ab ipsam commodi non accusamus ratione. Ad nihil molestiae voluptates.</p>
      </div>
      <div> 
      <Slider {...settings}>
        {filterData.map((item) =>(
          <Card item ={item} key = {item.id} />)
          )}
          </Slider>
    </div>
      </>
  )
}
