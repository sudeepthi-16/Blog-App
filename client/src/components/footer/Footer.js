import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="section bg-footer">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Information
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a className="text-white" href="">
                    Pages
                  </a>
                </li>
                <li>
                  <a className="text-white" href="">
                    Our Team
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Resources
              </h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a className="text-white" href="">
                    Wikipedia{" "}
                  </a>
                </li>
                <li>
                  <a className="text-white" href="">
                    React blog
                  </a>
                </li>
                <li>
                  <a className="text-white" href="">
                    Term &amp; Service
                  </a>
                </li>
                <li>
                  <a className="text-white" href="">
                    Angular dev
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-2">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">Help</h6>
              <ul className="list-unstyled footer-link mt-4">
                <li>
                  <a className="text-white" href="">
                    Sign Up{" "}
                  </a>
                </li>
                <li>
                  <a className="text-white" href="">
                    Login
                  </a>
                </li>
                <li>
                  <a className="text-white" href="">
                    Terms of Services
                  </a>
                </li>
                <li>
                  <a className="text-white" href="">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-lg-4">
            <div className="">
              <h6 className="footer-heading text-uppercase text-white">
                Contact Us
              </h6>
              <p className="contact-info mt-4 text-white">
                Contact us if need help withanything
              </p>
              <p className="contact-info text-white">+91 9999999999</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
