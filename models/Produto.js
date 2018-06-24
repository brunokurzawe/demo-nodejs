var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var modelo = new Schema({
    nome: {
        type: String,
        required: [true, 'Nome é obrigatório']
    },
    descricao: {
        type: String,
        required: [true, 'Descricao é obrigatório']
    }
});

modelo.index({ '$**': 'text' });

mongoose.model('produtos', modelo);