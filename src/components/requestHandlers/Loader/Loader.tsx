import { FC } from 'react';

const Loader: FC = () => {
  return (
    <span className='block animate-spin border-[5px] border-white rounded-full w-[25px] h-[25px] border-t-hoverRed'></span>
  );
};

export default Loader;
