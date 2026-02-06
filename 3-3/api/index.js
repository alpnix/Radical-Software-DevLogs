import express from 'express';
import router from './routes.js';

const app = express();

app.use(router);

app.listen(5173, () => {
  console.log('Server is running on port 5173');
});