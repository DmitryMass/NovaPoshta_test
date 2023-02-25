import { FC } from 'react';
import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { dispayTtnData } from '@/styles/displayTtnData';
import useActions from '@/store/storeHooks/useActions';
import { useDispatch } from 'react-redux';

const DisplayTtnData: FC = () => {
  const data = useTypedSelector((state) => state.slice.ttnData);
  const { clearTtnData, clearHistory } = useActions();
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearHistory());
    dispatch(clearTtnData());
  };
  return (
    <>
      {data?.Number ? (
        <div className={dispayTtnData.wrapper}>
          <div className='max-w-[440px] max-[768px]:max-w-full mb-[20px]'>
            <p className='text-greenInput mb-[10px]'>
              Статус доставки:{' '}
              <span className='text-white mb-[5px] '>{data.Number}</span>
              <br />
              <span className='text-white '>{data.Status}</span>
            </p>
            <p className='text-greenInput mb-[10px]'>
              Орієнтована дата: <br />
              <span className='text-white '>{data.ActualDeliveryDate}</span>
            </p>

            <p className='text-greenInput mb-[10px]'>
              Відправлення:{' '}
              <br
                className={`${
                  data.WarehouseSenderAddress ? 'block' : 'hidden'
                }`}
              />
              <span className='text-white'>{data.WarehouseSenderAddress}</span>
              <br />
              <span className=' text-white'>{data.WarehouseSender}</span>
            </p>
            <p className='text-greenInput'>
              Отриманання:{' '}
              <br
                className={`${
                  data.WarehouseRecipientAddress ? 'block' : 'hidden'
                }`}
              />
              <span className='text-white'>
                {data.WarehouseRecipientAddress}
              </span>
              <br />
              <span className=' text-white'>{data.WarehouseRecipient}</span>
            </p>
          </div>
          <button
            onClick={handleClear}
            className={`
          }  mb-[5px] text-white font-medium p-[5px] bg-darkBlue flex justify-center items-center text-s cursor-pointer transition-all duration-300 hover:bg-lightBlue mr-auto px-[10px]`}
          >
            Очистити дані та історію
          </button>
        </div>
      ) : null}
    </>
  );
};

export default DisplayTtnData;
