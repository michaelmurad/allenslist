import { RunMiddleWare } from '@types';

/**
 * a crude middleware function
 * @param req request
 * @param res response
 * @param middleware middleware
 */
export const runMiddleware: RunMiddleWare = async (req, res, middleware) => {
  return new Promise((resolve, reject) => {
    middleware(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
};
