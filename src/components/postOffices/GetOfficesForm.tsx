import { FC, useState } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
//
import { useGetOfficesMutation } from '@/store/apiQuery/getOfficesQuery';
//
import { transformRequest } from '@/utils/transformRequest';
import { postOfficeFormValidation } from '@/utils/validationSchemas';
//
import Loader from '@/components/requestHandlers/Loader/Loader';
import ErrorHandler from '@/components/requestHandlers/ErrorHandler/ErrorHandler';
//
import { searchTtn } from '@/styles/searchTtn';
import useActions from '@/store/storeHooks/useActions';
import { offices } from '@/styles/offices';

interface IInitialValues {
  city: string;
  type: string;
}

const GetOfficesForm: FC = () => {
  const [getOffices, { isLoading }] = useGetOfficesMutation();
  const dispatch = useDispatch();
  const { setOffices } = useActions();
  const [isError, setIsError] = useState<boolean>(false);

  const handleGetOffices = async (
    values: IInitialValues,
    { resetForm }: FormikHelpers<IInitialValues>
  ) => {
    resetForm();
    const data = transformRequest(values.city.trim(), values.type);
    const response = await getOffices(data).unwrap();
    if (response.data.length !== 0) {
      dispatch(setOffices(response.data));
      return;
    }
    setIsError((prev) => !prev);
  };

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
                  className='min-w-[300px] relative max-[576px]:w-full'
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
