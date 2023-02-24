import { FC } from 'react';
import { Formik, Field } from 'formik';

import { useTtnInfo } from '@/customHooks/useTtnInfo';
import ErrorHandler from '@/components/requestHandlers/ErrorHandler/ErrorHandler';

const SearchField: FC = () => {
  const { handleSubmit, isError, isLoading, setIsError } = useTtnInfo();

  return (
    <div className='h-full'>
      <ErrorHandler
        data='Посилки з такою ТТН не існує. Перевірте корректність вводу.'
        isError={isError}
        setIsError={setIsError}
      />
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
            <div>
              <label htmlFor='search'>
                {touched.search && errors.search && (
                  <span>{errors.search}</span>
                )}
                <Field
                  id='search'
                  type='text'
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.search}
                  name='search'
                  placeholder='Введіть ваш ТТН'
                />
              </label>
            </div>
            <button type='submit'>Submit</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default SearchField;
