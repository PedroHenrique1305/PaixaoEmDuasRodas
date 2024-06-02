var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu identificador está undefined!");
    } else{
    medidaModel.buscarUltimasMedidas(idUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar);
                
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Não foi encontrado nada no Banco de Dados");
                    } else {
                        res.status(403).send("já foram feitas selects ");
                    }
                }   
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
}

function buscarUltimasMedidas2(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu identificador está undefined!");
    } else{
    medidaModel.buscarUltimasMedidas2(idUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar);
                
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Não foi encontrado nada no Banco de Dados");
                    } else {
                        res.status(403).send("já foram feitas selects ");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


function buscarUltimasMedidas3(req, res) {

    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu identificador está undefined!");
    } else{

    medidaModel.buscarUltimasMedidas3(idUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar);
                
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Não foi encontrado nada no Banco de Dados");
                    } else {
                        res.status(403).send("já foram feitas selects ");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
}


function buscarUltimasMedidas4(req, res) {
    var idUsuario = req.params.idUsuario;

    if (idUsuario == undefined) {
        res.status(400).send("Seu identificador está undefined!");
    } else{
    medidaModel.buscarUltimasMedidas4(idUsuario)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar);
                
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Não foi encontrado nada no Banco de Dados");
                    } else {
                        res.status(403).send("já foram feitas selects ");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }
}


// controller do ADM

function buscarUltimasMedidasADM(req, res) {
   
    medidaModel.buscarUltimasMedidasADM()
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar);
                
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Não foi encontrado nada no Banco de Dados");
                    } else {
                        res.status(403).send("já foram feitas selects ");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }

function buscarUltimasMedidas2ADM(req, res) {
   
    medidaModel.buscarUltimasMedidas2ADM()
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar);
                
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Não foi encontrado nada no Banco de Dados");
                    } else {
                        res.status(403).send("já foram feitas selects ");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

function buscarUltimasMedidas3ADM(req, res) {

   

    medidaModel.buscarUltimasMedidas3ADM()
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar);
                
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Não foi encontrado nada no Banco de Dados");
                    } else {
                        res.status(403).send("já foram feitas selects ");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
        }


function buscarUltimasMedidas4ADM(req, res) {
   
    medidaModel.buscarUltimasMedidas4ADM()
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                        res.status(200).json(resultadoAutenticar);
                
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Não foi encontrado nada no Banco de Dados");
                    } else {
                        res.status(403).send("já foram feitas selects ");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
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