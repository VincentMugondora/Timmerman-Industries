import "./Team.css";
import Img1 from "../../assets/images/team (1).jpg";
import Img2 from "../../assets/images/fashion-6066661_1280.jpg";
import Img3 from "../../assets/images/team (3).jpg";
import Img4 from "../../assets/images/team (4).jpg";

const Team = () => {
  const cards = [
    {
      image: Img1,
      name: "Vincent Mugondora",
      title: "Lead Designer",
      body: `The visionary behind the projects.
                Responsible for conceptualizing design concepts.
                `,
    },
    {
      image: Img2,
      name: "Leticia Mugondora",
      title: "Creative Director",
      body: `The visionary behind the projects.
                Responsible for conceptualizing design concepts.`,
    },
    {
      image: Img3,
      name: "Tinashe Muzenda",
      title: "Lead Designer",
      body: `The visionary behind the projects.
                Responsible for conceptualizing design concepts.`,
    },
    {
      image: Img4,
      name: "Anorld Mhidza",
      title: "Creative Director",
      body: `The visionary behind the projects.
                Responsible for conceptualizing design concepts, setting.`,
    },
  ];

  return (
    <div className="team">
      <h1 className="heading">MEET OUR TEAM</h1>
      <div className="card-cont container">
        {cards.map((card) => (
          <div className="card1 container" key={Math.random()}>
            <div className="card">
              <div className="main1">
                <img className="main" src={card.image} alt="Mount Fuji" />
              </div>
              <div className="text-container">
                <h1>{card.name}</h1>
                <h3>{card.title}</h3>
                <p className="para-text">{card.body}</p>
              </div>
            </div>
            <div className="line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
