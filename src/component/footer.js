import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#124072] py-5 px-3 md:px-[80px] lg:px-[130px]">
      <div className="wrapper reveal">
        <div className="flex lg:flex-row flex-col w-full gap-3">
          <div className="flex-2 text-gray-100 pr-4">
            <img src="/payloadlogo.png" alt="" className="bg-white p-2 rounded-lg"/>
            <h4>Advanced payment solution for Africa</h4>
            <p>
             Accept payments, receives payments seamlessly from anyone, anywhere in the world.
            </p>
          </div>
          <div className="flex-grow flex lg:flex-row md:flex-row flex-col gap-4  justify-between text-white w-full">
            <div class="box-item">
              <h4>Quick Link</h4>
              <ul>
                <li>
                  <p>Home</p>
                </li>
                <li>
                  <p>Products</p>
                </li>
                {/* <li>
              <a href="#review">Why you should use Paylode</a>
            </li> */}
                <li>
                  <p>FAQ</p>
                </li>
              </ul>
            </div>
            <div className="box-item">
              <h4>Contact</h4>
              <ul className="contact">
                <li>
                  <i className="fas fa-phone"></i>
                  <p>+234 8083 8100 30</p>
                </li>
                <li>
                  <i className="fas fa-location-dot"></i>
                  <p>51c, Remi Fani Kayode Avenue, GRA Ikeja, Lagos.</p>
                </li>
                <li>
                  <i class="fas fa-briefcase"></i>
                  <p>sales@paylodeservices.com</p>
                </li>
              </ul>
            </div>
            <div className="box-item">
              <h4>Legal</h4>
              <ul>
                <li>
                  <p>Terms of Use</p>
                </li>
                <li>
                  <p>Privacy Policy</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <p className="copyright text-center mt-4 text-xs text-gray-200">© Paylode ltd 2023. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
