import { FC } from 'react';
//
import DetailsInfo from './DetailsInfo';
import { useDisplayOffices } from '@/customHooks/useDisplayOffices';
import { offices } from '@/styles/offices';

const DisplayOffices: FC = () => {
  const { data, handleClearOffices, handleVIew, isViewInfo, setIsViewInfo } =
    useDisplayOffices();
  return (
    <div
      className={`${
        data
          ? 'visible opacity-100 transition-all duration-300'
          : 'invisible opacity-0'
      } ${offices.displayWrapper}`}
    >
      <div className={offices.table}>
        <div className='grid grid-cols-3 mb-[10px] max-[576px]:hidden'>
          <span className={offices.th}>Додатково</span>
          <span className={offices.th}>Місто</span>
          <span className={offices.th}>Відділення</span>
        </div>
        <div>
          {data &&
            data.map((item, key) => (
              <div className={offices.infoWrapper} key={key}>
                <span className={offices.info}>{item.CityDescription}</span>
                <span className={offices.info}>Відділення № {item.Number}</span>
                <button
                  className={offices.viewBtn}
                  onClick={() => handleVIew(key)}
                >
                  Інфо
                </button>
              </div>
            ))}
        </div>
      </div>
      {isViewInfo ? (
        <DetailsInfo setIsView={setIsViewInfo} isViewInfo={isViewInfo} />
      ) : null}
      <button onClick={handleClearOffices} className={offices.clearBtn}>
        Очистити
      </button>
    </div>
  );
};

export default DisplayOffices;
