import request from 'axios';
import {HttpCode} from '../const/const';
import {toast} from 'react-toastify';

const errorHandle = (error: unknown): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {response} = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BadRequest:
        toast.info(response.data.error);
        break;
      case HttpCode.Unauthorized:
        toast.info(response.data.error);
        break;
      case HttpCode.NotFound:
        toast.info(response.data.error);
        break;
      default:
        toast.info(`Unknown error: ${response.data.error}`);
    }
  }
};

export default errorHandle;
