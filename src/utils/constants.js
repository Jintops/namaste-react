export const CDN_URL ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
export const LOGO_URL = "https://i.pinimg.com/564x/1c/cc/67/1ccc676ad4e52a365a96d5f0d2dd2814.jpg";

// More specific environment detection
const isNpmStart = typeof window !== 'undefined' && window.location.port === '1234';
const isVercelDev = typeof window !== 'undefined' && window.location.port === '3000' && window.location.hostname === 'localhost';
const isProduction = typeof window !== 'undefined' && window.location.hostname !== 'localhost';

// Use direct APIs only for npm start (port 1234)
// Use API routes for vercel dev (port 3000) and production
const useAPIRoutes = isVercelDev || isProduction;

export const RES_API = useAPIRoutes
  ? "/api/restaurants"
  : "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING";

export const MENU_API = useAPIRoutes
  ? "/api/menu?restaurantId="  // ← Add this
  : "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.9351929&lng=77.62448069999999&restaurantId=";

export const MENUU_API = MENU_API;