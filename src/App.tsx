import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import { Card as CardType } from "./typing";
import { defaultCardsList } from "./const";
import { getRandomNum } from "./utils";
import Button from "./components/Button/Button";
import useTranslate from "./hooks/useTranslate";
import SocialLink from "./components/SocialLink/SocialLink";

interface CurrentCard {
  id: number
  text: string
  isFrontSide: boolean,
}

function App() {
  const [cards, setCards] = useState<CardType[]>([]);
  const [currentCard, setCurrentCard] = useState<CurrentCard | undefined>();

  const {translate} = useTranslate()

  const shuffleCards = () => {
    setCards(defaultCardsList);
  };

  const handleOnClickShuffle = () => {
    shuffleCards();
    getNewCard(defaultCardsList);
  }

  useEffect(() => {
    shuffleCards();
    getNewCard(defaultCardsList);
  }, []);

  const getNewCard = (cardsList: CardType[]) => {
    const selectedIndex = getRandomNum(0, cardsList.length - 1);
    const selectedCard: CardType = cardsList[selectedIndex];

    setCurrentCard({
      text: selectedCard?.text,
      id: selectedCard?.id,
      isFrontSide: !currentCard?.isFrontSide,
    });

    const newCards = [...cardsList];
    newCards.splice(selectedIndex, 1);
    setCards(newCards);
  };

  return (
    <div
      className="App"
      style={{ display: "flex", flexDirection: "column", gap: 20 }}
    >
      <div style={{ display: "grid", gap: 10 }}>

        <Button
          text={translate('button.newCard')}
          disabled={!currentCard?.text}
          onClick={() => getNewCard(cards)}
        />

        <Button
          text={translate('button.shuffle')}
          onClick={() => handleOnClickShuffle()}
        />

      </div>

      <div className="socials">

      </div>
      {
        currentCard && (
          <Card
            isFrontSide={currentCard?.isFrontSide}
            text={currentCard.text ? currentCard.text : translate('shuffleAgain')}
          />
        )
      }
    <div style={{display: "flex", justifyContent: "center"}}>

		<SocialLink 
      redirectTo="https://www.linkedin.com/in/lucaasrojas/"
      social="linkedin"
      />
      </div>
    </div>
  );
}

export default App;
