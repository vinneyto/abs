import Koa from 'koa';
import Router from 'koa-router';
import mongoose from 'mongoose';
import bodyParser from 'koa-bodyparser';
import { TrainingDataModel } from './models';
import { TrainingSessionModel } from './models/TrainingDataModel';

mongoose.connect('mongodb://localhost:27017/trainingDataDb');

const app = new Koa();
const router = new Router();

router.get('/', async ctx => {
  ctx.body = 'Hello, TypeScript with Koa!';
});

router.post('/training-session', async ctx => {
  const trainingSession = new TrainingSessionModel();

  try {
    const savedData = await trainingSession.save();

    console.log('create session', savedData.id);

    ctx.body = savedData;
  } catch (error: any) {
    ctx.status = 400;
    ctx.body = error.message;
  }
});

router.post('/training-data', async ctx => {
  const trainingData = new TrainingDataModel(ctx.request.body);

  try {
    const savedData = await trainingData.save();

    console.log('create training data', savedData.id);

    ctx.body = savedData;
  } catch (error: any) {
    ctx.status = 400;
    ctx.body = error.message;
  }
});

app.use(bodyParser()).use(router.routes()).use(router.allowedMethods());

app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});
