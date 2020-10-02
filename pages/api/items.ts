import { itemsController } from '@server/controllers/items';
import { runMiddleware } from '@server/middleware/runMiddleware';
import { cors } from '@server/middleware/cors';
import { Items } from '@types';

const items: Items = async (req, res) => {
  try {
    await runMiddleware(req, res, cors as any);
    await itemsController(req, res);
  } catch (error) {
    console.log(error);
    res
      .status(error.requestResult?.statusCode || res.statusCode || 500)
      .json({ message: error.message || 'Sorry something went wrong' });
  }
};

export default items;
