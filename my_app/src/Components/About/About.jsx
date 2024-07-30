import './About.css'
import Aboutimg from "../../assets/images/about (4).jpg"

const Abouts = () => {
  return (
    <>
      <section className="about container-fluid">
        <div className="container">
          <div className="row">
            <div className="image col-md-6">
              <img className="img" src={Aboutimg} alt="" />
            </div>
            <div className="text col-md-6">
              <div className="text-container">
                <h2>WELCOME TO OUR COMPANY</h2>
                <div className="line"></div>
                <p>
                  Craving an interior that seamlessly blends beauty with
                  functionality? Look no further than Timmerman Industries. Our
                  award-winning team boasts a wealth of experience and a passion
                  for innovation. We do not just follow trends we set them. We
                  understand the power of design to transform not just
                  aesthetics but also lives. Let us guide you through every step
                  of the process from initial concept to final flourish creating
                  a space that reflects your unique personality and stands the
                  test of time.
                </p>
                <p>
                  More than décor Timmerman Industries crafts experiences. We
                  transform ordinary spaces into extraordinary havens each
                  detail meticulously chosen to enhance your life. With a keen
                  eye for design and an unwavering commitment to quality we turn
                  your vision into reality building a space that ignites your
                  senses and fuels your soul.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Abouts
