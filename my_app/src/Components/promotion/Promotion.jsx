import "./Promotiob.css";

const Promotion = () => {
  const blogs = [
    {
      name: "GET THE BEST DEALS WITH TIMMERMAN INDUSTRIES",
      image:
        "../../assets/images/bedroom-with-bed-chair-front-sliding-glass-door.jpg",
      text: "lorem100",
    },
    {
      name: "GET THE BEST DEALS WITH TIMMERMAN INDUSTRIES",
      image:
        "../../assets/images/bedroom-with-bed-chair-front-sliding-glass-door.jpg",
      text: "lorem100",
    },
    {
      name: "GET THE BEST DEALS WITH TIMMERMAN INDUSTRIES",
      image:
        "../../assets/images/bedroom-with-bed-chair-front-sliding-glass-door.jpg",
      text: "lorem100",
    },
    {
      name: "GET THE BEST DEALS WITH TIMMERMAN INDUSTRIES",
      image:
        "../../assets/images/bedroom-with-bed-chair-front-sliding-glass-door.jpg",
      text: "lorem100",
    },
  ];
 

  return (
    <>
      <div className="blog-cont" key={Math.random()}>
        {blogs.map((blog)=>{
          <div className="blog">
            <div className="blog-image">
              <img src={blog.image} alt={blog.name} />
              </div>
          </div>
        })}
      </div>
    </>
  );
};

export default Promotion;
