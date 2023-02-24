import { FC } from 'react';
import SearchField from './ttn/searchField/SearchField';
import './App.scss';
import DisplayTtnData from './ttn/displayTtnData/DisplayTtnData';

const App: FC = () => {
  return (
    <div className='App'>
      <SearchField />
      <DisplayTtnData />
    </div>
  );
};

export default App;
