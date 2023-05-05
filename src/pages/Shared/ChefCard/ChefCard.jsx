import React, { useContext, useEffect, useState } from "react";
import { Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import LazyLoad from "react-lazy-load";
import { } from "react-icons/bs";

const ChefCard = () => {
  const [chefs, setChefs] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    // Fetch chefs data from API and set it to state
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => setChefs(data));
  }, []);

  return (
    <div>
      <div className="container mt-5">
        <h1 className="text-center">Our Cheif</h1>
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mt-3">
          {chefs.map((chef) => (
            <div className="col" key={chef.id}>
              <Card className="mt-3">
                <LazyLoad>
                  <Card.Img
                    style={{ height: "311px", width: "414px" }}
                    className="img-fluid"
                    variant="top"
                    loading="lazy"
                    src={chef.image}
                  />
                </LazyLoad>
                <Card.Body className="bg-light" style={{ border: '1px solid #ddd', boxShadow: '0 5px 10px rgba(0, 0, 0, 0.2)' }}>
                  <Card.Title>{chef.name}</Card.Title>
                  <Card.Text>
                    <strong>Experience:</strong> {chef.experience} years
                    <br />
                    <strong>Recipes:</strong> {chef.recipes}
                    <br />
                    <strong>Likes:</strong> {chef.likes}
                  </Card.Text>
                  <Button
                    onClick={() => navigate(`ChefRecipes/${chef.id}`)}
                    className="bg-danger border border-0"
                  >
                    View Recipes
                  </Button>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChefCard;
