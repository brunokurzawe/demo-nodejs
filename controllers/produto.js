var mongoose = require('mongoose');
var clientesModel = mongoose.model('produtos');

exports.produtoGet = function (req, res) {
    if (req.isAuthenticated()) {
        clientesModel.find(req.query.filter, [], { sort: { nome: 1 } })
            .then(function (dados) {
                res.json(dados);
            }, function (erro) {
                res.status(500).json(erro);
            });
    } else {
        res.status(401).json({});
    }
}

exports.produtoPost = function (req, res) {
    if (req.isAuthenticated()) {
        clientesModel.create(req.body)
            .then(function (dado) {
                res.json(dado);
            }, function (erro) {
                res.status(500).json(erro);
            });
    } else {
        res.status(401).json({});
    }
}

exports.produtoGetId = function (req, res) {
    if (req.isAuthenticated()) {
        clientesModel.findById(req.params.id)//.populate('produtos')
            .then(function (data) {
                res.json(data);
            }, function (erro) {
                res.status(500).json(erro);
            });
    } else {
        res.status(401).json({});
    }
}

exports.produtoPut = function (req, res) {
    if (req.isAuthenticated()) {
        clientesModel.findByIdAndUpdate(req.body._id, req.body)//.populate('produtos')
            .then(function (data) {
                res.json(req.body);
            }, function (erro) {
                res.status(500).json(erro);
            });
    } else {
        res.status(401).json({});
    }
}

exports.produtoDelete = function (req, res) {
    if (req.isAuthenticated()) {
        clientesModel.remove({ "_id": req.params.id })
            .then(function (data) {
                res.status(200).json({});
            }, function (erro) {
                res.status(500).json(erro);
            });
    } else {
        res.status(401).json({});
    }
}

