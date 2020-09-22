import { query as q } from 'faunadb';
import linkPreviewGenerator from 'link-preview-generator';

import { faunaClient } from '@server/database/faunadb';
import { urlChecker } from '@server/middleware/urlChecker';
import { runMiddleware } from '@server/middleware/runMiddleware';
import { FaunaItem, Item, PostItem } from '@types';

const itemQuery = (data: Item): Promise<FaunaItem> =>
  faunaClient.query(q.Create(q.Collection('items'), { data }));

/**
 * Posts item to the database
 * @param req request
 * @param res response
 * @returns void
 */
export const postItem: PostItem = async (req, res) => {
  const { url } = JSON.parse(req.body);

  await runMiddleware(req, res, urlChecker);

  // get preview data
  const item: Item = await linkPreviewGenerator(url);

  // POST item to DB
  const data = await itemQuery(item);

  res.status(200).json(data);
};
