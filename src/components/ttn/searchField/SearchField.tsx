import { FC } from 'react';
import { Formik, Field } from 'formik';

import ErrorHandler from '@/components/requestHandlers/ErrorHandler/ErrorHandler';
import Loader from '@/components/requestHandlers/Loader/Loader';
import DisplayTtnData from '../displayTtnData/DisplayTtnData';
//
import { useTtnInfo } from '@/customHooks/useTtnInfo';
import { searchTtn } from '@/styles/searchTtn';
import { searchValidation } from '@/utils/validationSchemas';

const SearchField: FC = () => {
  const { handleSubmit, isError, isLoading, setIsError } = useTtnInfo();

  return (
    <div>
      <ErrorHandler
        data='Посилки з такою ТТН не існує. Перевірте корректність вводу.'
        isError={isError}
        setIsError={setIsError}
      />
      <h3 className='text-white font-medium text-m mb-[10px] '>
        Знайти посилку
      </h3>
      <Formik
        initialValues={{ search: '' }}
        onSubmit={handleSubmit}
        validationSchema={searchValidation}
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
            <div className={searchTtn.formContainer}>
              <label className='grow relative' htmlFor='search'>
                {touched.search && errors.search && (
                  <span className='text-hoverRed absolute top-[-10px] text-[12px]'>
                    {errors.search}
                  </span>
                )}
                <Field
                  className={searchTtn.field}
                  id='search'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.search}
                  name='search'
                  placeholder='Введіть ваш ТТН'
                />
              </label>
              <button className={searchTtn.sendBtn} type='submit'>
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
