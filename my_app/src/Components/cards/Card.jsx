import './Card.css'

const Card = () => {
  return (
    <>
      <div className="card-container">
        <div className="cards">
          <p className='btn'>Sign Up</p>
          <div className="card">
            <h3>Timmerman Industries</h3>
            <h1>INTERIOR Design</h1>
            <p className='para-text'>
              Be the first to Sign Up to Timmerman Industries and get a chance
              to win a 10% discount on your dream house and obtain other
              lucrative prizes with Timmerman Industries
            </p>
            <button>Learn More</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card
