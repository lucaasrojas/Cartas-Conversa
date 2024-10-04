import CardSideStyles from './CardSide.module.css'

interface CardSideProps {
    isFrontSide?: boolean;
    text: string;
}

const CardSide: React.FC<CardSideProps> = ({ isFrontSide, text }) => {
    return (
        <div className={isFrontSide ? CardSideStyles.front : CardSideStyles.back}>
            <div>
                {text}
            </div>
        </div>
    )
}

export default CardSide