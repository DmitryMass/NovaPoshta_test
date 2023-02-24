import { useState } from 'react';
import { FormikHelpers } from 'formik';
import { useDispatch } from 'react-redux';
import { useGetTtnInfoMutation } from '@/store/apiQuery/getTtnInfoQuery';
import useActions from '@/store/storeHooks/useActions';
//
import { IRequestBody } from '@/types/ttnTypes';

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
      dispatch(setHistoryItem(values.search));
      return;
    }
    setIsError(true);
  };

  return {
    handleSubmit,
    isError,
    isLoading,
    setIsError,
  };
};
