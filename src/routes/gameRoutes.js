
const express = require('express');
const router = express.Router();
const { createGame, getGames } = require('../controllers/gameController');


router.post('/create', createGame);

router.get('/', getGames);

module.exports = router;
