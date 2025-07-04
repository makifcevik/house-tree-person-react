interface IResponse<T> {
  status: boolean;
  message: string;
  data: T;
}

export default IResponse;
