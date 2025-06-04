var express = require("express");
var router = express.Router();
var quizController = require("../controllers/quizController");

router.post("/registrar", function (req, res) {
    quizController.registrarResultado(req, res);
});

router.get("/kpis", function (req, res) {
    quizController.obterKPIs(req, res);
});

router.get("/grafico1", function (req, res) {
    quizController.graficoEvolucao(req, res);
});

router.get("/grafico2", function (req, res) {
    quizController.graficoComparativo(req, res);
});

module.exports = router;