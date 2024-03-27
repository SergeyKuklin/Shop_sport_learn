import brandBanner from './image/nike.png';
import brandClothers from './image/nike_banner.png';
import s from './banner.module.css';
import { IconSlider } from 'features/shared/components/sliderIcon/slidericon';

const bannerData = {
    title: 'Новая коллекция осень-зима',
    info: 'Ощути легкость и комфорт с каждым шагом в новейших кроссовках Nike! Совершенство технологий и стильный дизайн для твоей неустанной энергии. Выбирай Nike - и покоряй вершины своих целей. Поторопись, эксклюзивные предложения уже в ожидании!',
    brend: 'Nike',
    coverImgClothers: 'nike_Banner.png',
}

export const MainBanner = () => {
    return (
        <div>
            <div className={s.banner}>
                <div className={s.bannerArticle}>
                    <div>
                        <h2 className={s.textTitleBanner}>{bannerData.title}</h2>
                        <p className={s.textInfoBanner}>{bannerData.info}</p>
                        <div>
                            <a href="#"  className={s.btnMoreInfo}>Подробнее</a>
                        </div>
                    </div>
                    <div className={s.bannerLogo}>
                        <div className={s.bannerBrand}>
                            <img src={brandBanner} alt="" />
                        </div>
                        <div>
                            <img src={brandClothers} alt="" />
                        </div>
                    </div>
                </div>
                <div className={s.bannerSlider}>
                    <IconSlider></IconSlider>
                    <IconSlider></IconSlider>
                    <IconSlider></IconSlider>
                    <IconSlider></IconSlider>
                    <IconSlider></IconSlider>
                    <IconSlider></IconSlider>
                </div>
            </div>
        </div>
    )
}