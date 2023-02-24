import { FC } from 'react';
import { ROUTE } from '@/utils/routes';
import { Link, NavLink, Route, Routes } from 'react-router-dom';
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
        <NavLink
          className={({ isActive }) =>
            isActive ? app.linkBtnActive : app.linkBtn
          }
          to={ROUTE.HOME}
        >
          Перевірити <br className='max-[576px]:block hidden' /> ТТН
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? app.linkBtnActive : app.linkBtn
          }
          to={ROUTE.OFFICES}
        >
          Список <br className='max-[576px]:block hidden' /> відділень
        </NavLink>
      </div>
      <Routes>
        <Route path={ROUTE.HOME} element={<CheckTtn />} />
        <Route path={ROUTE.OFFICES} element={<PostOffices />} />
      </Routes>
    </div>
  );
};

export default App;
