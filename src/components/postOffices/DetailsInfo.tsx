import { FC } from 'react';
//
import { IDataInfo } from '@/types/officesTypes';
import closeBtn from '@/assets/icons/closeBtn.svg';
import { offices } from '@/styles/offices';

interface IDetailsInfoProps {
  setIsView: React.Dispatch<
    React.SetStateAction<{
      item: IDataInfo;
    } | null>
  >;
  isViewInfo: {
    item: IDataInfo;
  };
}

const DetailsInfo: FC<IDetailsInfoProps> = ({ isViewInfo, setIsView }) => {
  return (
    <div className={offices.detailsWrapper}>
      <div className={offices.detailsContainer}>
        <p className={offices.detailsDescription}>
          {isViewInfo.item.Description}
        </p>
        <ul className={offices.detailsList}>
          <li className='text-center mb-[10px]'>Графік роботи</li>
          <li className={offices.detailsLi}>
            Понеділок{' '}
            <span className='text-darkGreen font-medium'>
              {isViewInfo.item.Schedule.Monday}
            </span>
          </li>
          <li className={offices.detailsLi}>
            Вівторок{' '}
            <span className='text-darkGreen font-medium'>
              {isViewInfo.item.Schedule.Tuesday}
            </span>
          </li>
          <li className={offices.detailsLi}>
            Середа{' '}
            <span className='text-darkGreen font-medium'>
              {isViewInfo.item.Schedule.Wednesday}
            </span>
          </li>
          <li className={offices.detailsLi}>
            Четвер{' '}
            <span className='text-darkGreen font-medium'>
              {isViewInfo.item.Schedule.Thursday}
            </span>
          </li>
          <li className={offices.detailsLi}>
            П'ятниця{' '}
            <span className='text-darkGreen font-medium'>
              {isViewInfo.item.Schedule.Friday}
            </span>
          </li>
          <li className={offices.detailsLi}>
            Субота{' '}
            <span className='text-darkGreen'>
              {isViewInfo.item.Schedule.Saturday}
            </span>
          </li>
          <li className={offices.detailsLi}>
            Неділя{' '}
            <span className='text-darkGreen'>
              {isViewInfo.item.Schedule.Sunday}
            </span>
          </li>
        </ul>
        <button
          className='w-[20px] h-[20px] absolute top-[5px] right-[5px]'
          onClick={() => setIsView(null)}
        >
          <img src={closeBtn} alt='Close btn' />
        </button>
      </div>
    </div>
  );
};

export default DetailsInfo;
