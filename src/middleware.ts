import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
 
export default createMiddleware(routing);
 
export const config = {
  // Corresponde a todas as rotas exeto api, _next, assets, etc.
  matcher: ['/', '/(pt|en)/:path*']
};