
const mongoose = require('mongoose');

const gameSchema = new mongoose.Schema({
    player1: { type: String, required: true },
    player2: { type: String, required: true },
    player1Choice: { type: String, required: true },
    player2Choice: { type: String, required: true },
    result: { type: String, required: true },
    round: { type: Number, required: true },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Game', gameSchema);
