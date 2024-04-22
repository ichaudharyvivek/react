import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: 'fb6f04a2a1374e7c97f05fae15dbcfe1',
  },
});
