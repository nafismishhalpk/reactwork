import { useState } from "react";
import "./App.css";
import Cards from "../src/components/Cards"
import { person } from '../src/components/person'

function App() {
  const [cardData] = useState(person);
  return (
    <>
      <div className="cards-container">
        {cardData.map((item) => (
          <Cards
            key={item.id}
            name={item.name}
            prize={item.prize}
            city={item.city}
            image={item.image}
          />
        ))}
      </div>
    </>
  );
}

export default App;