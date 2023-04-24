const mongoose = require('mongoose');
const funcionarioSchema = require('./schema/funcionarioSchema');
module.exports = mongoose.model('funcionario', funcionarioSchema);