import { FC } from 'react';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';

const DisplayTtnData: FC = () => {
  const data = useTypedSelector((state) => state.slice.ttnData);

  return (
    <div className='bg-grey p-[20px] min-h-[200px] rounded-[16px] flex items-center mb-[30px]'>
      {data ? (
        <div>
          <p className='text-greenInput mb-[10px]'>
            Статус доставки: <br />
            <span className='text-white '>{data.Status}</span>
          </p>
          <p className='text-greenInput mb-[5px]'>
            Відправлено: <br />
            <span className=' text-white'>{data.WarehouseSender}</span>
          </p>
          <p className='text-greenInput'>
            Отримано: <br />
            <span className=' text-white'>{data.WarehouseRecipient}</span>
          </p>
        </div>
      ) : null}
    </div>
  );
};

export default DisplayTtnData;
