var pesquisaModel = require("../models/pesquisaModel.js");

function inserirResposta(req, res) {
    var idUsuario = req.body.idUsuarioServer; 
    var nome = req.body.nomeServer;
    var habilitacao = req.body.habilitacaoServer;
    var tempoHabilitacao = req.body.tempoHabilitacaoServer;
    var motocicleta = req.body.motocicletaServer;
    var tempoMotocicleta = req.body.tempoHabilitacaoServer;
    var suzuki = req.body.suzukiServer;
    var harley = req.body.harleyServer;
    var kawasaki = req.body.kawasakiServer;
    var honda = req.body.hondaServer;
    var yamaha = req.body.yamahaServer;
    var dafra = req.body.dafraServer;
    var shineray = req.body.shinerayServer;
    var ktm = req.body.ktmServer;
    var bmw = req.body.bmwServer;
    var triumph = req.body.triumphServer;
    var ducati = req.body.ducatiServer;
    var eletricas = req.body.eletricasServer;

    console.log("Dados recebidos no servidor:", req.body);

    if (idUsuario == undefined) {
        res.status(400).send("Seu id não foi definido")
    }
    else if (nome == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (habilitacao == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (tempoHabilitacao == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (motocicleta == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (tempoMotocicleta == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (suzuki == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (harley == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (kawasaki == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (honda == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (yamaha == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (dafra == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (shineray == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (ktm == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (bmw == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (triumph == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (ducati == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else if (eletricas == undefined) {
        res.status(400).send("Sua Resposta não foi cadastrada")
    }
    else {

        pesquisaModel.inserirResposta(idUsuario, nome, habilitacao, tempoHabilitacao, motocicleta, tempoMotocicleta, suzuki, harley, kawasaki, honda, yamaha, dafra, shineray, ktm, bmw, triumph, ducati, eletricas)
        .then(resultado => res.json(resultado))
        .catch(erro => {
            console.error("Erro ao inserir resposta:", erro);
            res.status(500).json(erro.sqlMessage);
        });
    }
}


function buscarRanking(req, res) {
    pesquisaModel.buscarRanking()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(error => {
            console.error('Erro ao buscar ranking:', error);
            res.status(500).json({ error: 'Erro ao buscar ranking' });
        });
}

function buscarDadosGrafico(req, res) {
    pesquisaModel.buscarDadosGrafico()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(error => {
            console.error('Erro ao buscar dados para gráfico:', error);
            res.status(500).json({ error: 'Erro ao buscar dados para gráfico' });
        });
}

module.exports = {
    buscarDadosGrafico,
    inserirResposta,
    buscarRanking
};