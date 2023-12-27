import { Router } from 'express';
import { Card } from '../models/card';
import { Deck } from '../models/deck';

const router = Router();

// Card routes
router.get('/cards', async (req, res) => {
  try {
    const cards = await Card.findAll();
    res.json(cards);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/cards', async (req, res) => {
  try {
    const newCard = await Card.create(req.body);
    res.status(201).json(newCard);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Deck routes
router.get('/decks', async (req, res) => {
  try {
    const decks = await Deck.findAll({ include: Card });
    res.json(decks);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/decks', async (req, res) => {
  try {
    const newDeck = await Deck.create(req.body);
    res.status(201).json(newDeck);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Add more routes as necessary for updating, deleting, etc.

export default router;
