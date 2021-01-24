import { query as q } from 'faunadb';

import { faunaClient } from '@server/database/faunadb';
import { FaunaQueryData, GetFromCollectionById, Item } from '@types';

/**
 * Gets a single item from database collection by ID
 * @param collection The database collection to retrieve item from
 * @param ID The database collection to retrieve items from
 * @returns Single collection item
 */
export const getFromCollectionById: GetFromCollectionById<Item> = async (
  collection,
  ID
) => {
  const { data } = (await faunaClient.query(
    q.Get(q.Ref(q.Collection(collection), ID))
  )) as FaunaQueryData<Item>;
  return data;
};
