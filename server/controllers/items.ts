import { authentication } from '@server/middleware/authentication';
import { postItem } from '@server/services/items/postItem';
import { getItems } from '@server/services/items/getItems';
import { runMiddleware } from '@server/middleware/runMiddleware';
import { ItemsController } from '@types';

/**
 * Routes items requests to correct service
 * @param req request
 * @param res response
 */
export const itemsController: ItemsController = async (req, res) => {
  if (req.method === 'POST') {
    await runMiddleware(req, res, authentication);
    return await postItem(req, res);
  }
  return await getItems(req, res);
};
