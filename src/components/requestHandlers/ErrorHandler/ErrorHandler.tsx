import { FC } from 'react';
import closeBtn from '@/assets/icons/closeBtn.svg';

interface IErrorHandlerProps {
  data: string;
  isError: boolean;
  setIsError: React.Dispatch<React.SetStateAction<boolean>>;
}

const ErrorHandler: FC<IErrorHandlerProps> = ({
  data,
  isError,
  setIsError,
}) => {
  return (
    <div
      className={`${
        isError
          ? 'opacity-100 transition-all duration-300 visible'
          : 'opacity-0 transition-all duration-300 invisible'
      } fixed z-10 w-full h-full  left-0 top-0 flex justify-center items-center bg-black text-white px-[20px]`}
    >
      <div className='max-w-[500px] text-center relative w-full mx-auto p-[25px] border-[2px] rounded-[4px]'>
        <p className='text-classic leading-classic font-medium'>{data}</p>
        <button
          className='w-[20px] h-[20px] absolute top-[5px] right-[5px]'
          onClick={() => setIsError((prev: boolean) => !prev)}
        >
          <img src={closeBtn} alt='Close btn' />
        </button>
      </div>
    </div>
  );
};

export default ErrorHandler;
