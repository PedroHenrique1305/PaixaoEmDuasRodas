var database = require("../database/config")

function cadastrarResposta(idUsuario, correta1, correta2, correta3, correta4, correta5, quest1, quest2, quest3, quest4, quest5) {
   
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO resposta(pergunta,resposta,fkUsuario,fkQuestao,correta) VALUES (1,'${quest1}','${idUsuario}',1,'${correta1}'), (2,'${quest2}','${idUsuario}',1,'${correta2}'), 
        (3,'${quest3}','${idUsuario}',1,'${correta3}'),(4,'${quest4}','${idUsuario}',1,'${correta4}'),(5,'${quest5}','${idUsuario}',1,'${correta5}');`;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarResposta2(idUsuario, correta1, correta2, correta3, correta4, correta5, quest1, quest2, quest3, quest4, quest5) {
   
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO resposta(pergunta,resposta,fkUsuario,fkQuestao,correta) VALUES (1,'${quest1}','${idUsuario}',2,'${correta1}'), (2,'${quest2}','${idUsuario}',2,'${correta2}'), 
        (3,'${quest3}','${idUsuario}',2,'${correta3}'),(4,'${quest4}','${idUsuario}',2,'${correta4}'),(5,'${quest5}','${idUsuario}',2,'${correta5}'); `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function cadastrarOrcamento(dis,custoCombustao,custoEletrico,economia) {
   
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `insert into orcamento(KmOrcado,CustoCombustao, CustoEletrico,economia) values (${dis},${custoCombustao},${custoEletrico},${economia});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarOrcamento() {
    console.log("ACESSEI O MEDIDA MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n buscarUltimasMedidas(): ")
    var instrucaoSql = `SELECT * FROM orcamento;`;
    
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    cadastrarResposta,
    cadastrarResposta2,
    cadastrarOrcamento,
    buscarOrcamento
};