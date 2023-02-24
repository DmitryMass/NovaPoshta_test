import { FC } from 'react';
import { Formik, Field } from 'formik';

import ErrorHandler from '@/components/requestHandlers/ErrorHandler/ErrorHandler';
import Loader from '@/components/requestHandlers/Loader/Loader';
import DisplayTtnData from '../displayTtnData/DisplayTtnData';
//
import { useTtnInfo } from '@/customHooks/useTtnInfo';
import './search.scss';
import { searchTtn } from '@/styles/searchTtn';

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
            <div className={searchTtn.formContainer}>
              <label className='grow' htmlFor='search'>
                {touched.search && errors.search && (
                  <span>{errors.search}</span>
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
