import firebaseAdmin from '@utilities/firebase/admin';

import { Authentication } from '@types';

/**
 * Middleware that checks to see if user is logged in
 * @param req request
 * @param res response
 * @param next callback
 * @return void
 */
export const authentication: Authentication = async (req, res, next) => {
  const { token } = JSON.parse(req.body);
  if (!token) {
    res.status(401);
    return next(new Error('user not logged in'));
  }
  try {
    const isValidToken = await firebaseAdmin.admin.auth().verifyIdToken(token);
    next(isValidToken);
  } catch (error) {
    res.status(401);
    next(error);
  }
};
