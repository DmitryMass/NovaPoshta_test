import useTypedSelector from '@/store/storeHooks/useTypedSelector';
import { IDataInfo } from './../types/officesTypes';
import useActions from '@/store/storeHooks/useActions';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

export const useDisplayOffices = () => {
  const dispatch = useDispatch();
  const { clearOffices } = useActions();
  const [isViewInfo, setIsViewInfo] = useState<null | { item: IDataInfo }>(
    null
  );
  const data = useTypedSelector((state) => state.slice.offices);

  const handleVIew = (idx: number) => {
    if (data) {
      setIsViewInfo({
        item: { ...data[idx] },
      });
    }
  };
  const handleClearOffices = () => {
    dispatch(clearOffices());
  };

  return {
    data,
    isViewInfo,
    setIsViewInfo,
    handleVIew,
    handleClearOffices,
  };
};
