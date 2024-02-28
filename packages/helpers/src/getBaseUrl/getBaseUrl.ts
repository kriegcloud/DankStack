const VERCEL_URL = process.env.VERCEL_URL;
const PORT = process.env.PORT;

const getBaseUrl = () => {
  if (typeof window !== "undefined") return ""; // browser should use relative url
  if (VERCEL_URL) return VERCEL_URL; // SSR should use vercel url

  return `http://localhost:${PORT}`; // dev SSR should use localhost
};

export default getBaseUrl;
