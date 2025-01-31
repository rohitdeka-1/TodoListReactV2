import { useState } from "react";
import Header from "./Components/Header";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

function App() {
  const [cards, setCards] = useState([]);

  const addCard = (newCard) => {
    setCards((prevCards) => [...prevCards, newCard]);
  };

  const deleteCard = (index) => {
    setCards((prevCards) => prevCards.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <div className="flex justify-center flex-grow mr-2">
        <Card onSubmit={addCard} />
      </div>
      <div className="flex flex-wrap justify-center mt-4 flex-grow">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white h-[200px] w-[350px] mt-2 ml-2 mr-2 rounded-xl p-2 flex flex-col justify-between shadow-xl"
          >
            <div>
              <h2 className="text-2xl">{card.title}</h2>
              <p className="text-md h-[120px] overflow-y-auto">
                {card.content}
              </p>
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
      <div className="text-gray-600 flex justify-center mb-6">
      <Footer />
      </div>
     
    </div>
  );
}

export default App;