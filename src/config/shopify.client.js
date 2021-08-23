import Client from "shopify-buy";

const client = Client.buildClient({
  storefrontAccessToken: process.env.REACT_APP_API_KEY,
  domain: process.env.REACT_APP_BASE_URL,
});

export default client;