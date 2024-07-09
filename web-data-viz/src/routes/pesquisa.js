var express = require("express");
var router = express.Router();
var pesquisaController = require("../controllers/pesquisaController.js");

router.post("/inserirResposta", function (req, res) {
    pesquisaController.inserirResposta(req, res);
});

router.get("/buscarRanking", function (req, res) {
    pesquisaController.buscarRanking(req, res);
});

router.get("/buscarDadosGrafico", function (req, res) {
    pesquisaController.buscarDadosGrafico(req, res);
});

module.exports = router;
