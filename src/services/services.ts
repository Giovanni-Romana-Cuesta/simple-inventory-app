import axios from 'axios';
import { GetMeterResponse, GetMetersResponse, MeterModel } from '../models/models';

const BASE_URL = 'https://ops.enerbit.dev/learning/api/v1/meters';

const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    return error.message;
  } else {
    return 'An unexpected error occurred';
  }
};

export const getMeters = async (page: number) => {
  try {
    const { data } = await axios.get<GetMetersResponse>(BASE_URL, {
      headers: { Accept: 'application/json' },
      params: { page, size: 20 },
    });

    return data;
  } catch (error) {
    handleError(error);
  }
};

export const getMeterById = async (id: string) => {
  try {
    const { data } = await axios.get<GetMeterResponse>(`${BASE_URL}/${id}`, {
      headers: { Accept: 'application/json' },
    });

    return data;
  } catch (error) {
    handleError(error);
  }
};

export const createMeter = async (meter: Partial<MeterModel>) => {
  const { data } = await axios.post<GetMeterResponse>(BASE_URL, meter, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return data;
};

export const updateMeter = async (id: number, meter: Partial<MeterModel>) => {
  const { data } = await axios.patch<GetMeterResponse>(`${BASE_URL}/${id}`, meter, {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  return data;
};

export const deleteMeter = async (id: string) => {
  const { data } = await axios.delete<GetMeterResponse>(`${BASE_URL}/${id}`, {
    headers: { Accept: 'application/json' },
  });

  return data;
};
