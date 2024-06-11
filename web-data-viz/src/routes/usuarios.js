var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/redefinir", function (req, res) {
    usuarioController.redefinir(req, res);
});

router.post("/enviarMensagem", function (req, res) {
    usuarioController.enviarMensagem(req, res);
});

router.get("/buscarMensagens", function (req, res) {
    usuarioController.buscarMensagens(req, res);
})


module.exports = router;