var database = require("../database/config");

function buscarUltimasMedidas(idUsuario) {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n buscarUltimasMedidas(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1)) AS CHAR), 2) AS percentagem_respostaUsuarios_certas1 FROM resposta WHERE correta = 'sim' AND fkQuestao = 1 and fkUsuario = ${idUsuario};`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarUltimasMedidas2(idUsuario) {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimasMedidas2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 2)) AS CHAR), 2) AS percentagem_respostaUsuarios_certas2 FROM resposta WHERE correta = 'sim' AND fkQuestao = 2 and fkUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidas3(idUsuario) {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimasMedidas2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1)) AS CHAR), 2) AS percentagem_respostasUsuario_erradas1 FROM resposta WHERE correta = 'nao' AND fkQuestao = 1 and fkUsuario = ${idUsuario};`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidas4(idUsuario) {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimasMedidas2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 2)) AS CHAR), 2) AS percentagem_respostasUsuario_erradas2 FROM resposta WHERE correta = 'nao' AND fkQuestao = 2 and fkUsuario = ${idUsuario};`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


// MODEL DO ADM


function buscarUltimasMedidasADM() {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n buscarUltimasMedidas(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1)) AS CHAR), 2) AS percentagem_respostas_certas1 FROM resposta WHERE correta = 'sim' AND fkQuestao = 1;`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidas2ADM() {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimasMedidas2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 2)) AS CHAR), 2) AS percentagem_respostas_certas2 FROM resposta WHERE correta = 'sim' AND fkQuestao = 2;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidas3ADM() {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimasMedidas2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1)) AS CHAR), 2) AS percentagem_respostas_erradas1 FROM resposta WHERE correta = 'nao' AND fkQuestao = 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarUltimasMedidas4ADM() {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function buscarUltimasMedidas2(): ")
    var instrucaoSql = `SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 2)) AS CHAR), 2) AS percentagem_respostas_erradas2 FROM resposta WHERE correta = 'nao' AND fkQuestao = 2;`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    buscarUltimasMedidas,
    buscarUltimasMedidas2,
    buscarUltimasMedidas3,
    buscarUltimasMedidas4,
    buscarUltimasMedidasADM,
    buscarUltimasMedidas2ADM,
    buscarUltimasMedidas3ADM,
    buscarUltimasMedidas4ADM
}
