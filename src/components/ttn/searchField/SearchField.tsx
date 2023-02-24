import { FC } from 'react';
import { Formik, Field } from 'formik';

import { useTtnInfo } from '@/customHooks/useTtnInfo';
import ErrorHandler from '@/components/requestHandlers/ErrorHandler/ErrorHandler';
import Loader from '@/components/requestHandlers/Loader/Loader';
import DisplayTtnData from '../displayTtnData/DisplayTtnData';

import './search.scss';

const SearchField: FC = () => {
  const { handleSubmit, isError, isLoading, setIsError } = useTtnInfo();

  return (
    <div>
      <ErrorHandler
        data='Посилки з такою ТТН не існує. Перевірте корректність вводу.'
        isError={isError}
        setIsError={setIsError}
      />
      <h3 className='text-white font-medium text-m '>Знайти посилку</h3>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={handleSubmit}
        validationSchema={''}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          errors,
          touched,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className='relative flex  min-h-[40px] gap-[40px] mb-[50px]'>
              <label className='grow' htmlFor='search'>
                {touched.search && errors.search && (
                  <span>{errors.search}</span>
                )}
                <Field
                  className={
                    'inputField bg-transparent focus-visible:outline-none border-b-[2px] border-white pb-[5px] pl-[0px] pt-[25px] focus:border-greenInput text-white transition-transform  placeholder:transition-transform focus:placeholder:transition-transform  focus:placeholder:translate-y-[-20px] duration-300 w-full'
                  }
                  id='search'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.search}
                  name='search'
                  placeholder='Введіть ваш ТТН'
                />
              </label>
              <button
                className='h-full text-white font-medium text-classic leading-md flex justify-center items-center min-w-[150px] bg-blue hover:bg-lightBlue transition-all duration-300 min-h-[45px] self-end'
                type='submit'
              >
                {isLoading ? <Loader /> : 'Статус ТТН'}
              </button>
            </div>
            <DisplayTtnData />
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchField;
