import express from 'express';
import indexRouter from '#src/routes/index.router.js';

const app = express();

app.use(express.json());

app.use('/api', indexRouter);


export default app;

