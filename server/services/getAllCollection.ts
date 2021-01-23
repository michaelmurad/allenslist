import { query as q } from 'faunadb';

import { faunaClient } from '@server/database/faunadb';
import { FaunaQuery, GetAllCollection } from '@types';

/**
 * Gets all items from database collection
 * @param collection The database collection to retrieve items from
 * @returns Array of collection items
 */
export const getAllCollection: GetAllCollection = async (collection) => {
  const { data } = (await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection(collection))),
      q.Lambda((x) => q.Get(x))
    )
  )) as FaunaQuery;
  return data;
};
