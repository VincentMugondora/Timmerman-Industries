import './Services.css'
import ServiceImage from "../../assets/images/serv.jpg"
import ServiceImg from "../../assets/images/dining2.jpg"

const Services = () => {
  return (
    <>
      <section className="services">
        <div className="container">
          <div className="row  text">
            <div className="first col-md-3">
              <h1>OUR SERVICE</h1>
              <div className="line"></div>
            </div>
            <div className="second col-md-6">
              <p>
                Whether you are seeking a complete home transformation or a
                refresh for a specific area Timmerman Industries offers a
                comprehensive suite of services to cater to your needs. Our
                expertise spans space planning furniture selection custom design
                elements color consultations and meticulous project management.
                <span>
                  We believe in open communication every step of the way
                  ensuring a seamless and collaborative experience. Let us guide
                  you from initial concept to final execution crafting a space
                  that embodies your vision and elevates your everyday living.
                </span>
              </p>
            </div>
            <div className="second third col-md-3">
              <h2>100+</h2>
              <h3>Service For Client</h3>
            </div>
          </div>
        </div>

        <div className="container imagesCont">
            <div className="row">
                <div className="col-md-8">
                    <img src= {ServiceImage} alt="" />
                </div>
                <div className="img2 col-md-4">
                    <img src={ServiceImg} alt="" />
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default Services
