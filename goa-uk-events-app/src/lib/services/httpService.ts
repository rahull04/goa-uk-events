import axios from 'axios';
import { Logger } from '../utils';

const logger = new Logger('EventSaga');

const api = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const GET = async (apiURL: string, params?: Record<string, string>, headers?: Record<string, string>): Promise<Record<string, any>> => {
  try {
    const response = await api.get(apiURL, { params, headers });
    return response;
  } catch (error) {
    logger.error('Error in GET api call: ', error);
    throw error;
  }
};

export const POST = async (apiURL: string, data?: Record<string, any>, headers?: Record<string, string>) => {
  try {
    const response = await api.post(apiURL, { data, headers });
    return response;
  } catch (error) {
    logger.error('Error in POST api call: ', error);
    throw error;
  }
};

export const PATCH = async (apiURL: string, data?: Record<string, any>, headers?: Record<string, string>) => {
  try {
    const response = await api.patch(apiURL, { data, headers });
    return response;
  } catch (error) {
    logger.error('Error in PATCH api call: ', error);
    throw error;
  }
};

export const PUT = async (apiURL: string, data?: Record<string, any>, headers?: Record<string, string>) => {
  try {
    const response = await api.put(apiURL, { data, headers });
    return response;
  } catch (error) {
    logger.error('Error in POST api call: ', error);
    throw error;
  }
};
