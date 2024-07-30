import "./Banner.css";
import Navbar from "../Navbar/Navbar";
import Card from "../cards/Card";
import SignUpForm from "../form/Form"
import Promotion from "../promotion/Promotion";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <Promotion />
        <div className="overlay">
          <Navbar />
          <div className="overlay1">
            <SignUpForm />
            <button
              className="exits"
              onClick={() => {
                document.body.classList.remove("active1");
              }}
            >
              Exit
            </button>
          </div>
          <Card />
          <div className="text-container container">
            <h3>Timmerman Industries</h3>
            <h1>INTERIOR Design</h1>
            <div className="line"></div>
            <p>
              Timmerman Industries where dream spaces take form Crafting
              interiors that weather any storm.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
