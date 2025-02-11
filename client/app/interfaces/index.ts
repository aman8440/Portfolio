export interface FormDataProp{
  name: string;
  email: string;
  message: string;
}

export interface ResposneProp{
  status: number;
  message?: string;
  data?: FormDataProp;
  error?: string;
}