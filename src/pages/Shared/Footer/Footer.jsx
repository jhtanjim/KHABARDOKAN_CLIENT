import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (

    <footer className="footer bg-black py-5 mt-5">
      <div className="container text-white">
        <div className="row">
          <div className="col-12 col-md-6 py-5">
            <h2 className="fs-5 ">KhabarDokan</h2>

            <p className="py-2 opacity-50 ">KhabarDokan is your go-to destination for all things food! We're dedicated to bringing you the freshest and most delicious recipes, food news, and dining tips. Our expert team of chefs and food enthusiasts are always cooking up something new and exciting, so you'll never be bored with our selection. Whether you're a seasoned home cook or a curious foodie looking for inspiration, KhabarDokan has got you covered. Come join us on a culinary adventure and discover the amazing world of food!.</p>

          </div>


          <div className="col-12 col-md-6 py-5">
            <div>
              <h2 className="fs-5 ">Contact</h2>
              <ul className="list-unstyled my-4">
                <li className="py-2 opacity-50">524 Broadway , NYC</li>
                <li className="py-2 opacity-50">+1 777 - 978 - 5570</li>


              </ul>
            </div>

          </div>


        </div>
      </div>
    </footer>


  );
};

export default Footer;
