import { FC } from 'react';
//
import DisplayTtnData from '@/components/ttn/displayTtnData/DisplayTtnData';
import SearchField from '@/components/ttn/searchField/SearchField';

const CheckTtn: FC = () => {
  return (
    <div className='grow'>
      <SearchField />
      <DisplayTtnData />
    </div>
  );
};

export default CheckTtn;
