import './Cards.css'; 


function Cards({ name, prize, city, image}) {
    return (
      <div className="card-container">
        <div><img src={image} alt="Profile" className="card-image" /></div>
        <h1 className="card-title">name :{name}</h1>
        <div className="card-description">
          <p>prize: {prize}</p>
          <p>City: {city}</p>
        </div>
      </div>
    );
  }
  
  export default Cards;