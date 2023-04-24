const mongoose = require('mongoose');
const clienteSchema = require('./schema/clienteSchema');
module.exports = mongoose.model('cliente', clienteSchema);