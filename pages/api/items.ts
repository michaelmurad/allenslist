import { writeItems } from '@server/controllers/writeItems';
import { runMiddleware } from '@server/middleware/runMiddleware';
import { cors } from '@server/middleware/cors';
import { Items } from '@types';
import { getItems } from '@server/controllers/getItems';

const items: Items = async (req, res) => {
  try {
    await runMiddleware(req, res, cors as any);
    switch (req.method) {
      case 'GET':
        getItems(req, res);
        break;
      case 'POST':
        writeItems(req, res);
        break;
    }
  } catch (error) {
    console.log(error);
    res
      .status(error.requestResult?.statusCode || res.statusCode || 500)
      .json({ message: error.message || 'Sorry something went wrong' });
  }
};

export default items;
