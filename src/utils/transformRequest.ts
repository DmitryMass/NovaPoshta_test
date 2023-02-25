import { IRequestBody } from '@/types/ttnTypes';
import { IOffices } from './../types/officesTypes';

export const transformRequest = (
  city: string,
  typeOfWarehouseRef: string
): IOffices => {
  return {
    apiKey: import.meta.env.VITE_API_KEY,
    modelName: 'Address',
    calledMethod: 'getWarehouses',
    methodProperties: {
      CityName: city,
      TypeOfWarehouseRef: typeOfWarehouseRef,
    },
  };
};

export const transformTtnBody = (search: string): IRequestBody => {
  return {
    apiKey: import.meta.env.VITE_API_KEY,
    modelName: import.meta.env.VITE_TRACKING,
    calledMethod: import.meta.env.VITE_METHOD,
    methodProperties: {
      Documents: [
        {
          DocumentNumber: search,
        },
      ],
    },
  };
};
