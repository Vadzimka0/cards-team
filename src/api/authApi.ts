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
  passwordRestore: (data: PasswordRestoreData) =>
    instance.post<PasswordRestoreData, AxiosResponse<PasswordResponse>>(
      'auth/forgot',
      data,
    ),
  newPassword: (data: NewPasswordData) =>
    instance.post<NewPasswordData, AxiosResponse<PasswordResponse>>(
      'auth/set-new-password',
      data,
    ),
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
export type PasswordRestoreData = {
  email: string;
  from: string;
  message: string;
};
export type PasswordResponse = {
  info: string;
  error: string;
};
export type NewPasswordData = {
  password: string;
  resetPasswordToken: string | undefined;
};
