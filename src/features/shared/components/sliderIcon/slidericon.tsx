import { ReactNode } from 'react';
import s from './slidericon.module.css';

type ButtonSliderProps = {
    children?: ReactNode,
}

export const IconSlider = (props: ButtonSliderProps) => {
    return (
        <button className={s.btnSlider}>{props.children}</button>
    )
}