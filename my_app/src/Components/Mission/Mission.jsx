import "./Mission.css";
import Image from "../../assets/images/mission.jpg";

const Mission = () => {
  return (
    <>
      <section className="mission container">
        <div className="row">
          <div className="col-md text">
            <h1>OUR MISSION</h1>
            <div className="line"></div>
            <p className="para-text">
              Implement a robust client relationship management system. Provide
              exceptional customer service throughout the exceptional design
              process.{" "}
              <span>
                {" "}
                Offer post-project follow-up and maintenance services. Implement
                a loyalty program or referral system.
              </span>
            </p>
            <p className="para-text">
              Implement a robust client relationship management system. Provide
              exceptional customer service throughout the exceptional design
              process.{" "}
              <span>
                {" "}
                Offer post-project follow-up and maintenance services. Implement
                a loyalty program or referral system.
              </span>
            </p>
          </div>
          <div className="col-md img">
            <img src={Image} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Mission;
