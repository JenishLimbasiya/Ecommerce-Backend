export interface appError {
  status: number;
  isOperational?: boolean;
  message: string;
  stack?: string;
}

export interface apiResponse {
  messsge: string;
  data: Array<object> | object;
}
