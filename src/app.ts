import express from 'express';
const app = express();
import cors from 'cors';
import { router } from './Bike/bike.route';
// parser
app.use(express.json());
app.use(cors());

// common route
app.use('/v1/bikes', router);

export default app;
