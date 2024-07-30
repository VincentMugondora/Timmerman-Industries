import "./Vision.css";
import Image from "../../assets/images/spiral.jpg";
import Image1 from "../../assets/images/interiors.jpeg"

const Vision = () => {
  return (
    <>
      <div className="container vision">
        <div className="row">
          <div className="col-md image">
            <img className="img" src={Image} alt="img" />
            <img className="interior" src={Image1} alt="" />
          </div>
          <div className="col-md text-container">
            <h1>OUR VISION</h1>
            <div className="line"></div>
            <div className="text">
              <div className="text1">
                <div className="box">
                  <h2>1</h2>
                </div>
                <p className="para-text">
                  Maintain a strong reputation for cutting-edge design and
                  exceptional project execution.Invest in continuous design
                  education and training for the team.{" "}
                  <span>
                    Foster a culture of creativity and experimentation.
                    Collaborate with emerging designers and artists. Develop a
                    strong brand identity and visual style.
                  </span>
                </p>
              </div>
              <div className="text1">
                <div className="box">
                  <h2>2</h2>
                </div>
                <p className="para-text">
                  Implement a robust client relationship management system.
                  Provide exceptional customer service throughout the
                  exceptional design process.{" "}
                  <span>
                    {" "}
                    Offer post-project follow-up and maintenance services.
                    Implement a loyalty program or referral system.
                  </span>
                </p>
              </div>
              <div className="text1">
                <div className="box">
                  <h2>3</h2>
                </div>
                <p className="para-text">
                  Conduct market research to identify new target segments.
                  Develop specialized design packages for different market
                  segments. Explore opportunities for partnerships{" "}
                  <span>
                    and collaborations. Leverage digital marketing and social
                    media to reach a wider audience.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Vision;
