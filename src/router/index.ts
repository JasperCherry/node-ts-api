import express from 'express';
import { getRepoInfoRoute } from './getRepoInfo'
import { evaluateSentimentRoute } from './evaluateSentiment'


const router = express.Router();


router.use('/getRepoInfo', getRepoInfoRoute);
router.use('/evaluateSentiment', evaluateSentimentRoute);


export { router };
