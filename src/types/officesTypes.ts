export interface IOffices {
  apiKey: string;
  modelName: string;
  calledMethod: string;
  methodProperties: IOfficesMethodProps;
}

export interface IOfficesMethodProps {
  CityName: string;
  TypeOfWarehouseRef: string;
}
