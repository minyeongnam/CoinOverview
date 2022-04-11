import { PricesList } from 'interface/prices';
import axios, { AxiosResponse } from 'axios';
import camelcaseKeys from 'camelcase-keys';

export const api = axios.create({
  baseURL: 'https://api.coinpaprika.com/v1',
});

api.interceptors.response.use(
  (response) => {
    return {
      ...response,
      data: camelcaseKeys(response.data, { deep: true }),
    };
  },
  (error) => {
    return Promise.reject(error);
  },
);

export const getPricesApi = async () => {
  const { data }: AxiosResponse<PricesList[]> = await api.get('tickers');
  return data;
};
