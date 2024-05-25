var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// router.get("/gerarGrafico", function (req, res) {
//     medidaController.gerarGrafico(req, res);
// });

router.get("/buscarUltimasMedidas", function (req, res) {
    medidaController.buscarUltimasMedidas(req, res);
});

router.get("/buscarMedidasEmTempoReal", function (req, res) {
    medidaController.buscarMedidasEmTempoReal(req, res);
})

router.get("/buscarUltimasMedidas2", function (req, res) {
    medidaController.buscarUltimasMedidas2(req, res);
});

router.get("/buscarMedidasEmTempoReal2", function (req, res) {
    medidaController.buscarMedidasEmTempoReal2(req, res);
})

router.get("/buscarUltimasMedidas3", function (req, res) {
    medidaController.buscarUltimasMedidas3(req, res);
});

router.get("/buscarMedidasEmTempoReal3", function (req, res) {
    medidaController.buscarMedidasEmTempoReal3(req, res);
})

router.get("/buscarUltimasMedidas4", function (req, res) {
    medidaController.buscarUltimasMedidas4(req, res);
});

router.get("/buscarMedidasEmTempoReal4", function (req, res) {
    medidaController.buscarMedidasEmTempoReal4(req, res);
})

module.exports = router;