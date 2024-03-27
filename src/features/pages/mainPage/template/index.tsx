import { Cards } from 'features/Cards/Cards';
import { MainHeader } from 'features/pages/header/mainheader';
import s from './index.module.css';
import { MainBanner } from '../banner/banner';

export const MainPage = () => {
  return (
      <div className={s.container}>
        <MainHeader />
        <MainBanner />
        <Cards />
      </div>
  )
}