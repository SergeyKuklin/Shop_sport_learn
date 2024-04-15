import { ReactNode } from 'react';
// import ui from './uisale.module.css';

type UiSaleBlockProps = {
    children?: ReactNode,
    style: string
}

export const UiSaleBlock = ({children, style}: UiSaleBlockProps) => {
    return (
        <div className={style}>{children}</div>
    )
}