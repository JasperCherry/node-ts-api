import express from 'express';
import getRepoInfo from 'git-repo-info';
import Sentiment from 'sentiment';
import bodyparser from 'body-parser';


const sentiment = new Sentiment();
const app = express();


app.use(bodyparser.json());


app.get('/api/getRepoInfo', (_req, res) => {
  console.log('endpoint hit /api/getRepoInfo');
  const repoInfo = getRepoInfo();
  res.json(repoInfo);
});


app.post('/api/getSentiment', (req, res) => {
  console.log('endpoint hit /api/getSentiment');
  const result = sentiment.analyze(req.body.text);
  res.json(result);
});


app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
