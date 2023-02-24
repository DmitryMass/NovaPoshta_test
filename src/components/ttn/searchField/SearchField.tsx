import { FC } from 'react';
import { Formik, Field, FormikHelpers } from 'formik';
import { IRequestBody } from '@/types/ttnTypes';
import { useDispatch } from 'react-redux';
import useActions from '@/store/storeHooks/useActions';
import { useGetTtnInfoMutation } from '@/store/apiQuery/getTtnInfoQuery';

interface IValues {
  search: string;
}

const SearchField: FC = () => {
  const { setTtnData } = useActions();
  const dispatch = useDispatch();
  const [getTtnInfo, { isLoading }] = useGetTtnInfoMutation();

  const handleSubmit = async (
    values: IValues,
    { resetForm }: FormikHelpers<IValues>
  ) => {
    const requestBody: IRequestBody = {
      apiKey: import.meta.env.VITE_API_KEY,
      modelName: import.meta.env.VITE_TRACKING,
      calledMethod: import.meta.env.VITE_METHOD,
      methodProperties: {
        Documents: [
          {
            DocumentNumber: values.search,
          },
        ],
      },
    };
    resetForm();
    const response = await getTtnInfo(requestBody).unwrap();
    if (response.success) {
      dispatch(setTtnData(response.data[0]));
    }
  };

  return (
    <div>
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
