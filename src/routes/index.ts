import { Router } from 'express';

const router = Router();

router.get('/teste', (req, res) => {
  return res.send('Hello, World!');
});

export { router };