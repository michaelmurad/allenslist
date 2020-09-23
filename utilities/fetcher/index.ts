import { Fetcher } from '@types';

/**
 * @description A function meant to handle HTTP requests
 * @param url the url
 * @param method the HTTP method
 * @param body optional the body of the request
 */
export const fetcher: Fetcher = async (url, method = 'GET', body) => {
  const absoluteUrl = `${process.env.BASE_URL}/${url}`;
  const res = await fetch(absoluteUrl, {
    method,
    body: JSON.stringify(body),
  });
  const data = await res.json();
  let error = null;
  if (res.status !== 200) {
    error = data.message || 'Sorry Something went wrong';
  }
  return { data, error };
};
