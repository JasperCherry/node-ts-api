import express from 'express';
import Sentiment from 'sentiment';


const router = express.Router();
const sentiment = new Sentiment();


router.post('/', (req, res) => {
  console.log('endpoint hit /api/evaluateSentiment');
  const result = sentiment.analyze(req.body.text);
  res.json(result);
});


export { router };
