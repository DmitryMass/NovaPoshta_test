import { FC } from 'react';
import { Field, Formik } from 'formik';
//
import { postOfficeFormValidation } from '@/utils/validationSchemas';
import { useGetOffices } from '@/customHooks/useGetOffices';
//
import Loader from '@/components/requestHandlers/Loader/Loader';
import ErrorHandler from '@/components/requestHandlers/ErrorHandler/ErrorHandler';
//
import { searchTtn } from '@/styles/searchTtn';
import { offices } from '@/styles/offices';

const GetOfficesForm: FC = () => {
  const { handleGetOffices, isError, isLoading, setIsError } = useGetOffices();
  return (
    <div className='mb-[40px]'>
      <ErrorHandler
        data='Вибачте але в такому місті відділень не існує. Перевірте правильність вводу.'
        isError={isError}
        setIsError={setIsError}
      />
      <Formik
        initialValues={{ city: '', type: '' }}
        onSubmit={handleGetOffices}
        validationSchema={postOfficeFormValidation}
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
            <div className={offices.fieldsWrapper}>
              <div
                className={
                  'flex justify-center gap-[30px] max-[576px]:flex-col  items-baseline max-[576px]:w-full max-[576px]:items-start '
                }
              >
                <label
                  className='min-w-[300px] max-[576px]:min-w-auto relative max-[576px]:w-full'
                  htmlFor='search'
                >
                  {touched.city && errors.city && (
                    <span className={`${offices.fieldError} top-[-10px]`}>
                      {errors.city}
                    </span>
                  )}
                  <Field
                    className={searchTtn.field}
                    id='city'
                    type='text'
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.city}
                    name='city'
                    placeholder='Місто'
                  />
                </label>
                <div className='relative self-end max-[576px]:self-auto '>
                  {touched.type && errors.type && (
                    <span className={`${offices.fieldError} top-[-20px]`}>
                      {errors.type}
                    </span>
                  )}
                  <select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className={offices.select}
                    name='type'
                    id=''
                    value={values.type}
                  >
                    <option label='Виберіть відділення'>
                      Виберіть відділення
                    </option>
                    <option value={import.meta.env.VITE_OFFICES_KEY}>
                      Поштове відділення
                    </option>
                    <option value={import.meta.env.VITE_CARGO_OFFICES_KEY}>
                      Вантажне відділення
                    </option>
                  </select>
                </div>
              </div>
              <button
                className={`${searchTtn.sendBtn} w-[200px] max-[768px]:w-full`}
                type='submit'
              >
                {isLoading ? <Loader /> : 'Пошук'}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default GetOfficesForm;
