import { json, Router } from 'express';

import {CidadeController} from './controllers';

const router = Router();

router.get('/', (req, res) => {
  return res.send('Rostas funcionando!');
});

router.post('/cidades', CidadeController.create);
router.get('/cidades', CidadeController.getAll);

export { router };