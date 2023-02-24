export interface ITtnSuccessData {
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
