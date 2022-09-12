/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from 'axios';

const baseURL = `${process.env.NEXT_PUBLIC_API_BASE}/${process.env.NEXT_PUBLIC_API_BASE_VERSION}`;

export const request = axios.create({
  baseURL
});

function createRequestInterceptor() {
  return async function interceptor(config:AxiosRequestConfig) {
    // Derived config from dynamic config

    const baseConfig = {
      ...config,
      metadata: { startTime: new Date().getTime() },
      headers: {
        ...config.headers,
      },
    };
    
    return {
      ...baseConfig,
    };
  };
}

export function createHandlerChain(handlers:Array<(error: AxiosError) => Promise<never> | void> = []) {
  return function handlerChain(error:any) {
    const stack = [ ...handlers ];

    function next() {
      if (stack.length === 0) {
        return;
      }
      const nextHandler:any = stack.pop();
      if(nextHandler){
        nextHandler(error, next);
      }
    }

    next();
    return Promise.reject(error);
  };
}

function parseResultsHandler(response:AxiosResponse) {
  return response.data;
}

request.interceptors.request.use(createRequestInterceptor());
request.interceptors.response.use(
  parseResultsHandler,
  createHandlerChain([
  ]),
);
export default request;
