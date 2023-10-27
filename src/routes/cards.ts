import { Router } from 'express';
import cardsController  from '../controllers/cardsController';
import validateQuery from '../middlewares/validateQuery';

const router = Router();

router.get('/', validateQuery, cardsController.getCards);

export default router;