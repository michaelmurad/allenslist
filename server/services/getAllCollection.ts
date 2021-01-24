import { query as q } from 'faunadb';

import { faunaClient } from '@server/database/faunadb';
import { FaunaQueryData, FaunaQuery, GetAllCollection, Item } from '@types';

/**
 * Gets all Items from database collection
 * @param collection The database collection to retrieve items from
 * @returns Array of collection items
 */
export const getAllCollection: GetAllCollection<Item> = async (collection) => {
  const { data } = (await faunaClient.query(
    q.Map(
      q.Paginate(q.Documents(q.Collection(collection))),
      q.Lambda((x) => q.Get(x))
    )
  )) as FaunaQuery<Item>;
  return data as FaunaQueryData<Item>[];
};
