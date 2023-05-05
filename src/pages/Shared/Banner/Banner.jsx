import React from "react";
import { Carousel } from "react-bootstrap";

const Banner = () => {
  return (

    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70 "
          src="../../../../public/7fe63194-245b-452c-b755-852613ab1b0e.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70 " src="../../../../public/chinese-food-gd6d7892dc_1920.jpg"
          alt="Second slide"
        />

      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-70 "
          src="../../../../public/spring-rolls-gab7ed60cf_1920.jpg"
          alt="Third slide"
        />



      </Carousel.Item >
    </Carousel >

  );
};

export default Banner;
