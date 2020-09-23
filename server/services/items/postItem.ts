import { query as q } from 'faunadb';
import { getMetadata } from 'page-metadata-parser';
import domino from 'domino';

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

  // get metadata
  const response = await fetch(url);
  const html = await response.text();
  const doc = domino.createWindow(html).document;
  const metadata = getMetadata(doc, url);

  // POST item to DB
  const data = await itemQuery(metadata);
  res.status(200).json(data);
};
