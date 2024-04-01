import { CardItem } from "./cardItem/carditem";
import s from './cards.module.css';
import { mockCards } from "./model/mockCards";

export const Cards = () => {

console.log(mockCards);

    return (
        <div>
            <div className={s.cardsPosition}>
                {mockCards.map((cards, id) => <CardItem cardData={cards} key={id}/>)}
                {/* <CardItem /> */}
            </div>
        </div>
    )
}