import { useEffect, useState } from "react";
import "./App.css";

interface Card {
  id: number;
  text: string;
}

function App() {
  const cardList: Card[] = [
    {
      id: 1,
      text: "¿Cuál crees que es el mayor desafío al que se enfrenta nuestra sociedad actualmente y por qué?",
    },
    {
      id: 2,
      text: "¿Cuál es tu opinión sobre la educación tradicional versus la educación en línea? ¿Cuáles son las ventajas y desventajas de cada una?",
    },
    {
      id: 3,
      text: "¿Estás a favor o en contra de los avances tecnológicos como la inteligencia artificial y la automatización? ¿Por qué?",
    },
    {
      id: 4,
      text: "¿Cuál es tu postura sobre los derechos de los animales? ¿Crees que deberían tener los mismos derechos que los seres humanos?",
    },
    {
      id: 5,
      text: "¿Cuál es tu opinión sobre la legalización de las drogas? ¿Crees que tendría más beneficios o más consecuencias negativas?",
    },
  ];

  const [cards, setCards] = useState<Card[]>([]);

  useEffect(() => {
    setCards(cardList);
    getNewCard();
  }, []);
  const getNewCard = () => {
    const selected: number = getRandomNum(0, cards.length - 1);

    const card = document.querySelector(".card");
    if (card.style.transform.includes("180")) {
      const frontCard = document.querySelector(".front-card-text");
      frontCard.innerHTML = cards[selected].text;
      card.style.transform = "rotateY(0deg)";
    } else {
      const backCard = document.querySelector(".back-card-text");
      backCard.innerHTML = cards[selected].text;
      card.style.transform = "rotateY(180deg)";
    }

    const newCards = [...cards];
    newCards.splice(selected, 1);
    setCards(newCards);
  };
  function getRandomNum(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: 20 }}
    >
      <div style={{ display: "flex", gap: 10 }}>
        {cards.length > 0 && (
          <button disabled={!cards.length} onClick={() => getNewCard()}>
            Nueva carta
          </button>
        )}

        <button
          onClick={() => {
            setCards(cardList);
            getNewCard();
          }}
        >
          Mezclar
        </button>
      </div>
      {cards.length > 0 && (
        <div className="card-container">
          <div className="card">
            <div className="front">
              <div>
                <span className="front-card-text"></span>{" "}
              </div>
            </div>
            <div className="back">
              <div>
                <span className="back-card-text"></span>{" "}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
