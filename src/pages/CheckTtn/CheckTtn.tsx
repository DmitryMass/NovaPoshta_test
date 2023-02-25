import { FC } from 'react';
import { useDispatch } from 'react-redux';
import useActions from '@/store/storeHooks/useActions';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
//
import SearchField from '@/components/ttn/searchField/SearchField';
import { useTtnInfo } from '@/customHooks/useTtnInfo';
import Loader from '@/components/requestHandlers/Loader/Loader';
//
import historyLogo from '@/assets/icons/historyLogo.svg';
import closeLogo from '@/assets/icons/deleteLogo.svg';
import { checkTtn } from '@/styles/checkTtn';
import './checkTtn.scss';

const CheckTtn: FC = () => {
  const history = useTypedSelector((state) => state.slice.history);
  const dispatch = useDispatch();
  const { clearHistory, removeItemFromHistory } = useActions();
  const { handleHistoryTtn, isLoading } = useTtnInfo();

  return (
    <div className={checkTtn.wrapper}>
      <SearchField />
      <div
        className={`${checkTtn.historyWrapper} ${
          history.length > 0
            ? 'visible opacity-100 transition-all duration-300'
            : 'invisible opacity-0'
        } `}
      >
        <h3 className='text-white mb-[10px] font-medium text-sm'>
          Історія пошуку
        </h3>
        <span className={checkTtn.historyBtn}>
          <img src={historyLogo} alt='history Button' />
        </span>
        {isLoading ? (
          <span className={checkTtn.historyLoader}>
            <Loader />
          </span>
        ) : null}
        <ul className={`history h-[160px]`}>
          {history.length > 0 ? (
            history.map((item: string) => (
              <li
                className='mb-[10px] text-white transition-all duration-75 hover:text-greenInput flex justify-center items-center gap-[10px]'
                key={item}
              >
                <span
                  className='cursor-pointer'
                  onClick={async () => await handleHistoryTtn(item)}
                >
                  {item}
                </span>{' '}
                <span
                  onClick={() => dispatch(removeItemFromHistory(item))}
                  className='w-[13px] h-[13px] block cursor-pointer'
                >
                  <img src={closeLogo} alt='remove logo' />
                </span>
              </li>
            ))
          ) : (
            <li>Ваша історія порожня</li>
          )}
        </ul>
        <button
          onClick={() => dispatch(clearHistory())}
          className={`${
            history.length > 0 ? 'visible' : 'invisible'
          }  mb-[5px] text-white font-medium p-[5px] bg-darkBlue flex justify-center items-center text-s cursor-pointer transition-all duration-300 hover:bg-lightBlue mx-auto px-[10px]`}
        >
          Очистити історію
        </button>
      </div>
    </div>
  );
};

export default CheckTtn;
