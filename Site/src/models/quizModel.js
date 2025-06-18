var database = require("../database/config");

function registrarResultado(acertos, erros, id_usuario, fkQuiz) {
    const sql = `
        INSERT INTO placar (acertos, erros, fkUsuario, fkQuiz)
        VALUES (${acertos}, ${erros}, ${id_usuario}, ${fkQuiz});
    `;
    return database.executar(sql);
}   

function obterKPIs(id_usuario) {
    const sql = `
        SELECT 
            (SELECT COUNT(*) FROM placar WHERE fkUsuario = ${id_usuario} AND fkQuiz = 1) AS tentativasItens,
            (SELECT COUNT(*) FROM placar WHERE fkUsuario = ${id_usuario} AND fkQuiz = 2) AS tentativasClasses
    `;
    return database.executar(sql);
}

function graficoEvolucao(id_usuario) {
    const sql = `
        SELECT DATE_FORMAT(data_hora, '%d/%m %H:%i') AS horario, acertos
        FROM placar
        WHERE fkUsuario = ${id_usuario}
        ORDER BY data_hora
        LIMIT 10;
    `;
    return database.executar(sql);
}

function graficoComparativo(id_usuario) {
    const sql = `
        SELECT 
            q.nome AS tipo,
            SUM(acertos) AS total_acertos,
            SUM(erros) AS total_erros
        FROM placar p
        JOIN quiz q ON p.fkQuiz = q.id
        WHERE fkUsuario = ${id_usuario}
        GROUP BY q.nome;
    `;
    return database.executar(sql);
}

module.exports = {
    registrarResultado,
    obterKPIs,
    graficoEvolucao,
    graficoComparativo
};
