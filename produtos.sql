-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 29/11/2025 às 16:39
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `enfermagem_store`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `produtos`
--

CREATE TABLE `produtos` (
  `id` int(11) NOT NULL,
  `nome` varchar(100) NOT NULL,
  `preco` decimal(10,2) NOT NULL,
  `imagem` varchar(255) NOT NULL,
  `descricao` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `produtos`
--

INSERT INTO `produtos` (`id`, `nome`, `preco`, `imagem`, `descricao`) VALUES
(1, 'Crocs Profissional Azul', 149.90, 'https://i.pinimg.com/1200x/55/ba/d5/55bad5b37972f6698033334ef279d263.jpg', 'Conforto ideal para longos plantões.'),
(2, 'Crocs Rosa', 149.90, 'https://i.pinimg.com/736x/3d/f4/e8/3df4e8e5c5d6688f8f2fe89892dc81ea.jpg', 'Macio e antiderrapante.'),
(3, 'Estetoscópio Rosa', 139.90, 'https://i.pinimg.com/736x/b6/10/86/b610869aed48c752efaae1bdb18e9c79.jpg', 'Sensibilidade acústica.'),
(4, 'Scrub Azul', 199.90, 'https://i.pinimg.com/736x/d7/57/8e/d7578eee8f04fdc117e8791bf9c17ca0.jpg', 'Tecido leve e confortável.'),
(5, 'Pingentes de Crocs', 29.90, 'https://i.pinimg.com/736x/59/e7/04/59e704dd456bf2c8df179603b77e4124.jpg', 'Kit de pingentes temáticos.');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `produtos`
--
ALTER TABLE `produtos`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `produtos`
--
ALTER TABLE `produtos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
