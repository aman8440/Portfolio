export interface FormDataProp{
  name: string;
  email: string;
  message: string;
}

export interface ResposneProp{
  status: string | number;
  message?: string;
  data?: FormDataProp;
  error?: string;
}