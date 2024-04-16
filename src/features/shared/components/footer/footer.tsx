import f from './footer.module.css';
import logo from '../../../pages/header/images/logo.png';

export const Footer = () => {
    return (
        <div>

            <div className={f.footerSection}>
                <div className={f.footerCol_1}>
                    <img src={logo} alt="" />
                    <p>OGstyle - магазин по продаже оригинальной одежды и обуви мировых брендов</p>
                    <div>
                        <a href="tel:+79020416339">+7 (902) 041-63-39</a>
                        <a href="mailto:order@ogstyle.ru">order@ogstyle.ru</a>
                    </div>
                </div>
                <div className={f.footerCol}>
                    <ul>
                        <li><a href="#">Кроссовки</a></li>
                        <li><a href="#">Футболки</a></li>
                        <li><a href="#">Тапочки</a></li>
                        <li><a href="#">Куртки</a></li>
                    </ul>
                </div>
                <div className={f.footerCol}>
                    <ul>
                        <li><a href="#">Штаны</a></li>
                        <li><a href="#">Шорты</a></li>
                        <li><a href="#">Толстовки</a></li>
                        <li><a href="#">Аксессуары</a></li>
                    </ul>
                </div>
                <div className={f.footerCol}>
                    <ul>
                        <li><a href="">Оплата и доставка</a></li>
                        <li><a href="">Обмен и возврат</a></li>
                        <li><a href="">Оригинал 100%</a></li>
                    </ul>
                </div>
                <div className={f.footerCol}>
                    <ul>
                        <li><a href="">О компании</a></li>
                        <li><a href="">Контакты</a></li>
                    </ul>
                </div>
            </div>
            
        </div>
    )
}