import { FC } from 'react';
import DisplayTtnData from './displayTtnData/DisplayTtnData';
import SearchField from './searchField/SearchField';

const Ttn: FC = () => {
  return (
    <div>
      <SearchField />
      <DisplayTtnData />
    </div>
  );
};

export default Ttn;
