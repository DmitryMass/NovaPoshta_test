import { FC } from 'react';
import { ROUTE } from '@/utils/routes';
import { Link, Route, Routes } from 'react-router-dom';
//
import CheckTtn from '@/pages/CheckTtn/CheckTtn';
import PostOffices from '@/pages/PostOffices/PostOffices';
//
import poshtaLogo from '@/assets/images/poshtaLogo.jpg';
import './App.scss';
import { app } from '@/styles/app';

const App: FC = () => {
  return (
    <div className={app.wrapper}>
      <Link
        className={app.linkLogo}
        to={'https://novaposhta.ua/'}
        target={'_blank'}
      >
        <img src={poshtaLogo} alt='novaPoshta logo' />
      </Link>
      <div className={app.linkBtnWrapper}>
        <Link className={app.linkBtn} to={ROUTE.HOME}>
          Перевірити ТТН
        </Link>
        <Link className={app.linkBtn} to={ROUTE.OFFICES}>
          Список відділень
        </Link>
      </div>
      <Routes>
        <Route path={ROUTE.HOME} element={<CheckTtn />} />
        <Route path={ROUTE.OFFICES} element={<PostOffices />} />
      </Routes>
    </div>
  );
};

export default App;
