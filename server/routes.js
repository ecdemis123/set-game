import express from 'express';
import controller from './controllers/controller';

const router = express.Router();

router.get('/', (req, res) => {
  res.json('Hello');
});

router.get('/deck', (req, res) => {
  res.json(controller.getGame(req, res));
});

export default router;
