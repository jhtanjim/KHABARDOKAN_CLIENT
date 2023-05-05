import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";

const Banner = () => {
  return (

    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="../../../../public/220921081550-05-chinese-foods-mapo-tofu.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRG06p0omZl0x4J5wTBGitvOSAg7RDRos6yiklwiGUE&s"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

  );
};

export default Banner;
