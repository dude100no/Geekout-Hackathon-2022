import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import indexRouter from './routes/index.js';

const app = express();
const port = process.env.PORT || '3001';

app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use('/api', indexRouter);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});