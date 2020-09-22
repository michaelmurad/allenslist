import { NextApiRequest, NextApiResponse } from 'next';

/**
 * Tries to determine if url is valid
 * @param req request object
 * @param res response object
 * @param next callback
 */
export const urlChecker = async (
  req: NextApiRequest,
  res: NextApiResponse,
  next: (response: true | Error) => any
): Promise<true | Error> => {
  const { url } = JSON.parse(req.body);

  try {
    const response = await fetch(url);
    if (response.status == 200) {
      return next(true);
    }
  } catch (error) {
    console.log(error);
  }
  res.status(403);
  return next(new Error('invalid url'));
};
