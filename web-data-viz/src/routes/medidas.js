var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/buscarUltimasMedidas/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/buscarUltimasMedidas2/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/buscarUltimasMedidas3/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas3(req, res);
});

router.get("/buscarUltimasMedidas4/:idUsuario", function (req, res) {
    medidaController.buscarUltimasMedidas4(req, res);
});

// Caminho para o ADM visualizar todas as respostas

router.get("/buscarUltimasMedidasADM", function (req, res) {
    medidaController.buscarUltimasMedidasADM(req, res);
});

router.get("/buscarUltimasMedidas2ADM", function (req, res) {
    medidaController.buscarUltimasMedidas2ADM(req, res);
});

router.get("/buscarUltimasMedidas3ADM", function (req, res) {
    medidaController.buscarUltimasMedidas3ADM(req, res);
});


router.get("/buscarUltimasMedidas4ADM", function (req, res) {
    medidaController.buscarUltimasMedidas4ADM(req, res);
});

module.exports = router;