import { useEffect } from "react";
import CardSide from "../CardSide/CardSide";
import CardStyles from "./Card.module.css"
interface CardProps {
    isFrontSide?: boolean;
    text: string;
  }
  

const Card: React.FC<CardProps> = ({ isFrontSide, text }) => {
    useEffect(() => {
      const cardElement: HTMLDivElement | null = document.querySelector("#card");
      if (cardElement) {
        const isBackFaced = cardElement.style.transform.includes("180");
        if (isBackFaced && isFrontSide) {
          cardElement.style.transform = "rotateY(0deg)";
        } else {
          cardElement.style.transform = "rotateY(180deg)";
        }
      }
    }, [isFrontSide]);
    return (
      <div className={CardStyles.card_container}>
        <div id="card" className={CardStyles.card}>
          <CardSide isFrontSide={true} text={text} />
          <CardSide text={text} />
        </div>
      </div>
    );
  };

export default Card