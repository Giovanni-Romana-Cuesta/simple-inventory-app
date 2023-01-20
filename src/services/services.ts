import axios from 'axios';
import { GetMeterResponse, GetMetersResponse, MeterModel } from '../models/models';

const BASE_URL = 'https://ops.enerbit.dev/learning/api/v1/meters';

const handleError = (error: unknown) => {
  if (axios.isAxiosError(error)) {
    console.log('error message: ', error.message);
    return error.message;
  } else {
    console.log('unexpected error: ', error);
    return 'An unexpected error occurred';
  }
};

export const getMeters = async () => {
  try {
    const { data, status } = await axios.get<GetMetersResponse>(BASE_URL, {
      headers: { Accept: 'application/json' },
      params: { page: 0, size: 20 },
    });

    return { data, status };
  } catch (error) {
    handleError(error);
  }
};

export const getMeterById = async (id: string) => {
  try {
    const { data, status } = await axios.get<GetMeterResponse>(`${BASE_URL}/${id}`, {
      headers: { Accept: 'application/json' },
    });

    return { data, status };
  } catch (error) {
    handleError(error);
  }
};

export const createMeter = async (meter: Partial<MeterModel>) => {
  try {
    const { data, status } = await axios.post<GetMeterResponse>(BASE_URL, meter, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return { data, status };
  } catch (error) {
    handleError(error);
  }
};

export const updateMeter = async (meter: Partial<MeterModel>) => {
  try {
    const { data, status } = await axios.patch<GetMeterResponse>(BASE_URL, meter, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    });

    return { data, status };
  } catch (error) {
    handleError(error);
  }
};

export const deleteMeter = async (id: string) => {
  try {
    const { data, status } = await axios.delete<GetMeterResponse>(
      `https://ops.enerbit.dev/learning/api/v1/meters/${id}`,
      { headers: { Accept: 'application/json' } },
    );

    return { data, status };
  } catch (error) {
    handleError(error);
  }
};
