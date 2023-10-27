import type { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import fetchCards, { QueryType } from '../services/cardServices';

const cardsController = {
  async getCards(req: Request, res: Response) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const cards = await fetchCards(req.query as unknown as QueryType);
      return res.json(cards);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ error: 'An error occurred while fetching cards.' });
    }
  },
};

export default cardsController;