import { IFetchError } from 'types/main';

async function serverFetch(url: RequestInfo, requestInfo?: RequestInit) {
  try {
    const defaultHeaders = {
      'Content-Type': 'application/json',
    };

    const modifiedRequestInfo = Object.assign(requestInfo || {}, {
      headers: Object.assign(defaultHeaders, requestInfo?.headers),
    });

    const response = await fetch(url, modifiedRequestInfo);
    const responseType = response.headers.get('content-type');

    const data =
      responseType?.includes('application/json') && (await response.json());

    if (response.ok) {
      return data;
    } else {
      const error = new Error(response.statusText) as any;
      error.response = response;
      error.data = data;
      // console.error(error);    Uncomment this for debugging.

      return {
        errors: data?.errors || [],
        errorCode: error.response?.status || data?.errorCode,
        errorMessage:
          data?.error || error.response?.errorMessage || 'There was an error',
      } as IFetchError;
    }
  } catch (error: any) {
    // todo: remove any
    if (!error.data) {
      error.data = { message: error.message };
    }
    throw error;
  }
}

export default serverFetch;
