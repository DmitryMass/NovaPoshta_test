import { FC } from 'react';
//
import SearchField from '@/components/ttn/searchField/SearchField';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import historyLogo from '@/assets/icons/historyLogo.svg';
import { useDispatch } from 'react-redux';
import useActions from '@/store/storeHooks/useActions';
import { checkTtn } from '@/styles/checkTtn';
import './checkTtn.scss';

const CheckTtn: FC = () => {
  const history = useTypedSelector((state) => state.slice.history);
  const dispatch = useDispatch();
  const { clearHistory } = useActions();

  return (
    <div className={checkTtn.wrapper}>
      <SearchField />
      <div className={`${checkTtn.historyWrapper}`}>
        <ul className='history max-h-[200px] relative'>
          <li className='text-white mb-[10px] font-medium text-sm'>
            Історія пошуку
          </li>
          <li className={checkTtn.historyBtn}>
            <img src={historyLogo} alt='history Button' />
          </li>
          {history.length > 0 ? (
            history.map((item: string) => (
              <li className='mb-[10px] text-white' key={item}>
                {item}
              </li>
            ))
          ) : (
            <li>Ваша історія порожня</li>
          )}
          <li
            onClick={() => dispatch(clearHistory())}
            className={`${
              history.length > 0 ? 'visible' : 'invisible'
            }  mb-[5px] text-white font-medium p-[5px] bg-darkBlue flex justify-center items-center text-s cursor-pointer`}
          >
            Очистити історію
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CheckTtn;
