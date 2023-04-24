const mongoose = require('mongoose');
const livroSchema = require('./schema/livroSchema');
module.exports = mongoose.model('livro', livroSchema);