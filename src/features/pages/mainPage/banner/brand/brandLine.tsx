import CoverNike from '../../../../assets/images/nike_brand.png';
import CoverTheNorthFace from '../../../../assets/images/north_face_brand.png';
import CoverAdidas from '../../../../assets/images/adidas_brand.png';
import CoverPuma from '../../../../assets/images/puma_brand.png';
import CoverBalance from '../../../../assets/images/new_balance_brand.png';
import CoverJordan from '../../../../assets/images/jordan_brand.png';
import s from './brandLine.module.css';

export const BrandLine = () => {
    return (
        <div>
            <div className={s.line}>
                <div className={s.brandLine}>
                    <a href="#"><img src={CoverNike} alt="" /></a>
                    <a href="#"><img src={CoverTheNorthFace} alt="" /></a>
                    <a href="#"><img src={CoverAdidas} alt="" /></a>
                    <a href="#"><img src={CoverPuma} alt="" /></a>
                    <a href="#"><img src={CoverBalance} alt="" /></a>
                    <a href="#"><img src={CoverJordan} alt="" /></a>
                </div>
            </div>
        </div>
    )
}