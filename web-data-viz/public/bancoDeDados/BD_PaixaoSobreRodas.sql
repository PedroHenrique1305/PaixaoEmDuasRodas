CREATE DATABASE paixao;

USE paixao;

CREATE TABLE usuario (
	id int primary key auto_increment,
	nome VARCHAR(100),
	email VARCHAR(256),
	senha VARCHAR(20)
);

select*from usuario;

insert into usuario values (1,'Pedro', 'pedro.cardoso@sptech.com', '12345');

create table questao(
idQuestao int primary key auto_increment,
descricao varchar(512),
pontos int,
questionario char(2)
);

select*from questao;

insert into questao values 
(1,'Qual é o aumento percentual da frota de motocicletas no Brasil nos últimos 10 anos?',2,1),
(2,' O que motivou o crescimento significativo da frota de motocicletas no Brasil?',2,1),
(3,'Quais foram os organizadores do Fórum Desafio em Duas Rodas mencionados no texto?',2,1),
(4,'Qual é um dos assuntos prioritários discutidos no Fórum Desafio em Duas Rodas?',2,1),
(5,'Qual foi o ponto elogiado no fórum mencionado no texto?',2,1);

insert into questao values 
(6,'Qual é uma das vantagens das motocicletas elétricas em termos de sustentabilidade ambiental?',2,2),
(7,'Qual objetivo de desenvolvimento sustentável da ONU é abordado pelo uso de motocicletas elétricas?',2,2),
(8,'Por que as motocicletas elétricas contribuem para a segurança energética?',2,2),
(9,'Qual aspecto das motocicletas elétricas contribui para a melhoria da saúde urbana?',2,2),
(10,'Por que a manutenção das motocicletas elétricas é simplificada em comparação com as convencionais?',2,2);


CREATE TABLE resposta(
	idResposta int primary key auto_increment,
    pergunta char(2),
	resposta char(2),   
    fkUsuario int,
     constraint fkRespostaUsuario foreign key (fkUsuario) references usuario(id),
    fkQuestao int,
    constraint fkRespostaQuestionario foreign key (fkQuestao) references questao(idQuestao),
    correta char(3)
);

select*from resposta;


create table orcamento (
idOrcamento int primary key auto_increment,
KmOrcado int,
CustoCombustao decimal(7,2),
CustoEletrico decimal(7,2),
economia decimal(7,2)
);

select*from orcamento;


SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1 AND fkUsuario = 14)) AS CHAR), 2) AS percentagem_respostas_certas1,
                   LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1 AND fkUsuario = 14)) AS CHAR), 2) AS percentagem_respostas_erradas1
            FROM resposta
            WHERE fkQuestao = 1 AND fkUsuario = 14 AND correta = 'sim';
        

-- comando para saber as respostas certas e erradas de um questionario
SELECT COUNT(*) AS total_respostas_certas1 FROM resposta where correta ='sim' and fkQuestao = 1;
SELECT COUNT(*) AS total_respostas_erradas1 FROM resposta where correta ='nao' and fkQuestao = 1;

SELECT COUNT(*) AS total_respostas_certas2 FROM resposta where correta ='sim' and fkQuestao = 2;
SELECT COUNT(*) AS total_respostas_erradas2 FROM resposta where correta ='nao' and fkQuestao = 2;

-- comando para pegar a quantidade de respostas em uma alternativa desejada ex: o a foi respondido 10x 
SELECT COUNT(*) AS total_respostas FROM resposta where pergunta = 1 and resposta = 'a' ;

-- comando para pegar o total de respostas em cada questionario generalizado
SELECT COUNT(*) AS total_respostas FROM resposta where fkQuestao = 1;
SELECT COUNT(*) AS total_respostas FROM resposta where fkQuestao = 2 ;

-- comando para pegar o total de respostas cadastradas na tabela de acordo com os dois questionarios
SELECT COUNT(*) AS total_respostas FROM resposta;

-- comando para pegar as respostas certas de apenas uma pessoa
SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1)) AS CHAR), 2) AS percentagem_respostas_certas1 
FROM resposta WHERE correta = 'sim' AND fkQuestao = 1 and fkUsuario = 1;

SELECT LEFT(CAST((COUNT(*) * 100 / (SELECT COUNT(*) FROM resposta WHERE fkQuestao = 1 and fkUsuario = 14)) AS CHAR), 2) AS percentagem_respostas_certas1
FROM resposta WHERE correta = 'sim' AND fkQuestao = 1 and fkUsuario = 14;


select * from usuario join resposta on usuario.id= resposta.fkusuario join questao on idQuestao = fkQuestao;

select  resposta.resposta, questao.descricao,questao.pontos, usuario.nome
 from usuario join resposta on idResposta = id join questao on idQuestao = fkQuestao;

select * from resposta join usuario on id = fkusuario;

select * from orcamento;
show tables;