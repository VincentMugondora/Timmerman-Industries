import Contact from '../contact/Contact'
import './ContactPage.css'
import Img2 from "../../assets/images/contact (1).jpg"
import Img1 from "../../assets/images/contact (2).jpg"

const ContactPage = () => {
  return (
    <div className="contact-container">
      <div className="overlay1 container-fluid">
        <Contact />
        <div>
          <button
            className="exit"
            onClick={() => {
              document.body.classList.remove("actives");
            }}
          >
            Exit
          </button>
        </div>
      </div>
      <div className="contact-pages container">
        <h1>GET IN TOUCH</h1>
        <div className="content container">
          <div className="row">
            <div className="col-md-7 images">
              <img className="img" src={Img1} alt="img" />
              <img className="img2" src={Img2} alt="img" />
            </div>
            <div className="col-md-5 text">
              <h2>Our Contact</h2>
              <div className="line"></div>
              <div className="phone info">
                <div className="box">
                  <box-icon name="phone" animation="tada"></box-icon>
                </div>
                <p>+123-456-7890</p>
              </div>
              <div className="email info">
                <div className="box">
                  <box-icon name="envelope" animation="tada"></box-icon>
                </div>
                <p>vinmugondora@gmail.com</p>
              </div>
              <div className="info">
                <div className="box">
                  <box-icon name="location-plus" animation="tada"></box-icon>
                </div>
                <p>23 HArare Street Harare Zimbabwe</p>
              </div>
              <div>
                <button
                  onClick={() => {
                    document.body.classList.add("actives");
                  }}
                >
                  Send a Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage
