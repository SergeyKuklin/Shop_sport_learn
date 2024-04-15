import s from './sale.module.css';
import { UiSaleBlock } from './ui/uisaleblock';

export const SaleSection = () => {
    return (
        <div>
            <div className={s.saleBlock}>
                <div className={s.saleBlockLeft}>
                    <div className={s.saleBlockLeftUp}>
                        <h2>Кроссовки</h2>
                        <UiSaleBlock style={`${s.saleComponent}`}>От 8 990 Р</UiSaleBlock>
                    </div>
                    <div className={s.saleBlockLeftDown}>
                        <h2>Доставка по городу</h2>
                        <p>Стандартная доставка от <span>4 дней - 500р</span> Доставка в постомат или пункт выдачи заказов</p>
                        <UiSaleBlock style={`${s.saleComponent}`}>Выбрать</UiSaleBlock>
                    </div>
                </div>
                <div className={s.saleBlockRight}>
                    <div className={s.saleBlockRightUp}>
                        <div className={s.saleBlockRightUpL}>
                            <h2>Штаны</h2>
                            <UiSaleBlock style={`${s.saleComponent}`}>От 10 990 Р</UiSaleBlock>
                        </div>
                        <div className={s.saleBlockRightUpR}>
                            <h2>Футболки</h2>
                            <UiSaleBlock style={`${s.saleComponent}`}>От 4 990 Р</UiSaleBlock>
                        </div>
                    </div>
                    <div className={s.saleBlockRightDown}>
                            <h2>Толстовки</h2>
                            <UiSaleBlock style={`${s.saleComponent}`}>От 6 990 Р</UiSaleBlock>
                    </div>
                </div>
            </div>
        </div>
    )
}