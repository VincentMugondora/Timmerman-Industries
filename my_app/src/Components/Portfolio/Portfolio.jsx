import './Portfolio.css'
import Image from "../../assets/images/port.jpg";
import Image1 from "../../assets/images/service1.jpg";
import Image2 from "../../assets/images/portfolio (1).jpg";

const Portfolio = () => {
  return (
    <>
      <section className="portfolio container">
        <div className="row">
          <div className="col-md">
            <img src={Image} alt="" />
          </div>
          <div className="col-md second">
            <div className="img">
              <div className="img1 container">
                <img src={Image1} alt="" />
              </div>
              <div className="img1 container">
                <img className='vin' src={Image2} alt="" />
              </div>
            </div>
            <div className="text container">
                <h1>OUR PORTFOLIO</h1>
                <div className="line"></div>
                <p className='para-text'>View our outstanding works throughout the world. WE have done work for some of the most outstanding homes all over the world to view more of our work click the button below!</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio
