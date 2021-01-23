import { authentication } from '@server/middleware/authentication';
import { writeToCollection } from '@server/services/writeToCollection';
import { runMiddleware } from '@server/middleware/runMiddleware';
import { WriteItems } from '@types';
import { urlChecker } from '@server/middleware/urlChecker';
import { retrieveMetaData } from '@server/services/retrieveMetaData';

/**
 * Writes items to database
 * @param req request
 * @param res response
 */
export const writeItems: WriteItems = async (req, res) => {
  const { url } = JSON.parse(req.body);
  await runMiddleware(req, res, authentication);
  await runMiddleware(req, res, urlChecker);
  const data = await retrieveMetaData(url);
  const response = await writeToCollection('items', data);
  res.status(200).json(response);
};
