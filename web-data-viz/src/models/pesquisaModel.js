// const { buscarRanking } = require("../controllers/pesquisaController.js");
var database = require("../database/config");

function inserirResposta(idUsuario, nome, habilitacao, tempoHabilitacao, motocicleta, tempoMotocicleta, suzuki, harley, kawasaki, honda, yamaha, dafra, shineray, ktm, bmw, triumph, ducati, eletricas) {
    var instrucaoSql = `
        INSERT INTO pesquisa (idUsuario, nome, habilitacao, tempoHabilitacao, motocicleta, tempoMotocicleta, suzuki, harley, kawasaki, honda, yamaha, dafra, shineray, ktm, bmw, triumph, ducati, eletricas)
        VALUES (${idUsuario}, '${nome}', '${habilitacao}', '${tempoHabilitacao}', '${motocicleta}', '${tempoMotocicleta}', ${suzuki}, ${harley}, ${kawasaki}, ${honda}, ${yamaha}, ${dafra}, ${shineray}, ${ktm}, ${bmw}, ${triumph}, ${ducati}, ${eletricas});
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function buscarRanking() {
    const instrucaoSql = `SELECT 
            'Suzuki' AS marca, SUM(CASE WHEN suzuki = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa UNION
        SELECT 
            'Harley' AS marca, SUM(CASE WHEN harley = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa UNION
        SELECT 
            'Kawasaki' AS marca, SUM(CASE WHEN kawasaki = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa UNION
        SELECT 
            'Honda' AS marca, SUM(CASE WHEN honda = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa UNION
        SELECT 
            'Yamaha' AS marca, SUM(CASE WHEN yamaha = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa UNION
        SELECT 
            'Dafra' AS marca, SUM(CASE WHEN dafra = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa UNION
        SELECT 
            'Shineray' AS marca, SUM(CASE WHEN shineray = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa UNION
        SELECT 
            'KTM' AS marca, SUM(CASE WHEN ktm = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa UNION
        SELECT 
            'BMW' AS marca, SUM(CASE WHEN bmw = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa UNION
        SELECT 
            'Triumph' AS marca, SUM(CASE WHEN triumph = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa UNION
        SELECT 
            'Ducati' AS marca, SUM(CASE WHEN ducati = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa UNION
        SELECT 
            'Elétricas' AS marca, SUM(CASE WHEN eletricas = '1' THEN 1 ELSE 0 END) AS escolhas FROM pesquisa
        ORDER BY escolhas DESC limit 3;`;
    console.log("Executando a instrução SQL para buscar ranking: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function buscarDadosGrafico() {
    const instrucaoSql = `SELECT 
            SUM(CASE WHEN suzuki = '1' THEN 1 ELSE 0 END) AS suzuki,
            SUM(CASE WHEN harley = '1' THEN 1 ELSE 0 END) AS harley,
            SUM(CASE WHEN kawasaki = '1' THEN 1 ELSE 0 END) AS kawasaki,
            SUM(CASE WHEN honda = '1' THEN 1 ELSE 0 END) AS honda,
            SUM(CASE WHEN yamaha = '1' THEN 1 ELSE 0 END) AS yamaha,
            SUM(CASE WHEN dafra = '1' THEN 1 ELSE 0 END) AS dafra,
            SUM(CASE WHEN shineray = '1' THEN 1 ELSE 0 END) AS shineray,
            SUM(CASE WHEN ktm = '1' THEN 1 ELSE 0 END) AS ktm,
            SUM(CASE WHEN bmw = '1' THEN 1 ELSE 0 END) AS bmw,
            SUM(CASE WHEN triumph = '1' THEN 1 ELSE 0 END) AS triumph,
            SUM(CASE WHEN ducati = '1' THEN 1 ELSE 0 END) AS ducati,
            SUM(CASE WHEN eletricas = '1' THEN 1 ELSE 0 END) AS eletricas
        FROM pesquisa;
 `;
    console.log("Executando a instrução SQL para buscar dados para gráfico: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


module.exports = {
    buscarDadosGrafico,
    inserirResposta,
    buscarRanking
};