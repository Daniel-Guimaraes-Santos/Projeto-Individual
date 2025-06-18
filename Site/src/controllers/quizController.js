var quizModel = require("../models/quizModel");

function registrarResultado(req, res) {
    const { tipo_quiz, acertos, erros, id_usuario } = req.body;
    const fkQuiz = tipo_quiz === 'itens' ? 1 : 2;

    quizModel.registrarResultado(acertos, erros, id_usuario, fkQuiz)
        .then(() => res.status(200).send("Resultado registrado com sucesso."))
        .catch(err => res.status(500).json(err.sqlMessage));
}

function obterKPIs(req, res) {
    const id_usuario = req.query.id_usuario;

    quizModel.obterKPIs(id_usuario)
        .then(resultado => res.json(resultado[0]))
        .catch(err => res.status(500).json(err.sqlMessage));
}

function graficoEvolucao(req, res) {
    const id_usuario = req.query.id_usuario;

    quizModel.graficoEvolucao(id_usuario)
        .then(r => res.json(r))
        .catch(e => res.status(500).json(e.sqlMessage));
}

function graficoComparativo(req, res) {
    const id_usuario = req.query.id_usuario;
    
    quizModel.graficoComparativo(id_usuario)
        .then(r => res.json(r))
        .catch(e => res.status(500).json(e.sqlMessage));
}

module.exports = {
    registrarResultado,
    obterKPIs,
    graficoEvolucao,
    graficoComparativo
};
