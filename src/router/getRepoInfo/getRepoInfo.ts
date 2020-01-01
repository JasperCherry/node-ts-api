import express from 'express';
import getRepoInfo from 'git-repo-info';


const router = express.Router();


router.get('/', (_req, res) => {
  console.log('endpoint hit /api/getRepoInfo');
  const repoInfo = getRepoInfo();
  res.json(repoInfo);
});


export { router };
