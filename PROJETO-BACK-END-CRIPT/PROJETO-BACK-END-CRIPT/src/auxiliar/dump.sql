CREATE SCHEMA `senai` ;

CREATE TABLE `usuario` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(150) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `cpf` VARCHAR(20) NOT NULL,
  `ativo` INT NOT NULL,
  `data_cadastro` DATETIME NOT NULL,
  `nivel` INT NULL,
  PRIMARY KEY (`id`));

use senai;

INSERT INTO `usuario`
(`id`, `nome`, `email`, `cpf`, `ativo`, `data_cadastro`, `nivel`)
VALUES
(1, 'Ana Souza', 'ana.souza@senai.com', '12345678901', 1, NOW(), 3),
(2, 'Bruno Lima', 'bruno.lima@senai.com', '23456789012', 1, NOW(), 3),
(3, 'Carla Mendes', 'carla.mendes@senai.com', '34567890123', 1, NOW(), 3),
(4, 'Diego Ferreira', 'diego.ferreira@senai.com', '45678901234', 1, NOW(), 3),
(5, 'Eduarda Oliveira', 'eduarda.oliveira@senai.com', '56789012345', 1, NOW(), 3),
(6, 'Felipe Gomes', 'felipe.gomes@senai.com', '67890123456', 1, NOW(), 3),
(7, 'Gabriela Costa', 'gabriela.costa@senai.com', '78901234567', 1, NOW(), 2),
(8, 'Henrique Alves', 'henrique.alves@senai.com', '89012345678', 1, NOW(), 2),
(9, 'Isabela Martins', 'isabela.martins@senai.com', '90123456789', 1, NOW(), 2),
(10, 'João Pereira', 'joao.pereira@senai.com', '01234567890', 1, NOW(), 2),
(11, 'ADMIN', 'admin@senai.com', '11461116688', 1, NOW(), 1);


alter table usuario
add senha varchar(36) not null after email;