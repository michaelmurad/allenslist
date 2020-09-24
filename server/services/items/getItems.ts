import { query as q } from 'faunadb';

import { faunaClient } from '@server/database/faunadb';
import { FaunaQuery, GetItems } from '@types';

export const itemQuery = faunaClient.query(
  q.Map(
    q.Paginate(q.Documents(q.Collection('items'))),
    q.Lambda((x) => q.Get(x))
  )
);

/**
 * Gets items from database
 * @param _req request
 * @param res response
 * @returns void
 */
export const getItems: GetItems = async (_req, res) => {
  // Get items from DB
  const { data } = (await itemQuery) as FaunaQuery;
  res.json(data);
};
