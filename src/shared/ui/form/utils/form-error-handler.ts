import { AxiosError } from 'axios';
import type { Ref } from 'vue';

export function formErrorHandler<H extends (...args: any) => any>(refError: Ref, handler: H) {
  return async function (this: any, ...params: Parameters<H>) {    
    try {
      const result = handler.call(this, ...params);
      if (result instanceof Promise) await result;
      return result;
    } catch (err: any) {
      if (err instanceof AxiosError) {
        if (err.response?.data && typeof err.response?.data === 'string') {
          refError.value = err.response.data;
          return
        }
        if (err.response?.data && err.response?.data.message) {
          refError.value = err.response.data.message;
          return
        }
        refError.value = err;
      } else refError.value = err.message;
    };
  };
}
