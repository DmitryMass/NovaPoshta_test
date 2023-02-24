export interface ITtnResponseData {
  success: boolean;
  data: ITtnInfo[] | [];
  errors: any[];
  warnings: string[];
}

export interface ITtnInfo {
  Number: string;
  WarehouseRecipient: string;
  WarehouseSender: string;
  Status: string;
}

//
export interface IRequestBody {
  apiKey: string;
  modelName: string;
  calledMethod: string;
  methodProperties: IMethodProp;
}

interface IDoc {
  DocumentNumber: string;
}

interface IMethodProp {
  Documents: IDoc[];
}
