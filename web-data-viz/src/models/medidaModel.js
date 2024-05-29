var database = require("../database/config");

function buscarUltimasMedidas() {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n buscarUltimasMedidas(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1)) AS CHAR), 2) AS percentagem_respostas_certas1 FROM resposta WHERE correta = 'sim' AND fkQuestao = 1;`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal() {

    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1)) AS CHAR), 2) AS percentagem_respostas_certas1 FROM resposta WHERE correta = 'sim' AND fkQuestao = 1;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas2() {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimasMedidas2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 2)) AS CHAR), 2) AS percentagem_respostas_certas2 FROM resposta WHERE correta = 'sim' AND fkQuestao = 2;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal2() {

    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 2)) AS CHAR), 2) AS percentagem_respostas_certas2 FROM resposta WHERE correta = 'sim' AND fkQuestao = 2;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas3() {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimasMedidas2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1)) AS CHAR), 2) AS percentagem_respostas_erradas1 FROM resposta WHERE correta = 'nao' AND fkQuestao = 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal3() {

    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1)) AS CHAR), 2) AS percentagem_respostas_erradas1 FROM resposta WHERE correta = 'nao' AND fkQuestao = 1;`;    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas4() {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimasMedidas2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 2)) AS CHAR), 2) AS percentagem_respostas_erradas2 FROM resposta WHERE correta = 'nao' AND fkQuestao = 2;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarMedidasEmTempoReal4() {

    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarMedidasEmTempoReal2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 2)) AS CHAR), 2) AS percentagem_respostas_erradas2 FROM resposta WHERE correta = 'nao' AND fkQuestao = 2;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarUltimasMedidas,
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal2,
    buscarUltimasMedidas3,
    buscarMedidasEmTempoReal3,
    buscarUltimasMedidas4,
    buscarMedidasEmTempoReal4
}
