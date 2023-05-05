import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Banner = () => {
  return (

      <div className="mb-5 mt-5">
        <div className="container mt-5">
          <div className="row md:py-5 d-flex align-items-center">
            <div className="col-12 col-md-6  sm-12 ,md:mt-5 ">
                
              <div>

                <h2 className="text-center fs-2 fst-italic">Title DE</h2>
              </div>

              <p className="fw-light">
              ch dish is made with fresh ingredients and a touch of amore. Join us on a culinary journey through Italy and let Chef [insert name] be your guide
              </p>

            </div>
            <div className="col-12 col-md-6 sm-12 ms-6">
              <img
                className="img-fluid"
                src="https://www.shutterstock.com/image-photo/chef-cook-preparing-vegetables-his-260nw-1188599263.jpg"
                loading="lazy"  alt=""
              />
            </div>
          </div>
        </div>
      </div>

  );
};

export default Banner;
