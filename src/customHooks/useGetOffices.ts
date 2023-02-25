import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { FormikHelpers } from 'formik';
import { transformRequest } from '@/utils/transformRequest';
import useActions from '@/store/storeHooks/useActions';
import { useGetOfficesMutation } from '@/store/apiQuery/getOfficesQuery';

interface IInitialValues {
  city: string;
  type: string;
}

export const useGetOffices = () => {
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

  return {
    getOffices,
    isLoading,
    isError,
    setIsError,
    handleGetOffices,
  };
};
