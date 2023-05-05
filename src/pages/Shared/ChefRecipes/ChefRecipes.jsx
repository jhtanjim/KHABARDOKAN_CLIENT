import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { Container, Row, Col, Card, Button, Toast } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LazyLoad from "react-lazy-load";
import { FaStar } from "react-icons/fa";
import { BsFillHeartFill } from "react-icons/bs";

const ChefRecipes = () => {
  const { ChefId } = useParams();

  const [isLoading, setIsLoading] = useState(true);
  const [chefData, setChefData] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((response) => response.json())
      .then((data) => {
        const chef = data.find((job) => job.id === ChefId);
        setChefData(chef);
        setIsLoading(false);
      });
  }, [ChefId]);

  const handleFavoriteClick = (recipeName) => {
    setFavorites([...favorites, recipeName]);
    setShowToast(true);
    toast.success(`${recipeName} has been added to favorites!`);
  };

  return (
    <div className="mb-5 mt-5 chef-info-container">
      {isLoading ? (
        <div className="d-flex justify-content-center my-5">
          <div className="spinner-border text-success" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        <div className="container mt-5">
          <div className="row md:py-5 d-flex align-items-center">
            <div className="col-12 col-md-12 sm-12 ms-6 chef-image">
              <div className="col-12 col-md-12 sm-12 md:mt-5 chef-info">
                <h2 className="fs-2 c">{chefData?.name}</h2>
                <p className="">{chefData?.bio}</p>
                <p className="">Likes:{chefData?.likes}</p>
                <p className="">
                  Number of Recipes: {chefData?.recipesList.length}
                </p>
                <p className="">
                  Years of Experience: {chefData?.experience}
                </p>
              </div>


              <LazyLoad offsetVertical={500} debounce={false}>
                <img
                  className="img-fluid w-75 rounded-2"
                  src={chefData?.image}
                  loading="lazy"
                  alt=""
                />
              </LazyLoad>
            </div>
          </div>

          <div className="popular-recipes ">
            <h2 className="mt-5 ">Popular Recipes</h2>
            <hr className="w-25 fw-bold text-warning" />
            <hr className="w-50 fw-bold text-warning" />
            <Row xs={1} md={2} lg={1} className="g-4 ">
              {chefData?.recipesList.slice(0, 3).map((recipe) => (
                <Col key={recipe.name}>
                  <Card>
                    <Card.Body>
                      <Card.Title> {recipe.name}</Card.Title>
                      <Card.Text>
                        <p className="fw-bold">Ingredients:</p>
                        <ul>
                          {recipe.ingredients
                            .slice(0, 5)
                            .map((ingredient, index) => (
                              <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                        <div>
                          <p className="fw-bold">Cooking Method:</p>
                          <p>{recipe.cookingMethod}</p>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                          <span> Ratings </span>
                          {recipe.rating}
                        </div>
                      </Card.Text>

                      <Button
                        className="bg-success border border-0"
                        onClick={() => handleFavoriteClick(recipe.name)}
                        disabled={favorites.includes(recipe.name)}
                      >
                        {favorites.includes(recipe.name)
                          ? "Favorite"
                          : "Add to Favorites"}
                        <FaStar className="ms-2" />                      </Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>

            <ToastContainer
              position="top-right"
              autoClose={3000}
              hideProgressBar
              newestOnTop
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
            />
          </div>
        </div>
      )}
    </div>

  );
};

export default ChefRecipes;
