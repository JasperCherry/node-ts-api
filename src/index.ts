import express from 'express';
import { sampleFunc } from './func';

const app = express();



app.get('/api', (_req, res) => {
  console.log('api fired');

  res.send(sampleFunc());
});


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
