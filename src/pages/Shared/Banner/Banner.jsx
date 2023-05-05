import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (

    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70 "
          src="https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70 " src="https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70 "
          src="https://cdn.pixabay.com/photo/2022/06/23/09/39/food-and-drink-industry-7279391_960_720.jpg"
        />



      </Carousel.Item >
    </Carousel >

  );
};

export default Banner;
