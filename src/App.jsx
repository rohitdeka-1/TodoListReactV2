import { useState } from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";

function App() {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const deleteCard = (index) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  return (
    <div>
      <Header />
      <div className="flex justify-center">
        <Card onSubmit={addCard} />
      </div>
      <div className="flex flex-wrap justify-center mt-4">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white h-[200px] w-[350px] mt-2 ml-2 rounded-xl p-2 flex flex-col justify-between shadow-xl"
          >
            <div>
              <h2 className="text-2xl">{card.title}</h2>
              <p className="text-md h-[120px] overflow-y-auto">{card.content}</p>
            </div>
            <button
              onClick={() => deleteCard(index)}
              className="bg-red-300 rounded-md font text-xl w-full mt-1"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;