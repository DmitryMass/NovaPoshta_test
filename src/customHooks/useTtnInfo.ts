import { useState } from 'react';
import { FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { useGetTtnInfoMutation } from '@/store/apiQuery/getTtnInfoQuery';
import useActions from '@/store/storeHooks/useActions';
//
import { transformTtnBody } from '@/utils/transformRequest';

interface IValues {
  search: string;
}

export const useTtnInfo = () => {
  const { setTtnData, setHistoryItem } = useActions();
  const dispatch = useDispatch();
  const [getTtnInfo, { isLoading }] = useGetTtnInfoMutation();
  const [isError, setIsError] = useState<boolean>(false);

  const handleSubmit = async (
    values: IValues,
    { resetForm }: FormikHelpers<IValues>
  ) => {
    const requestBody = transformTtnBody(values.search);
    resetForm();
    const response = await getTtnInfo(requestBody).unwrap();
    if (response.success) {
      if (response.data[0].Status === 'Номер не найден') {
        setIsError(true);
        return;
      }
      dispatch(setTtnData(response.data[0]));
      dispatch(setHistoryItem(values.search));
      return;
    }
    setIsError(true);
  };

  const handleHistoryTtn = async (values: string) => {
    const requestBody = transformTtnBody(values);
    const response = await getTtnInfo(requestBody).unwrap();
    if (response.success) {
      dispatch(setTtnData(response.data[0]));
      dispatch(setHistoryItem(values));
      return;
    }
    setIsError(true);
  };

  return {
    handleSubmit,
    isError,
    isLoading,
    setIsError,
    handleHistoryTtn,
  };
};
