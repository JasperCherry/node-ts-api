import express from 'express';
import Sentiment from 'sentiment';
import { validateRequest } from './validateRequest';


const router = express.Router();
const sentiment = new Sentiment();


router.post('/', (req, res) => {
  console.log('endpoint hit /api/evaluateSentiment');
  const dataIsValid = validateRequest(req.body);

  let result;

  if (dataIsValid) {
    result = sentiment.analyze(req.body.text);
  } else {
    result = { status: 'wrong data' };
  }

  res.json(result);
});


export { router };
