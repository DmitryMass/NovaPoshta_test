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
//
export interface IOfficesResponse {
  success: boolean;
  data: IDataInfo[];
  errors: any[];
  warnings: string[];
}

export interface IDataInfo {
  CityDescription: string;
  Description: string;
  Schedule: IWorkTimes;
  Number: string;
}

export interface IWorkTimes {
  Friday: string;
  Monday: string;
  Saturday: string;
  Sunday: string;
  Thursday: string;
  Tuesday: string;
  Wednesday: string;
}
