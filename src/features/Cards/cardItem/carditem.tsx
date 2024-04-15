import { mockCards } from "../model/mockCards";
import coverImg from '../image/Nike_Defy_All_Day_black.png';
import s from './carditem.module.css';
import { Card } from "features/shared/types/card";
import { ImageCard } from "../image/imgComp";

type PostCardProps = {
    cardData: Card;
}

export const CardItem = ({cardData}: PostCardProps) => {

// Функция отрисовки цвета по популярности товара pagination
function getStylePagination() {
    if (cardData.pagination === 'Хит сезона') {
        return (s.mainPaginationHitPrice);
    } else if (cardData.pagination === 'Лучшая цена'){
        return (s.mainPaginationBestPrice);
    } else if (cardData.pagination === 'Топ продаж') {
        return (s.mainPaginationTopPrice);
    } else {
        return (s.hidden);
    }
}
    
// Функция подсчета стоимости в зависимости от скидки
function sale() {
    if (cardData.currency === 0) {
        return (cardData.fullPrice);
    } else {
    return (Math.round(cardData.fullPrice * ((100 - cardData.currency) / 100)))
    }
}

    return (
        <div className={s.card}>
            <div className={s.cardInfo}>
                <div className={s.mainCard}>
                    <p className={getStylePagination()}>{cardData.pagination}</p>
                    <div className={s.cardAction}>
                        <svg width="28" height="24" viewBox="0 0 28 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M14 23C14 23 1.5 16 1.5 7.50001C1.5 5.99737 2.02062 4.54114 2.97328 3.37908C3.92593 2.21703 5.25178 1.42093 6.72525 1.12624C8.19871 0.831543 9.72876 1.05646 11.0551 1.76272C12.3814 2.46898 13.4221 3.61296 14 5.00001V5.00001C14.5779 3.61296 15.6186 2.46898 16.9449 1.76272C18.2712 1.05646 19.8013 0.831543 21.2748 1.12624C22.7482 1.42093 24.0741 2.21703 25.0267 3.37908C25.9794 4.54114 26.5 5.99737 26.5 7.50001C26.5 16 14 23 14 23Z" stroke="#2B2929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                        <svg style={{marginLeft: '16px'}} width="28" height="20" viewBox="0 0 28 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M24.1 19H3.9C3.65394 18.9988 3.41672 18.9081 3.23268 18.7448C3.04864 18.5815 2.93038 18.3567 2.9 18.1125L1.125 2.1125C1.10922 1.97309 1.12294 1.83192 1.16529 1.69817C1.20763 1.56441 1.27764 1.44106 1.37078 1.33614C1.46392 1.23121 1.57809 1.14706 1.70588 1.08915C1.83366 1.03124 1.97221 1.00086 2.1125 1H25.8875C26.0278 1.00086 26.1663 1.03124 26.2941 1.08915C26.4219 1.14706 26.5361 1.23121 26.6292 1.33614C26.7224 1.44106 26.7924 1.56441 26.8347 1.69817C26.8771 1.83192 26.8908 1.97309 26.875 2.1125L25.1 18.1125C25.0696 18.3567 24.9514 18.5815 24.7673 18.7448C24.5833 18.9081 24.3461 18.9988 24.1 19V19Z" stroke="#2B2929" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                </div>
                <div className={s.imgCard}>
                    <img src={coverImg} alt={cardData.name} />
                    {/* <ImageCard src={cardData.coverImage} alt={cardData.name} /> */}
                </div>
            </div>
            <p className={s.cardName}>{cardData.name}</p>
            <div className={s.cardTextPrice}>
                <p className={s.cardSalePrice}>{sale()} ₽</p>
                <p className={s.cardPrice}>{cardData.fullPrice} ₽</p>
                <p className={s.cardSale}>-{cardData.currency}%</p>
            </div>
        </div>
    );
}