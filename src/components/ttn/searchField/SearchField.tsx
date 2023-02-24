import { FC } from 'react';
import { Formik, Field } from 'formik';

import { useTtnInfo } from '@/customHooks/useTtnInfo';

const SearchField: FC = () => {
  const { handleSubmit, isError, isLoading, setIsError } = useTtnInfo();

  return (
    <div className='relative h-full'>
      <div
        className={`${
          isError
            ? 'opacity-100 transition-all duration-300 visible'
            : 'opacity-0 transition-all duration-300 invisible'
        } absolute w-full h-full flex justify-center items-center bg-black text-white`}
      >
        <p>Посилки з такою ТТН не існує. Перевірте корректність вводу.</p>
        <button onClick={() => setIsError((prev) => !prev)}>X</button>
      </div>
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
