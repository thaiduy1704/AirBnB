const CONFIG = {
  BASE_URL: process.env.REACT_APP_API_DOMAIN || "http://localhost:8000",
} as const;

export default CONFIG;
