import s from './navheader.module.css';


export const NavClotherHeader = () => {
    return (
        <div>
            <div className={s.marginBot}>
                <ul className={s.clothersList}>
                    <li><a href="">Кроссовки</a></li>
                    <li><a href="">Тапочки</a></li>
                    <li><a href="">Куртки</a></li>
                    <li><a href="">Футболки</a></li>
                    <li><a href="">Штаны</a></li>
                    <li><a href="">Шорты</a></li>
                    <li><a href="">Толстовки</a></li>
                    <li><a href="">Аксессуары</a></li>
                </ul>
            </div>
        </div>
    )
}