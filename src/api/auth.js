import axiosClient from './axiosClient';

export const login = async (email, password) => {
  const { data } = await axiosClient.post('/auth/login', { email, password });
  return data;
};

export const register = async (name, email, password,countryCode,phoneNumber) => {
  const { data } = await axiosClient.post('/auth/register', { name, email, password ,countryCode,
    phoneNumber });
  return data;
};
