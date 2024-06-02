var questionarioModel = require("../models/questionarioModel");

function cadastrarResposta(req, res) {
    var idUsuario = req.body.idUsuarioServer; 
    var correta1 = req.body.correta1VarServer;
    var correta2 = req.body.correta2VarServer;
    var correta3 = req.body.correta3VarServer;
    var correta4 = req.body.correta4VarServer;
    var correta5 = req.body.correta5VarServer;
    var quest1 = req.body.quest1Server;
    var quest2 = req.body.quest2Server;
    var quest3 = req.body.quest3Server;
    var quest4 = req.body.quest4Server;
    var quest5 = req.body.quest5Server;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id não foi definido")
    }
    else if (quest1 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (quest2 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (quest3 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (quest4 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (quest5 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (correta1 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (correta2 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (correta3 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (correta4 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (correta5 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else {

        questionarioModel.cadastrarResposta(idUsuario, correta1, correta2, correta3, correta4, correta5, quest1, quest2, quest3, quest4, quest5)

            .then(
                function (resultado) {
                    res.json(resultado);
                }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao cadastrar suas respostas. Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
    }
}


function cadastrarResposta2(req, res) {
    var idUsuario = req.body.idUsuarioServer; 
    var correta1 = req.body.correta1VarServer;
    var correta2 = req.body.correta2VarServer;
    var correta3 = req.body.correta3VarServer;
    var correta4 = req.body.correta4VarServer;
    var correta5 = req.body.correta5VarServer;
    var quest1 = req.body.quest1Server;
    var quest2 = req.body.quest2Server;
    var quest3 = req.body.quest3Server;
    var quest4 = req.body.quest4Server;
    var quest5 = req.body.quest5Server;

    if (idUsuario == undefined) {
        res.status(400).send("Seu id não foi definido")
    }
    else if (quest1 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (quest2 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (quest3 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (quest4 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (quest5 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (correta1 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (correta2 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (correta3 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (correta4 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (correta5 == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
     else {

        questionarioModel.cadastrarResposta2(idUsuario, correta1, correta2, correta3, correta4, correta5, quest1, quest2, quest3, quest4, quest5)

            .then(
                function (resultado) {
                    res.json(resultado);
                }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao cadastrar suas respostas. Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
    }
}

function cadastrarOrcamento(req, res) {
    var dis = req.body.disServer;
    var custoCombustao = req.body.custoCombustaoServer; 
    var custoEletrico = req.body.custoEletricoServer;
    var economia = req.body.economiaServer;
    
    if (custoCombustao == undefined) {
        res.status(400).send("Seu Resposta não foi definida")
    }
    else if (custoEletrico == undefined) {
        res.status(400).send("Sua Resposta não foi definida")
    }
    else if (economia == undefined) {
        res.status(400).send("Sua Resposta não foi definida")
    }
    else if (dis == undefined) {
        res.status(400).send("Sua Resposta não foi definida")
    }
    else {

        questionarioModel.cadastrarOrcamento(dis,custoCombustao,custoEletrico,economia)

            .then(
                function (resultado) {
                    res.json(resultado);
                }).catch(
                    function (erro) {
                        console.log(erro);
                        console.log("\nHouve um erro ao cadastrar suas respostas. Erro: ", erro.sqlMessage);
                        res.status(500).json(erro.sqlMessage);
                    }
                );
    }
}


function buscarOrcamento(req, res) {
    questionarioModel.buscarOrcamento()
        .then(resultadoAutenticar => {
            console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
            console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

            if (resultadoAutenticar.length > 0) {
                res.status(200).json(resultadoAutenticar);
            } else {
                res.status(200).json([]);
            }
        })
        .catch(erro => {
            console.log(erro);
            console.log("\nHouve um erro ao realizar o buscar orçamentos! Erro: ", erro.sqlMessage);
            res.status(500).json({ error: "Houve um erro ao realizar o buscar orçamentos!", details: erro.sqlMessage });
        });
}


module.exports = {
    cadastrarResposta,
    cadastrarResposta2,
    cadastrarOrcamento,
    buscarOrcamento
};