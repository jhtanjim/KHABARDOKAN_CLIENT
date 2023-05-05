import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (

    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70 "
          src="https://cdn.pixabay.com/photo/2015/08/21/06/34/chinese-food-898499_960_720.jpg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70 " src="https://cdn.pixabay.com/photo/2017/10/16/09/01/sushi-2856547_960_720.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70 "
          src="https://cdn.pixabay.com/photo/2017/08/10/08/39/snow-crab-2620060_960_720.jpg"
          alt="Third slide"
        />



      </Carousel.Item >
    </Carousel >

  );
};

export default Banner;
