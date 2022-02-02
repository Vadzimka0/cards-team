import { AxiosResponse } from 'axios';

import { instance } from './axiosInstance';

export const authAPI = {
  registration: (payload: RegistrationData) =>
    instance.post<RegistrationData, AxiosResponse<{ error?: string }>>(
      '/auth/register',
      payload,
    ),
  login: (payload: LoginData) =>
    instance.post<LoginData, AxiosResponse<UsersInfoResponse>>('/auth/login', payload),
};

export type RegistrationData = {
  email: string;
  password: string;
};
export type LoginData = RegistrationData & { rememberMe: boolean };
export type UsersInfoResponse = {
  _id: string;
  email: string;
  name: string;
  avatar?: string;
  publicCardPacksCount: number;
};
