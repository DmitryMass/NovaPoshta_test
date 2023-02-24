import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { FC } from 'react';

const DisplayTtnData: FC = () => {
  const data = useTypedSelector((state) => state.slice.ttnData);

  return (
    <div>
      {data ? (
        <div>
          <p>Статус доставки: {data.Status}</p>
          <p>Відправлено: {data.WarehouseSender}</p>
          <p>Отримано: {data.WarehouseRecipient}</p>
        </div>
      ) : null}
    </div>
  );
};

export default DisplayTtnData;
