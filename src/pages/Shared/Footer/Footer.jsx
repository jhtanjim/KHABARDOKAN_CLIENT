import React from "react";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

const Footer = () => {
  return (

    <footer class="bg-dark text-light py-3">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <h5>Contact Us</h5>
            <ul class="list-unstyled">
              <li>Email: info@chiefhunter.com</li>
              <li>Phone: +1-555-123-4567</li>
              <li>Address: 123 Main St, Anytown USA</li>
            </ul>
          </div>
          <div class="col-md-6">
            <h5>Follow Us</h5>
            <ul class="list-unstyled">
              <li><a href="#"><i class="bi bi-facebook"></i> Facebook</a></li>
              <li><a href="#"><i class="bi bi-twitter"></i> Twitter</a></li>
              <li><a href="#"><i class="bi bi-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-12 text-center">
            <p>&copy; 2023 ChiefHunter. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>


  );
};

export default Footer;
