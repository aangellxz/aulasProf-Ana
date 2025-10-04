CREATE DATABASE users_db;
USE  users_db;

CREATE TABLE IF NOT EXISTS users(
id_user INT AUTO_INCREMENT PRIMARY KEY,
nome VARCHAR(100),
email VARCHAR(100) 
);

INSERT INTO users (nome, email) VALUES
('Larissa Pires', 'larissa.pires@example.com'),
('Marcelo Tavares', 'marcelo.tavares@example.com'),
('Patrícia Duarte', 'patricia.duarte@example.com'),
('Rodrigo Nascimento', 'rodrigo.nascimento@example.com'),
('Camila Ribeiro', 'camila.ribeiro@example.com'),
('Tiago Monteiro', 'tiago.monteiro@example.com'),
('Vanessa Carvalho', 'vanessa.carvalho@example.com'),
('Rafael Gomes', 'rafael.gomes@example.com'),
('Juliana Fernandes', 'juliana.fernandes@example.com'),
('André Moura', 'andre.moura@example.com');