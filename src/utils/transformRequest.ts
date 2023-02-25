export const transformRequest = (city: string, typeOfWarehouseRef: string) => {
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
