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
      <Link className={app.linkLogo} to={ROUTE.HOME}>
        <img src={poshtaLogo} alt='novaPoshta logo' />
      </Link>
      <div className='flex justify-start items-start flex-col gap-[50px] max-w-[230px] w-full '>
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
