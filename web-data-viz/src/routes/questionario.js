var express = require("express");
var router = express.Router();

var questionarioController = require("../controllers/questionarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrarResposta", function (req, res) {
    questionarioController.cadastrarResposta(req, res);
})

router.post("/cadastrarResposta2", function (req, res) {
    questionarioController.cadastrarResposta2(req, res);
})

router.post("/cadastrarOrcamento", function (req, res) {
    questionarioController.cadastrarOrcamento(req, res);
})


router.get("/buscarOrcamento", function (req, res) {
    questionarioController.buscarOrcamento(req, res);
})

module.exports = router
