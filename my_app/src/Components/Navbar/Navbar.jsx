import "./Navbar.css"
import { useState } from "react";

// const [handleHamburgerClicks, setHandleHamburgerClicks] = useState( () => {
//        document.body.classList.toggle("active");
//      })

const Navbar = () => {

  const handleHamburgerClicks = () => {
    document.body.classList.toggle('active')
  }

  return (
    <>
      <div className="Navbar-container">
        {/* PHONE-NAV CODE */}
        <div className="phone-nav">
          <div className="hamburger" onClick={handleHamburgerClicks}>
            <div className="line line1"></div>
            <div className="line line2"></div>
            <div className="line line3"></div>
          </div>
          <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
          </div>
        </div>

        {/* PC-NAV CODE */}
        <div className="pc-nav">
          <div className="links">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Service</a>
            <a href="#">Contact</a>
            <p
              onClick={() => {
                document.body.classList.toggle("active1");
              }}
            >
              Sign Up
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar
