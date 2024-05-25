var medidaModel = require("../models/medidaModel");

function buscarUltimasMedidas(req, res) {

    medidaModel.buscarUltimasMedidas()
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

function buscarMedidasEmTempoReal(req, res) {

    medidaModel.buscarMedidasEmTempoReal()
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

function buscarUltimasMedidas2(req, res) {

    medidaModel.buscarUltimasMedidas2()
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

function buscarMedidasEmTempoReal2(req, res) {

    medidaModel.buscarMedidasEmTempoReal2()
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



function buscarUltimasMedidas3(req, res) {

    medidaModel.buscarUltimasMedidas3()
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

function buscarMedidasEmTempoReal3(req, res) {

    medidaModel.buscarMedidasEmTempoReal3()
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

function buscarUltimasMedidas4(req, res) {

    medidaModel.buscarUltimasMedidas4()
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

function buscarMedidasEmTempoReal4(req, res) {

    medidaModel.buscarMedidasEmTempoReal4()
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
    buscarMedidasEmTempoReal,
    buscarUltimasMedidas2,
    buscarMedidasEmTempoReal2,
    buscarUltimasMedidas3,
    buscarMedidasEmTempoReal3,
    buscarUltimasMedidas4,
    buscarMedidasEmTempoReal4
}