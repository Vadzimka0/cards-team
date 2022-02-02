import { AxiosResponse } from 'axios';

import { instance } from './axiosInstance';

export const authAPI = {
  registration: (payload: RegistrationData) =>
    instance.post<RegistrationData, AxiosResponse<{ error?: string }>>(
      '/auth/register',
      payload,
    ),
};

export type RegistrationData = {
  email: string;
  password: string;
};
