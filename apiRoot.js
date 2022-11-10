export const DEV_URL = 'http://localhost:3000';
export const PROD_URL = 'https://travel-planner-backendd.herokuapp.com';
export const API_ROOT = process.env.NODE_ENV === 'development' ? DEV_URL : PROD_URL;
