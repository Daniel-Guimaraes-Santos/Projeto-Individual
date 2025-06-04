-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

CREATE DATABASE TftMastery;
USE TftMastery;

CREATE TABLE usuario (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL UNIQUE,
  senha VARCHAR(100) NOT NULL
);

CREATE TABLE quiz (
  id INT PRIMARY KEY,
  nome VARCHAR(20) NOT NULL
);

CREATE TABLE placar (
  id INT AUTO_INCREMENT,
  acertos INT,
  erros INT,
  fkUsuario INT,
  fkQuiz INT,
  data_hora DATETIME DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT FkUser FOREIGN KEY (fkUsuario) REFERENCES usuario(id),
  CONSTRAINT FkQui FOREIGN KEY (fkQuiz) REFERENCES quiz(id),
  CONSTRAINT PkComposta PRIMARY KEY (id, fkUsuario, fkQuiz)
);

INSERT INTO quiz (id, nome) VALUES
(1, 'itens'),
(2, 'classes');
