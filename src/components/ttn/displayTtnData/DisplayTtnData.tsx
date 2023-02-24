import { FC } from 'react';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { dispayTtnData } from '@/styles/displayTtnData';

const DisplayTtnData: FC = () => {
  const data = useTypedSelector((state) => state.slice.ttnData);

  return (
    <>
      {data?.Number ? (
        <div className={dispayTtnData.wrapper}>
          <p className='text-greenInput mb-[10px]'>
            Статус доставки: <br />
            <span className='text-white '>{data.Status}</span>
          </p>
          <p className='text-greenInput mb-[10px]'>
            Відправлено: <br />
            <span className=' text-white'>{data.WarehouseSender}</span>
          </p>
          <p className='text-greenInput'>
            Отримано: <br />
            <span className=' text-white'>{data.WarehouseRecipient}</span>
          </p>
        </div>
      ) : null}
    </>
  );
};

export default DisplayTtnData;
