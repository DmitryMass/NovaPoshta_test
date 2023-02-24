import { FC } from 'react';
import { Formik, Field, FormikHelpers } from 'formik';

interface IValues {
  search: string;
}

const SearchField: FC = () => {
  const handleSubmit = async (
    values: IValues,
    { resetForm }: FormikHelpers<IValues>
  ) => {
    console.log(values);
    resetForm();
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
