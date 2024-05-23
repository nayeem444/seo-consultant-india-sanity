// import { createProxyMiddleware } from 'http-proxy-middleware';

// const API_URL = 'http://marketinglad.co.in/graphql';

// export default function handler(req, res) {
//   const proxy = createProxyMiddleware({
//     target: API_URL,
//     changeOrigin: true,
//     pathRewrite: {
//       '^/api/graphql-proxy': '', // remove base path
//     },
//     secure: false,
//   });

//   return proxy(req, res, (result) => {
//     if (result instanceof Error) {
//       throw result;
//     }

//     return result;
//   });
// }

// export const config = {
//   api: {
//     bodyParser: false, // Disallow body parsing, since we're sending requests as-is
//   },
// };
