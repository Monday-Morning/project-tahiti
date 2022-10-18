import jwt from 'jsonwebtoken';
import { parseCookies } from 'nookies';

export default (ctx, permissions) => {
  if (!ctx || !permissions) return false;
  const cookies = parseCookies(ctx);
  const { roles } = jwt.decode(cookies.firebaseToken);
  return { isAccessPermited: roles?.includes(permissions), roles };
};
