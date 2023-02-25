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
