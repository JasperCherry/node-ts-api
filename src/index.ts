import express from 'express';
import bodyparser from 'body-parser';
import { router } from './router';


const app = express();


app.use(bodyparser.json());
app.use('/api', router);



app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
