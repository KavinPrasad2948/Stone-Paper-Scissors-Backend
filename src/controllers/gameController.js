
const Game = require('../model/Game');


exports.createGame = async (req, res) => {
    const { player1, player2, player1Choice, player2Choice, result, round } = req.body;
    
    try {
        const game = new Game({ player1, player2, player1Choice, player2Choice, result, round });
        console.log(player1, player2, player1Choice, player2Choice, result, round);
        
        const savedGame = await game.save();
        res.status(201).json(savedGame);
    } catch (error) {
        console.error('Error creating game:', error);
        res.status(500).send('Server error');
    }
};


exports.getGames = async (req, res) => {
    try {
        const games = await Game.find();
        res.status(200).json(games);
    } catch (error) {
        console.error('Error fetching games:', error);
        res.status(500).send('Server error');
    }
};
