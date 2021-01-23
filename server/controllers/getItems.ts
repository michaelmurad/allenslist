import { getAllCollection } from '@server/services/getAllCollection';
import { Collection, GetItems } from '@types';

export const getItems: GetItems = async (_req, res) => {
  const data = await getAllCollection(Collection.items);
  res.json(data);
};
