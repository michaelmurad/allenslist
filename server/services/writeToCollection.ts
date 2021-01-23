import { query as q } from 'faunadb';
import { faunaClient } from '@server/database/faunadb';
import { WriteToCollection } from '@types';

/**
 * Posts item to the database
 * @param collection The collection to post item to
 * @param data The data to be posted
 * @returns void
 */
export const writeToCollection: WriteToCollection = async (collection, data) =>
  faunaClient.query(q.Create(q.Collection(collection), { data }));
