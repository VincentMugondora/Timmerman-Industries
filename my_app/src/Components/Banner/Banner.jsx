import "./Banner.css";
import Navbar from "../Navbar/Navbar";
import Card from "../cards/Card";
import SignUpForm from "../form/Form"

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="overlay">
          <Navbar />
          <div className="overlay1">
            <SignUpForm />
          </div>
          <Card />
          <div className="text-container container">
            <h3>Timmerman Industries</h3>
            <h1>INTERIOR Design</h1>
            <div className="line"></div>
            <p>
              Timmerman Industries where dream spaces take form Crafting interiors that weather any storm.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
