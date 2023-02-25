import { FC, useState } from 'react';
import { Field, Formik, FormikHelpers } from 'formik';
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
import { useDispatch } from 'react-redux';

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
    <div>
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
            <div className='flex items-center justify-center gap-[20px]'>
              <div
                className={'flex justify-center gap-[30px]  items-baseline '}
              >
                <label className='min-w-[300px] relative' htmlFor='search'>
                  {touched.city && errors.city && (
                    <span className='text-hoverRed text-[12px] absolute top-[-10px]'>
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
                <div className='relative self-end '>
                  {touched.type && errors.type && (
                    <span className='text-hoverRed text-[12px] absolute top-[-30px]'>
                      {errors.type}
                    </span>
                  )}
                  <select
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className='border-none text-white rounded-[6px] bg-selectBg cursor-pointer font-medium outline-none'
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
              <button className={`${searchTtn.sendBtn}`} type='submit'>
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
